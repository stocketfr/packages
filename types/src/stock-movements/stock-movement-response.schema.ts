import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { StockMovementIdSchema } from './stock-movement-query.schema';
import { StockMovementReasonSchema } from './stock-movement-reason.schema';

export const StockMovementLocationSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
  }),
).annotations({ identifier: 'StockMovementLocationSummary' });

export const StockMovementProductSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
    sku: Schema.String,
  }),
).annotations({ identifier: 'StockMovementProductSummary' });

export const StockMovementResponseSchema = Schema.mutable(
  Schema.Struct({
    id: StockMovementIdSchema,
    product_id: Schema.UUID,
    product: Schema.NullOr(StockMovementProductSummarySchema),
    from_location_id: Schema.NullOr(Schema.UUID),
    from_location: Schema.NullOr(StockMovementLocationSummarySchema),
    to_location_id: Schema.NullOr(Schema.UUID),
    to_location: Schema.NullOr(StockMovementLocationSummarySchema),
    quantity: Schema.Number,
    reason: StockMovementReasonSchema,
    order_id: Schema.NullOr(Schema.UUID),
    reference_number: Schema.NullOr(Schema.String),
    cost_per_unit: Schema.NullOr(Schema.Number),
    user_id: Schema.String,
    notes: Schema.NullOr(Schema.String),
    created_at: ApiDateSchema,
  }),
).annotations({ identifier: 'StockMovementResponse' });
