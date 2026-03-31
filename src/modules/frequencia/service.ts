import type { ServiceResult } from '../core/types';
import type {
  CheckinIntent,
  FrequenciaAlunoPainel,
  FrequenciaMarcosAluno,
  FrequenciaProfessorPainel,
  GerarCheckinAlunoInput,
  IFrequenciaRepository,
  IFrequenciaService,
  RegistrarCheckinManualInput,
  ValidarCheckinQrInput,
} from './types';

const CHECKIN_WINDOW_MINUTES = 3;
const MARCOS_PADRAO = [10, 50];

function getSecret(): string {
  const secret = import.meta.env.VITE_CHECKIN_QR_SECRET || import.meta.env.VITE_APP_CHECKIN_QR_SECRET;

  if (!secret?.trim()) {
    throw new Error('Variável obrigatória ausente: VITE_CHECKIN_QR_SECRET.');
  }

  const normalized = secret.trim().toLowerCase();
  if (normalized.startsWith('sua_') || normalized.startsWith('seu_') || normalized.includes('placeholder') || normalized.startsWith('dummy')) {
    throw new Error('VITE_CHECKIN_QR_SECRET contém placeholder e não pode ser usada como segredo válido.');
  }

  return secret.trim();
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToBytes(value: string): Uint8Array {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(base64);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function encodePayload(payload: Record<string, unknown>): string {
  return bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
}

function decodePayload<T>(segment: string): T {
  const decoded = new TextDecoder().decode(base64UrlToBytes(segment));
  return JSON.parse(decoded) as T;
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

async function signPayload(payload: string, secret: string): Promise<string> {
  const key = await importHmacKey(secret);
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function verifyPayload(payload: string, signature: string, secret: string): Promise<boolean> {
  const key = await importHmacKey(secret);
  return crypto.subtle.verify('HMAC', key, base64UrlToBytes(signature), new TextEncoder().encode(payload));
}

async function buildSignedToken(input: GerarCheckinAlunoInput, expiresAt: Date, nonce: string, secret: string) {
  const issuedAt = Date.now();
  const payload = encodePayload({
    version: 1,
    tenantId: input.tenantId,
    alunoId: input.alunoId,
    issuedAt,
    expiresAt: expiresAt.getTime(),
    nonce,
  });
  const signature = await signPayload(payload, secret);

  return {
    token: `${payload}.${signature}`,
    payload: {
      version: 1 as const,
      tenantId: input.tenantId,
      alunoId: input.alunoId,
      issuedAt,
      expiresAt: expiresAt.getTime(),
      nonce,
    },
  };
}

async function parseToken(token: string, secret: string): Promise<{
  payload: { version: 1; tenantId: string; alunoId: string; issuedAt: number; expiresAt: number; nonce: string };
  valid: boolean;
}> {
  const [payloadSegment, signature] = token.split('.');
  if (!payloadSegment || !signature) {
    return {
      payload: { version: 1, tenantId: '', alunoId: '', issuedAt: 0, expiresAt: 0, nonce: '' },
      valid: false,
    };
  }

  const valid = await verifyPayload(payloadSegment, signature, secret);
  if (!valid) {
    return {
      payload: { version: 1, tenantId: '', alunoId: '', issuedAt: 0, expiresAt: 0, nonce: '' },
      valid: false,
    };
  }

  return {
    payload: decodePayload<{ version: 1; tenantId: string; alunoId: string; issuedAt: number; expiresAt: number; nonce: string }>(payloadSegment),
    valid: true,
  };
}

function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
}

function uniqueDayKey(value: Date): string {
  return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

function parseLocalDayKey(value: string): Date {
  return new Date(`${value}T00:00:00`);
}

function computeStreak(presencas: Array<{ data: Date }>): number {
  const uniqueDays = Array.from(new Set(presencas.map((presenca) => uniqueDayKey(presenca.data)))).sort(
    (a, b) => b.localeCompare(a),
  );

  if (uniqueDays.length === 0) {
    return 0;
  }

  let streak = 1;
  for (let i = 0; i < uniqueDays.length - 1; i += 1) {
    const current = parseLocalDayKey(uniqueDays[i]);
    const next = parseLocalDayKey(uniqueDays[i + 1]);
    const diffDays = Math.round((current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
}

function buildMarcos(total: number): { marcos: FrequenciaMarcosAluno[]; proximoMarco: FrequenciaMarcosAluno | null } {
  const marcos = MARCOS_PADRAO.map((meta) => ({
    chave: `${meta}`,
    titulo: `${meta} aulas`,
    meta,
    conquistado: total >= meta,
  }));

  const proximoMarco = marcos.find((marco) => !marco.conquistado) || null;
  return { marcos, proximoMarco };
}

function buildResumoAlunos(presencasRecentes: Array<{ data: Date; horasIncrementadas: number }>) {
  const totalPresencasAno = presencasRecentes.length;
  const sequenciaAtual = computeStreak(presencasRecentes);
  const ultimaPresenca = presencasRecentes[0]?.data;
  const { marcos, proximoMarco } = buildMarcos(totalPresencasAno);

  return {
    totalPresencasAno,
    sequenciaAtual,
    ultimaPresenca,
    marcos,
    proximoMarco,
  };
}

export class FrequenciaService implements IFrequenciaService {
  constructor(private readonly repository: IFrequenciaRepository) {}

  private async criarNovaIntencao(tenantId: string, alunoId: string): Promise<CheckinIntent> {
    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + CHECKIN_WINDOW_MINUTES * 60 * 1000);
    const id = globalThis.crypto.randomUUID();
    const { token } = await buildSignedToken({ tenantId, alunoId }, expiresAt, id, getSecret());

    return this.repository.criarOuReutilizarIntencao({
      id,
      tenantId,
      alunoId,
      qrToken: token,
      issuedAt,
      expiresAt,
    });
  }

  private async montarResumoAluno(tenantId: string, alunoId: string) {
    const aluno = await this.repository.obterAlunoPorId(tenantId, alunoId);
    if (!aluno) {
      return { success: false as const, error: 'Aluno não encontrado.' };
    }

    const agora = new Date();
    const presencasAno = await this.repository.listarPresencasDoAlunoDesde(tenantId, alunoId, startOfYear(agora));
    const presencasRecentes = await this.repository.listarPresencasDoAlunoDesde(
      tenantId,
      alunoId,
      new Date(agora.getTime() - 90 * 24 * 60 * 60 * 1000),
    );

    const resumoBase = buildResumoAlunos(presencasAno);
    const intent = await this.repository.obterIntencaoAtivaPorAluno(tenantId, alunoId);

    return {
      success: true as const,
      data: {
        aluno,
        resumoBase,
        intent,
        presencasRecentes,
      },
    };
  }

  async obterPainelAluno(tenantId: string | null, alunoId: string | null): Promise<ServiceResult<FrequenciaAlunoPainel>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!alunoId?.trim()) {
        return { success: false, error: 'Aluno ausente.' };
      }

      const resumoResult = await this.montarResumoAluno(tenantId, alunoId);
      if (!resumoResult.success) {
        return { success: false, error: resumoResult.error };
      }

      const intent = resumoResult.data.intent && resumoResult.data.intent.status === 'pending'
        ? resumoResult.data.intent
        : await this.criarNovaIntencao(tenantId, alunoId);

      const { marcos, proximoMarco, sequenciaAtual, totalPresencasAno, ultimaPresenca } = resumoResult.data.resumoBase;

      return {
        success: true,
        data: {
          aluno: resumoResult.data.aluno,
          resumo: {
            totalPresencasAno,
            sequenciaAtual,
            ultimoCheckin: ultimaPresenca,
            marcos,
            proximoMarco,
            qrToken: intent.qrToken,
            expiresAt: intent.expiresAt,
          },
          presencasRecentes: resumoResult.data.presencasRecentes,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao carregar o check-in.' };
    }
  }

  async obterPainelProfessor(tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<FrequenciaProfessorPainel>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem acessar esta área.' };
      }

      const alunosAtivos = await this.repository.listarAlunosAtivos(tenantId);
      const presencasRecentes = await this.repository.listarPresencasRecentes(tenantId, 12);
      const hoje = new Date();
      const inicioHoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 0, 0, 0, 0);
      const fimHoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 23, 59, 59, 999);
      const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1, 0, 0, 0, 0);

      return {
        success: true,
        data: {
          resumo: {
            alunosAtivos: alunosAtivos.length,
            checkinsHoje: await this.repository.contarPresencasNoPeriodo(tenantId, inicioHoje, fimHoje),
            checkinsMes: await this.repository.contarPresencasNoPeriodo(tenantId, inicioMes, fimHoje),
            marcosConquistadosHoje: presencasRecentes.filter((item) => item.data.getTime() >= inicioHoje.getTime()).length,
          },
          alunosAtivos,
          presencasRecentes,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao carregar a frequência.' };
    }
  }

  async validarCheckinQr(input: ValidarCheckinQrInput, isProfessorOrAdmin: boolean): Promise<ServiceResult<{ presencaId: string }>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem validar o QR.' };
      }

      if (!input.tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const parsed = await parseToken(input.qrToken, getSecret());
      if (!parsed.valid) {
        return { success: false, error: 'QR Code inválido.' };
      }

      if (parsed.payload.tenantId !== input.tenantId) {
        return { success: false, error: 'QR Code fora do tenant permitido.' };
      }

      if (parsed.payload.expiresAt < Date.now()) {
        return { success: false, error: 'QR Code expirado.' };
      }

      const intent = await this.repository.obterIntencaoPorId(input.tenantId, parsed.payload.nonce);
      if (!intent) {
        return { success: false, error: 'Intenção de check-in não encontrada.' };
      }

      if (intent.status !== 'pending') {
        return { success: false, error: 'Intenção já processada ou expirada.' };
      }

      if (intent.alunoId !== parsed.payload.alunoId) {
        return { success: false, error: 'QR Code não corresponde ao aluno esperado.' };
      }

      if (intent.qrToken !== input.qrToken) {
        return { success: false, error: 'QR Code inválido para esta sessão.' };
      }

      const presenca = await this.repository.consumirIntencaoERegistrarPresenca({
        tenantId: input.tenantId,
        alunoId: parsed.payload.alunoId,
        intentId: intent.id,
        professorUid: input.professorUid,
        origem: 'qr',
      });

      return { success: true, data: { presencaId: presenca.id } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao validar o check-in.' };
    }
  }

  async registrarCheckinManual(input: RegistrarCheckinManualInput, isProfessorOrAdmin: boolean): Promise<ServiceResult<{ presencaId: string }>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem registrar presença.' };
      }

      if (!input.tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!input.alunoId?.trim()) {
        return { success: false, error: 'Aluno ausente.' };
      }

      const aluno = await this.repository.obterAlunoPorId(input.tenantId, input.alunoId);
      if (!aluno) {
        return { success: false, error: 'Aluno não encontrado.' };
      }

      const presenca = await this.repository.consumirIntencaoERegistrarPresenca({
        tenantId: input.tenantId,
        alunoId: input.alunoId,
        professorUid: input.professorUid,
        origem: 'manual',
      });

      return { success: true, data: { presencaId: presenca.id } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao registrar presença manual.' };
    }
  }
}
