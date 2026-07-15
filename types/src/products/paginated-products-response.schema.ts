import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { ProductResponseSchema } from './product-response.schema';

export const PaginatedProductsResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(ProductResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedProductsResponse' });
