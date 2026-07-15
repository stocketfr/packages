import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { BaseResponseFields } from '../common/base-response.schema';
import { AreaSummarySchema } from './area-summary.schema';
import { InventoryIdSchema } from './inventory-query.schema';
import { LocationSummarySchema } from './location-summary.schema';
import { ProductSummarySchema } from './product-summary.schema';

export const InventoryResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: InventoryIdSchema,
    product_id: Schema.UUID,
    product: Schema.NullOr(ProductSummarySchema),
    location_id: Schema.UUID,
    location: Schema.NullOr(LocationSummarySchema),
    area_id: Schema.NullOr(Schema.UUID),
    area: Schema.NullOr(AreaSummarySchema),
    quantity: Schema.Number,
    batchNumber: Schema.String,
    expiry_date: Schema.NullOr(ApiDateSchema),
    cost_per_unit: Schema.NullOr(Schema.Number),
    received_date: Schema.NullOr(ApiDateSchema),
  }),
).annotations({ identifier: 'InventoryResponse' });
