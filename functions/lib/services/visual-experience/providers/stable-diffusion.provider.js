"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableDiffusionImageProvider = void 0;
const node_crypto_1 = require("node:crypto");
function readEnv(name) {
    const value = process.env[name]?.trim();
    return value ? value : undefined;
}
class StableDiffusionImageProvider {
    name = 'stable-diffusion';
    isAvailable() {
        return Boolean(readEnv('STABLE_DIFFUSION_API_URL'));
    }
    async generate(request) {
        const apiUrl = readEnv('STABLE_DIFFUSION_API_URL');
        if (!apiUrl) {
            throw new Error('STABLE_DIFFUSION_API_URL ausente.');
        }
        const apiKey = readEnv('STABLE_DIFFUSION_API_KEY');
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
            },
            body: JSON.stringify({
                prompt: request.imagePrompt,
                concept: request.imageConcept,
                size: '1024x1024',
            }),
        });
        if (!response.ok) {
            throw new Error(`Stable Diffusion generation failed: ${response.status} ${response.statusText}`);
        }
        const payload = (await response.json());
        const imageUrl = payload.imageUrl ?? payload.url ?? payload.data?.[0]?.url;
        if (!imageUrl) {
            throw new Error('Resposta de Stable Diffusion sem URL de imagem.');
        }
        return {
            imageUrl,
            status: 'generated',
            providerUsed: this.name,
            generatedAt: new Date().toISOString(),
            hashKey: (0, node_crypto_1.randomUUID)(),
        };
    }
}
exports.StableDiffusionImageProvider = StableDiffusionImageProvider;
