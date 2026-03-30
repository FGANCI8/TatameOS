import type { ServiceResult } from '../core/types';
import type { ProcessarStripeWebhookInput, ProcessarStripeWebhookResult, IStripeService } from './types';

export async function handleStripeWebhook(
  service: IStripeService,
  input: ProcessarStripeWebhookInput,
): Promise<ServiceResult<ProcessarStripeWebhookResult>> {
  return service.processarWebhook(input);
}
