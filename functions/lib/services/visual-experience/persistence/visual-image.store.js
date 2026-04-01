"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualImageStore = void 0;
const node_buffer_1 = require("node:buffer");
const node_crypto_1 = require("node:crypto");
const firestore_1 = require("firebase-admin/firestore");
const firebase_admin_1 = require("../../../lib/firebase-admin");
const DEFAULT_CACHE_COLLECTION = 'visual_image_cache';
const DEFAULT_USAGE_COLLECTION = 'visual_image_usage';
const DEFAULT_DAILY_LIMIT = 20;
const DEFAULT_GENERATION_LOCK_TTL_MS = 5 * 60 * 1000;
const STORAGE_CONTENT_TYPE = 'image/png';
function readEnvNumber(name, fallback) {
    const raw = process.env[name]?.trim();
    if (!raw) {
        return fallback;
    }
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return fallback;
    }
    return Math.floor(parsed);
}
function manifestToResult(manifest) {
    return {
        imageUrl: manifest.imageUrl,
        status: manifest.status === 'generated' ? 'cached' : 'fallback',
        providerUsed: manifest.providerUsed ?? 'fallback',
        generatedAt: manifest.generatedAt?.toDate().toISOString() ?? manifest.updatedAt.toDate().toISOString(),
        hashKey: manifest.hashKey,
    };
}
function decodeDataUrl(dataUrl) {
    const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) {
        throw new Error('URL de dados inválida.');
    }
    const [, contentType, base64] = match;
    return {
        buffer: node_buffer_1.Buffer.from(base64, 'base64'),
        contentType,
    };
}
function buildDownloadToken() {
    return (0, node_crypto_1.randomUUID)().replace(/-/g, '');
}
function buildStoragePublicUrl(bucketName, storagePath, token) {
    return `https://firebasestorage.googleapis.com/v0/b/${encodeURIComponent(bucketName)}/o/${encodeURIComponent(storagePath)}?alt=media&token=${encodeURIComponent(token)}`;
}
function buildUsageDocId(tenantId, dayKey) {
    return `${tenantId}__${dayKey}`;
}
function buildDayKey(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Sao_Paulo',
    }).format(date);
}
function isWithinTtl(updatedAt, ttlMs) {
    return Date.now() - updatedAt.toMillis() < ttlMs;
}
function isGeneratedManifest(manifest) {
    return Boolean(manifest && manifest.status === 'generated' && manifest.imageUrl);
}
function isFreshGeneratingManifest(manifest, ttlMs = DEFAULT_GENERATION_LOCK_TTL_MS) {
    return Boolean(manifest && manifest.status === 'generating' && isWithinTtl(manifest.updatedAt, ttlMs));
}
function isFreshFailedManifest(manifest, ttlMs = DEFAULT_GENERATION_LOCK_TTL_MS) {
    return Boolean(manifest && manifest.status === 'failed' && isWithinTtl(manifest.updatedAt, ttlMs));
}
function parseImageBytes(imageUrl) {
    if (imageUrl.startsWith('data:')) {
        return decodeDataUrl(imageUrl);
    }
    return fetch(imageUrl).then(async (response) => {
        if (!response.ok) {
            throw new Error(`Falha ao ler imagem gerada: ${response.status} ${response.statusText}`);
        }
        const contentType = response.headers.get('content-type')?.trim() || STORAGE_CONTENT_TYPE;
        return {
            buffer: node_buffer_1.Buffer.from(await response.arrayBuffer()),
            contentType,
        };
    });
}
class VisualImageStore {
    cacheCollection;
    usageCollection;
    bucketName;
    dailyLimitPerTenant;
    generationLockTtlMs;
    constructor(config = {}) {
        this.cacheCollection = config.cacheCollection ?? DEFAULT_CACHE_COLLECTION;
        this.usageCollection = config.usageCollection ?? DEFAULT_USAGE_COLLECTION;
        this.bucketName = config.bucketName ?? process.env.FIREBASE_STORAGE_BUCKET?.trim();
        this.dailyLimitPerTenant = config.dailyLimitPerTenant ?? readEnvNumber('VISUAL_IMAGE_MAX_GENERATIONS_PER_TENANT_PER_DAY', DEFAULT_DAILY_LIMIT);
        this.generationLockTtlMs = config.generationLockTtlMs ?? DEFAULT_GENERATION_LOCK_TTL_MS;
    }
    hasPersistentStorage() {
        return Boolean(this.bucketName);
    }
    manifestRef(hashKey) {
        return firebase_admin_1.adminDb.collection(this.cacheCollection).doc(hashKey);
    }
    usageRef(tenantId, dayKey) {
        return firebase_admin_1.adminDb.collection(this.usageCollection).doc(buildUsageDocId(tenantId, dayKey));
    }
    bucket() {
        if (!this.bucketName) {
            return null;
        }
        return firebase_admin_1.adminStorage.bucket(this.bucketName);
    }
    async getManifest(hashKey) {
        const snap = await this.manifestRef(hashKey).get();
        if (!snap.exists) {
            return null;
        }
        return snap.data();
    }
    async getCachedResult(hashKey) {
        const manifest = await this.getManifest(hashKey);
        if (!isGeneratedManifest(manifest)) {
            return null;
        }
        return manifestToResult(manifest);
    }
    async waitForGeneratedResult(hashKey, maxAttempts = 6, delayMs = 200) {
        for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
            const cached = await this.getCachedResult(hashKey);
            if (cached) {
                return cached;
            }
            await new Promise((resolve) => setTimeout(resolve, delayMs));
        }
        return null;
    }
    async reserveGenerationSlot(request, hashKey) {
        const manifestRef = this.manifestRef(hashKey);
        const dayKey = buildDayKey();
        const usageRef = this.usageRef(request.tenantId ?? 'global', dayKey);
        const now = firestore_1.Timestamp.now();
        const result = await firebase_admin_1.adminDb.runTransaction(async (transaction) => {
            const manifestSnap = await transaction.get(manifestRef);
            const manifest = manifestSnap.exists ? manifestSnap.data() : null;
            if (isGeneratedManifest(manifest)) {
                return { cachedResult: manifestToResult(manifest) };
            }
            if (isFreshGeneratingManifest(manifest, this.generationLockTtlMs)) {
                return { alreadyGenerating: true };
            }
            if (isFreshFailedManifest(manifest, this.generationLockTtlMs)) {
                return { alreadyGenerating: false };
            }
            const usageSnap = await transaction.get(usageRef);
            const currentCount = Number(usageSnap.exists ? usageSnap.data()?.count ?? 0 : 0);
            if (currentCount >= this.dailyLimitPerTenant) {
                throw new Error('VISUAL_IMAGE_TENANT_LIMIT_REACHED');
            }
            transaction.set(usageRef, {
                tenantId: request.tenantId ?? 'global',
                dayKey,
                count: currentCount + 1,
                limit: this.dailyLimitPerTenant,
                updatedAt: now,
                createdAt: usageSnap.exists ? usageSnap.data()?.createdAt ?? now : now,
            });
            transaction.set(manifestRef, {
                hashKey,
                tenantId: request.tenantId,
                screenId: request.screenId,
                module: request.module,
                stateType: request.stateType,
                imagePrompt: request.imagePrompt,
                imageConcept: request.imageConcept,
                status: 'generating',
                createdAt: manifestSnap.exists ? manifestSnap.data().createdAt : now,
                updatedAt: now,
            });
            return { alreadyGenerating: false };
        });
        return result;
    }
    async persistGeneratedImage(request, hashKey, generated) {
        const bucket = this.bucket();
        const manifestRef = this.manifestRef(hashKey);
        const now = firestore_1.Timestamp.now();
        if (!generated.imageUrl) {
            await manifestRef.set({
                hashKey,
                tenantId: request.tenantId,
                screenId: request.screenId,
                module: request.module,
                stateType: request.stateType,
                imagePrompt: request.imagePrompt,
                imageConcept: request.imageConcept,
                status: 'failed',
                providerUsed: generated.providerUsed,
                errorMessage: generated.imageUrl ? undefined : 'Imagem gerada sem URL persistível.',
                updatedAt: now,
                generatedAt: now,
            }, { merge: true });
            return {
                ...generated,
                status: 'fallback',
                generatedAt: now.toDate().toISOString(),
                hashKey,
            };
        }
        const storagePath = `visual-experience/${request.tenantId ?? 'global'}/${hashKey}.png`;
        let imageUrl = generated.imageUrl;
        if (bucket) {
            const imageData = await parseImageBytes(generated.imageUrl);
            const downloadToken = buildDownloadToken();
            const file = bucket.file(storagePath);
            await file.save(imageData.buffer, {
                resumable: false,
                metadata: {
                    contentType: imageData.contentType || STORAGE_CONTENT_TYPE,
                    metadata: {
                        firebaseStorageDownloadTokens: downloadToken,
                        hashKey,
                        tenantId: request.tenantId ?? 'global',
                        screenId: request.screenId,
                        module: request.module,
                    },
                },
            });
            imageUrl = buildStoragePublicUrl(bucket.name, storagePath, downloadToken);
        }
        await manifestRef.set({
            hashKey,
            tenantId: request.tenantId,
            screenId: request.screenId,
            module: request.module,
            stateType: request.stateType,
            imagePrompt: request.imagePrompt,
            imageConcept: request.imageConcept,
            status: 'generated',
            providerUsed: generated.providerUsed,
            imageUrl,
            storagePath: bucket ? storagePath : undefined,
            updatedAt: now,
            generatedAt: now,
        }, { merge: true });
        return {
            ...generated,
            imageUrl,
            status: 'generated',
            generatedAt: now.toDate().toISOString(),
            hashKey,
        };
    }
    async markFailed(request, hashKey, reason, providerUsed) {
        await this.manifestRef(hashKey).set({
            hashKey,
            tenantId: request.tenantId,
            screenId: request.screenId,
            module: request.module,
            stateType: request.stateType,
            imagePrompt: request.imagePrompt,
            imageConcept: request.imageConcept,
            status: 'failed',
            providerUsed,
            errorMessage: reason,
            updatedAt: firestore_1.Timestamp.now(),
            generatedAt: firestore_1.Timestamp.now(),
        }, { merge: true });
    }
}
exports.VisualImageStore = VisualImageStore;
