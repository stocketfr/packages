import type { Schema } from 'effect';
import type { AuditLogResponseSchema } from './audit-log-response.schema';

export type AuditLogResponseDto = Schema.Schema.Type<typeof AuditLogResponseSchema>;
