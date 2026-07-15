import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { ClientResponseSchema } from './client-response.schema';

export const PaginatedClientsResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(ClientResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedClientsResponse' });
