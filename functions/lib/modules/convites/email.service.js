"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendEmailService = exports.MockEmailService = void 0;
exports.buildInviteEmailPayload = buildInviteEmailPayload;
exports.buildMilestoneEmailPayload = buildMilestoneEmailPayload;
exports.createEmailService = createEmailService;
function buildInviteEmailPayload(input) {
    const greetingName = input.inviteeName?.trim() || 'você';
    return {
        to: input.to,
        subject: `Convite para ativar sua conta - ${input.academyName}`,
        html: `
      <p>Olá, <strong>${greetingName}</strong>.</p>
      <p>Você foi convidado para ativar sua conta na academia <strong>${input.academyName}</strong>.</p>
      <p>Clique no link abaixo para concluir a ativação:</p>
      <p><a href="${input.inviteUrl}">${input.inviteUrl}</a></p>
      <p>Este convite expira em 48 horas.</p>
    `,
        text: `Olá, ${greetingName}. Você foi convidado para ativar sua conta na academia ${input.academyName}. Acesse: ${input.inviteUrl}. Expira em 48 horas.`,
    };
}
function buildMilestoneEmailPayload(input) {
    const recipientName = input.recipientName?.trim() || 'atleta';
    const audienceLabel = input.isProfessor ? 'Professor(a)' : 'Aluno(a)';
    const subject = input.isProfessor
        ? `Aluno atingiu ${input.milestoneHours}h de prontidão - ${input.studentName}`
        : `Parabéns! Você atingiu ${input.milestoneHours}h de treino`;
    return {
        to: input.to,
        subject,
        html: `
      <p>Olá, <strong>${recipientName}</strong>.</p>
      <p>${input.isProfessor ? 'O aluno' : 'Você'} <strong>${input.studentName}</strong> atingiu <strong>${input.milestoneHours} horas</strong> de treino na academia <strong>${input.academyName}</strong>.</p>
      <p>${input.isProfessor
            ? 'Ele entrou na sua fila de promoção e já está pronto para avaliação.'
            : 'Você atingiu a meta para a próxima graduação. Continue focado e mantenha a consistência.'}
      </p>
      <p>Mensagem enviada para o contexto ${audienceLabel}.</p>
    `,
        text: input.isProfessor
            ? `Olá, ${recipientName}. O aluno ${input.studentName} atingiu ${input.milestoneHours} horas de treino na academia ${input.academyName} e já está na fila de promoção.`
            : `Olá, ${recipientName}. Parabéns! Você atingiu ${input.milestoneHours} horas de treino na academia ${input.academyName}. Continue focado e mantenha a consistência.`,
    };
}
class MockEmailService {
    async sendInviteEmail(payload) {
        console.log(JSON.stringify({
            channel: 'mock-email',
            to: payload.to,
            subject: payload.subject,
            text: payload.text,
        }, null, 2));
    }
    async sendMilestoneEmail(payload) {
        console.log(JSON.stringify({
            channel: 'mock-email',
            to: payload.to,
            subject: payload.subject,
            text: payload.text,
        }, null, 2));
    }
}
exports.MockEmailService = MockEmailService;
class ResendEmailService {
    apiKey;
    fromEmail;
    constructor(apiKey, fromEmail) {
        this.apiKey = apiKey;
        this.fromEmail = fromEmail;
    }
    async sendInviteEmail(payload) {
        await this.send(payload);
    }
    async sendMilestoneEmail(payload) {
        await this.send(payload);
    }
    async send(payload) {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: this.fromEmail,
                to: payload.to,
                subject: payload.subject,
                html: payload.html,
                text: payload.text,
            }),
        });
        if (!response.ok) {
            const body = await response.text();
            throw new Error(`Falha ao enviar e-mail: ${response.status} ${body}`);
        }
    }
}
exports.ResendEmailService = ResendEmailService;
function createEmailService() {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
    if (apiKey && fromEmail) {
        return new ResendEmailService(apiKey, fromEmail);
    }
    return new MockEmailService();
}
