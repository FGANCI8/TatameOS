"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGenerationService = void 0;
const node_crypto_1 = require("node:crypto");
const https_1 = require("firebase-functions/v2/https");
const visual_image_store_1 = require("./persistence/visual-image.store");
const openai_provider_1 = require("./providers/openai.provider");
const stable_diffusion_provider_1 = require("./providers/stable-diffusion.provider");
const visual_image_policy_1 = require("./visual-image-policy");
function buildHashKey(request) {
    return (0, node_crypto_1.createHash)('sha256')
        .update([
        request.imagePrompt,
        request.imageConcept,
        request.screenId,
        request.module,
        request.tenantId ?? '',
        request.stateType ?? '',
    ].join('|'))
        .digest('hex');
}
function fallbackResult(hashKey, options = {}) {
    return {
        imageUrl: options.imageUrl,
        status: 'fallback',
        providerUsed: options.providerUsed ?? 'fallback',
        generatedAt: new Date().toISOString(),
        hashKey,
    };
}
function logVisualEvent(event, payload) {
    console.info(JSON.stringify({
        level: 'info',
        service: 'visual-image-generation',
        event,
        ...payload,
    }));
}
class ImageGenerationService {
    store;
    providers;
    constructor(providers, store) {
        this.store = store ?? new visual_image_store_1.VisualImageStore();
        this.providers =
            providers ?? [new openai_provider_1.OpenAIImageProvider(), new stable_diffusion_provider_1.StableDiffusionImageProvider()].filter((provider) => provider.isAvailable());
    }
    async generate(request) {
        const hashKey = buildHashKey(request);
        const tenantId = request.tenantId ?? 'global';
        if (!(0, visual_image_policy_1.shouldGenerateVisualImage)(request)) {
            logVisualEvent('policy_blocked', {
                hashKey,
                tenantId,
                screenId: request.screenId,
                module: request.module,
                stateType: request.stateType ?? 'unknown',
            });
            return fallbackResult(hashKey);
        }
        const cached = await this.store.getCachedResult(hashKey);
        if (cached) {
            logVisualEvent('cache_hit', {
                hashKey,
                tenantId,
                screenId: request.screenId,
                module: request.module,
                providerUsed: cached.providerUsed,
            });
            return cached;
        }
        const manifest = await this.store.getManifest(hashKey);
        if (manifest?.status === 'generating') {
            const resolved = await this.store.waitForGeneratedResult(hashKey);
            if (resolved) {
                logVisualEvent('cache_wait_resolved', {
                    hashKey,
                    tenantId,
                    screenId: request.screenId,
                    module: request.module,
                    providerUsed: resolved.providerUsed,
                });
                return resolved;
            }
        }
        if (manifest?.status === 'failed') {
            logVisualEvent('recent_failure_reused', {
                hashKey,
                tenantId,
                screenId: request.screenId,
                module: request.module,
            });
            return fallbackResult(hashKey);
        }
        try {
            const reservation = await this.store.reserveGenerationSlot(request, hashKey);
            if (reservation.cachedResult) {
                logVisualEvent('cache_hit_after_reservation', {
                    hashKey,
                    tenantId,
                    screenId: request.screenId,
                    module: request.module,
                    providerUsed: reservation.cachedResult.providerUsed,
                });
                return reservation.cachedResult;
            }
            if (reservation.alreadyGenerating) {
                const resolved = await this.store.waitForGeneratedResult(hashKey);
                if (resolved) {
                    logVisualEvent('cache_wait_resolved_after_reservation', {
                        hashKey,
                        tenantId,
                        screenId: request.screenId,
                        module: request.module,
                        providerUsed: resolved.providerUsed,
                    });
                    return resolved;
                }
            }
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Erro desconhecido';
            if (message === 'VISUAL_IMAGE_TENANT_LIMIT_REACHED') {
                logVisualEvent('tenant_limit_reached', {
                    hashKey,
                    tenantId,
                    screenId: request.screenId,
                    module: request.module,
                });
                throw new https_1.HttpsError('resource-exhausted', 'Limite diário de geração de imagens atingido para este tenant.');
            }
            throw error;
        }
        for (const provider of this.providers) {
            try {
                logVisualEvent('provider_selected', {
                    hashKey,
                    tenantId,
                    screenId: request.screenId,
                    module: request.module,
                    provider: provider.name,
                    persistentStorageEnabled: this.store.hasPersistentStorage(),
                });
                const generated = await provider.generate(request);
                try {
                    const persisted = await this.store.persistGeneratedImage(request, hashKey, generated);
                    logVisualEvent('image_persisted', {
                        hashKey,
                        tenantId,
                        screenId: request.screenId,
                        module: request.module,
                        provider: persisted.providerUsed,
                        status: persisted.status,
                        storageBacked: persisted.imageUrl?.startsWith('https://firebasestorage.googleapis.com/') ?? false,
                    });
                    return persisted;
                }
                catch (persistError) {
                    const message = persistError instanceof Error ? persistError.message : 'Erro desconhecido';
                    await this.store.markFailed(request, hashKey, message, provider.name);
                    logVisualEvent('storage_persist_failed', {
                        hashKey,
                        tenantId,
                        screenId: request.screenId,
                        module: request.module,
                        provider: provider.name,
                        message,
                    });
                    return fallbackResult(hashKey, {
                        imageUrl: generated.imageUrl,
                        providerUsed: provider.name,
                    });
                }
            }
            catch (providerError) {
                const message = providerError instanceof Error ? providerError.message : 'Erro desconhecido';
                logVisualEvent('provider_failed', {
                    hashKey,
                    tenantId,
                    screenId: request.screenId,
                    module: request.module,
                    provider: provider.name,
                    message,
                });
            }
        }
        await this.store.markFailed(request, hashKey, 'Nenhum provider de imagem retornou resultado válido.');
        logVisualEvent('generation_fallback', {
            hashKey,
            tenantId,
            screenId: request.screenId,
            module: request.module,
        });
        return fallbackResult(hashKey);
    }
}
exports.ImageGenerationService = ImageGenerationService;
