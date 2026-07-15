import type { Schema } from 'effect';
import type { PaginatedAuditLogsResponseSchema } from './paginated-audit-logs-response.schema';

export type PaginatedAuditLogsResponseDto = Schema.Schema.Type<typeof PaginatedAuditLogsResponseSchema>;
