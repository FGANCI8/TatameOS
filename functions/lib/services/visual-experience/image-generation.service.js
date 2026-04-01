"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageGenerationService = void 0;
const node_crypto_1 = require("node:crypto");
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
function fallbackResult(hashKey) {
    return {
        status: 'fallback',
        providerUsed: 'fallback',
        generatedAt: new Date().toISOString(),
        hashKey,
    };
}
class ImageGenerationService {
    cache = new Map();
    providers;
    ttlMs = 60 * 60 * 1000;
    constructor(providers) {
        this.providers =
            providers ?? [new openai_provider_1.OpenAIImageProvider(), new stable_diffusion_provider_1.StableDiffusionImageProvider()].filter((provider) => provider.isAvailable());
    }
    async generate(request) {
        const hashKey = buildHashKey(request);
        const cached = this.cache.get(hashKey);
        if (cached && cached.expiresAt > Date.now()) {
            return {
                ...cached.result,
                status: 'cached',
                hashKey,
            };
        }
        if (!(0, visual_image_policy_1.shouldGenerateVisualImage)(request)) {
            return fallbackResult(hashKey);
        }
        for (const provider of this.providers) {
            try {
                const generated = await provider.generate(request);
                const result = {
                    ...generated,
                    status: 'generated',
                    hashKey,
                };
                this.cache.set(hashKey, {
                    result,
                    expiresAt: Date.now() + this.ttlMs,
                });
                return result;
            }
            catch (error) {
                continue;
            }
        }
        return fallbackResult(hashKey);
    }
}
exports.ImageGenerationService = ImageGenerationService;
