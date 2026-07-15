import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { AuditLogResponseSchema } from './audit-log-response.schema';

export const PaginatedAuditLogsResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(AuditLogResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedAuditLogsResponse' });
