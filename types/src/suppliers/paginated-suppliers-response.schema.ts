import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { SupplierResponseSchema } from './supplier-response.schema';

export const PaginatedSuppliersResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(SupplierResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedSuppliersResponse' });
