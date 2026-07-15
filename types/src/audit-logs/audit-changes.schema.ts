import { Schema } from 'effect';

const AuditValuesSchema = Schema.mutable(Schema.Record({ key: Schema.String, value: Schema.Unknown }));

export const AuditChangesSchema = Schema.mutable(
  Schema.Struct({
    before: Schema.optional(AuditValuesSchema),
    after: Schema.optional(AuditValuesSchema),
  }),
).annotations({ identifier: 'AuditChanges' });
