import { Schema } from 'effect';
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema';
import { SortOrder } from '../common/sort-order.enum';
import { TaskStatusSchema } from './task-status.schema';

export const TaskIdSchema = Schema.UUID.annotations({ identifier: 'TaskId' });

export const TaskTypeSchema = Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(100));

export const TaskQuerySchema = Schema.Struct({
  page: Schema.optional(PageSchema),
  limit: Schema.optional(LimitSchema),
  type: Schema.optional(TaskTypeSchema),
  status: Schema.optional(TaskStatusSchema),
  sort_order: Schema.optional(Schema.Literal(SortOrder.ASC, SortOrder.DESC)),
}).annotations({ identifier: 'TaskQuery' });
