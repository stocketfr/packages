import { Schema } from 'effect';
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema';
import { AuditActionSchema } from './audit-action.schema';
import { AuditEntityTypeSchema } from './audit-entity-type.schema';

export const AuditLogIdSchema = Schema.UUID.annotations({ identifier: 'AuditLogId' });

export const AuditLogQuerySchema = Schema.Struct({
  page: Schema.optionalWith(PageSchema, { default: () => 1 }),
  limit: Schema.optionalWith(LimitSchema, { default: () => 20 }),
  entity_type: Schema.optional(AuditEntityTypeSchema),
  entity_id: Schema.optional(Schema.UUID),
  user_id: Schema.optional(Schema.UUID),
  action: Schema.optional(AuditActionSchema),
  from_date: Schema.optional(Schema.DateFromString),
  to_date: Schema.optional(Schema.DateFromString),
}).annotations({ identifier: 'AuditLogQuery' });
