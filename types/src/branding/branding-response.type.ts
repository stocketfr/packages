import type { Schema } from 'effect';
import type { BrandingResponseSchema } from './branding-response.schema';

export type BrandingResponseDto = Schema.Schema.Type<typeof BrandingResponseSchema>;
