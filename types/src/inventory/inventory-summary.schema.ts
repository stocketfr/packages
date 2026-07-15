import { Schema } from 'effect';

export const InventorySummarySchema = Schema.mutable(
  Schema.Struct({
    low_stock_count: Schema.Number,
    expiring_soon_count: Schema.Number,
  }),
).annotations({ identifier: 'InventorySummary' });
