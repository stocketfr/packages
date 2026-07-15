import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { StockMovementResponseSchema } from './stock-movement-response.schema';

export const PaginatedStockMovementsResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(StockMovementResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedStockMovementsResponse' });
