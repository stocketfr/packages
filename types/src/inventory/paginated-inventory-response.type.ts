import type { Schema } from 'effect';
import type { PaginatedInventoryResponseSchema } from './paginated-inventory-response.schema';

export type PaginatedInventoryResponseDto = Schema.Schema.Type<typeof PaginatedInventoryResponseSchema>;
