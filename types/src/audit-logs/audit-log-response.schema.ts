import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { AuditActionSchema } from './audit-action.schema';
import { AuditChangesSchema } from './audit-changes.schema';
import { AuditEntityTypeSchema } from './audit-entity-type.schema';
import { AuditLogIdSchema } from './audit-log-query.schema';

export const AuditLogResponseSchema = Schema.mutable(
  Schema.Struct({
    id: AuditLogIdSchema,
    user_id: Schema.NullOr(Schema.String),
    user_name: Schema.NullOr(Schema.String),
    action: AuditActionSchema,
    entity_type: AuditEntityTypeSchema,
    entity_id: Schema.String,
    changes: Schema.NullOr(AuditChangesSchema),
    user_agent: Schema.NullOr(Schema.String),
    created_at: ApiDateSchema,
  }),
).annotations({ identifier: 'AuditLogResponse' });
