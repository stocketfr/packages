import type { Schema } from 'effect';
import type { PaginatedTasksResponseSchema } from './paginated-tasks-response.schema';

export type PaginatedTasksResponseDto = Schema.Schema.Type<typeof PaginatedTasksResponseSchema>;
