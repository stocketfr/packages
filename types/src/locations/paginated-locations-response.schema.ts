import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { LocationResponseSchema } from './location-response.schema';

export const PaginatedLocationsResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(LocationResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedLocationsResponse' });
