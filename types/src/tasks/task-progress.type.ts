import type { Schema } from 'effect';
import type { TaskProgressMessageArgsSchema, TaskProgressSchema } from './task-progress.schema';

export type TaskProgressMessageArgs = Schema.Schema.Type<typeof TaskProgressMessageArgsSchema>;

export type TaskProgressDto = Schema.Schema.Type<typeof TaskProgressSchema>;
