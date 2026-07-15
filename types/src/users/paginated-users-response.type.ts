import type { Schema } from 'effect';
import type { PaginatedUsersResponseSchema } from './paginated-users-response.schema';

export type PaginatedUsersResponseDto = Schema.Schema.Type<typeof PaginatedUsersResponseSchema>;
