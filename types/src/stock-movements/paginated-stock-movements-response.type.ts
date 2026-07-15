import type { Schema } from 'effect';
import type { PaginatedStockMovementsResponseSchema } from './paginated-stock-movements-response.schema';

export type PaginatedStockMovementsResponseDto = Schema.Schema.Type<typeof PaginatedStockMovementsResponseSchema>;
