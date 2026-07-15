import { Schema } from 'effect';

export const CategorySummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
    parent_id: Schema.NullOr(Schema.UUID),
  }),
).annotations({ identifier: 'CategorySummary' });
