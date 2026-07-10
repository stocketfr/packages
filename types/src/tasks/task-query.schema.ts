import { Schema } from 'effect'
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema'
import { SortOrder } from '../common/sort-order.enum'
import { TaskStatus } from './task-status.enum'

const TaskStatuses = [
  TaskStatus.QUEUED,
  TaskStatus.RUNNING,
  TaskStatus.SUCCEEDED,
  TaskStatus.FAILED,
  TaskStatus.CANCELED,
] as const

export const TaskIdSchema = Schema.UUID.annotations({ identifier: 'TaskId' })

export const TaskTypeSchema = Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(100))

export const TaskStatusSchema = Schema.Literal(...TaskStatuses)

export const TaskQuerySchema = Schema.Struct({
  page: Schema.optional(PageSchema),
  limit: Schema.optional(LimitSchema),
  type: Schema.optional(TaskTypeSchema),
  status: Schema.optional(TaskStatusSchema),
  sort_order: Schema.optional(Schema.Literal(SortOrder.ASC, SortOrder.DESC)),
}).annotations({ identifier: 'TaskQuery' })
