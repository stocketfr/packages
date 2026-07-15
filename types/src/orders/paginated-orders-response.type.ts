import type { Schema } from 'effect';
import type { PaginatedOrdersResponseSchema } from './paginated-orders-response.schema';

export type PaginatedOrdersResponseDto = Schema.Schema.Type<typeof PaginatedOrdersResponseSchema>;
