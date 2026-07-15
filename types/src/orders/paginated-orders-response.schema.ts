import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { OrderResponseSchema } from './order-response.schema';

export const PaginatedOrdersResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(OrderResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedOrdersResponse' });
