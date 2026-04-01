"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIImageProvider = void 0;
const node_crypto_1 = require("node:crypto");
function readEnv(name) {
    const value = process.env[name]?.trim();
    return value ? value : undefined;
}
class OpenAIImageProvider {
    name = 'openai';
    isAvailable() {
        return Boolean(readEnv('OPENAI_API_KEY'));
    }
    async generate(request) {
        const apiKey = readEnv('OPENAI_API_KEY');
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY ausente.');
        }
        const model = readEnv('OPENAI_IMAGE_MODEL') ?? 'gpt-image-1';
        const size = readEnv('OPENAI_IMAGE_SIZE') ?? '1024x1024';
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                prompt: request.imagePrompt,
                size,
                response_format: 'b64_json',
            }),
        });
        if (!response.ok) {
            throw new Error(`OpenAI image generation failed: ${response.status} ${response.statusText}`);
        }
        const payload = (await response.json());
        const candidate = payload.data?.[0];
        if (!candidate) {
            throw new Error('Resposta da OpenAI sem dados de imagem.');
        }
        const imageUrl = candidate.b64_json
            ? `data:image/png;base64,${candidate.b64_json}`
            : candidate.url;
        if (!imageUrl) {
            throw new Error('Resposta da OpenAI sem URL ou base64 de imagem.');
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
exports.OpenAIImageProvider = OpenAIImageProvider;
