import { Schema } from 'effect';

export const ProductSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    sku: Schema.String,
    name: Schema.String,
    unit: Schema.NullOr(Schema.String),
  }),
).annotations({ identifier: 'ProductSummary' });
