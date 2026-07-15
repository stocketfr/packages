import { Schema } from 'effect';
import { TaskStatus } from './task-status.enum';

export const TaskStatusSchema = Schema.Enums(TaskStatus).annotations({
  identifier: 'TaskStatus',
});
