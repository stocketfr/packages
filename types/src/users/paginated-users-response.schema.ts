import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { UserResponseSchema } from './user-response.schema';

export const PaginatedUsersResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(UserResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedUsersResponse' });
