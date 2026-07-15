import type { Schema } from 'effect';
import type { TenantFeaturesResponseSchema } from './tenant-features-response.schema';

export type TenantFeaturesResponseDto = Schema.Schema.Type<typeof TenantFeaturesResponseSchema>;
