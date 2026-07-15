import type { Schema } from 'effect';
import type { AuditChangesSchema } from './audit-changes.schema';

export type AuditChanges = Schema.Schema.Type<typeof AuditChangesSchema>;
