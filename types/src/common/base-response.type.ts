import type { Schema } from 'effect';
import type { BaseAuditResponseSchema, BaseResponseSchema } from './base-response.schema';

export type BaseResponseDto = Schema.Schema.Type<typeof BaseResponseSchema>;

export type BaseAuditResponseDto = Schema.Schema.Type<typeof BaseAuditResponseSchema>;
