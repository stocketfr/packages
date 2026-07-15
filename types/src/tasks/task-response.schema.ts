import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { TaskProgressSchema } from './task-progress.schema';
import { TaskIdSchema } from './task-query.schema';
import { TaskStatusSchema } from './task-status.schema';

export const TaskResponseSchema = Schema.mutable(
  Schema.Struct({
    id: TaskIdSchema,
    type: Schema.String,
    status: TaskStatusSchema,
    result: Schema.Unknown,
    error: Schema.NullOr(Schema.String),
    attempt_count: Schema.Number,
    max_attempts: Schema.Number,
    run_after: ApiDateSchema,
    progress: TaskProgressSchema,
    cancel_requested_at: Schema.NullOr(ApiDateSchema),
    started_at: Schema.NullOr(ApiDateSchema),
    completed_at: Schema.NullOr(ApiDateSchema),
    created_at: ApiDateSchema,
    updated_at: ApiDateSchema,
  }),
).annotations({ identifier: 'TaskResponse' });
