import { Schema } from 'effect';
import { PaginationMetaSchema } from '../common/pagination-meta.schema';
import { TaskResponseSchema } from './task-response.schema';

export const PaginatedTasksResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(TaskResponseSchema)),
    meta: PaginationMetaSchema,
  }),
).annotations({ identifier: 'PaginatedTasksResponse' });
