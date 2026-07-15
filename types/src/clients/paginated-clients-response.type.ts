import type { Schema } from 'effect';
import type { PaginatedClientsResponseSchema } from './paginated-clients-response.schema';

export type PaginatedClientsResponseDto = Schema.Schema.Type<typeof PaginatedClientsResponseSchema>;
