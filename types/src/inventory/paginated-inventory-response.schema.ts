import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { InventoryResponseSchema } from './inventory-response.schema';

export const PaginatedInventoryResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(InventoryResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedInventoryResponse' });
