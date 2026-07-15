import { Schema } from 'effect';
import { StockMovementReasonSchema } from './stock-movement-reason.schema';

export const CreateStockMovementSchema = Schema.Struct({
  product_id: Schema.UUID,
  from_location_id: Schema.optional(Schema.UUID),
  to_location_id: Schema.optional(Schema.UUID),
  quantity: Schema.Number.pipe(Schema.int(), Schema.greaterThanOrEqualTo(1)),
  reason: StockMovementReasonSchema,
  order_id: Schema.optional(Schema.UUID),
  reference_number: Schema.optional(Schema.String.pipe(Schema.maxLength(100))),
  cost_per_unit: Schema.optional(Schema.Number.pipe(Schema.nonNegative())),
  notes: Schema.optional(Schema.String.pipe(Schema.maxLength(1000))),
}).annotations({ identifier: 'CreateStockMovement' });
