import { Schema } from 'effect';

export const AreaSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
    code: Schema.String,
    path: Schema.optional(Schema.String),
  }),
).annotations({ identifier: 'AreaSummary' });
