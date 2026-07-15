import type { Schema } from 'effect';
import type { TaskResponseSchema } from './task-response.schema';

export type TaskResponseDto = Schema.Schema.Type<typeof TaskResponseSchema>;
