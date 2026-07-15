import { Schema } from 'effect';

export const SupplierSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
  }),
).annotations({ identifier: 'SupplierSummary' });
