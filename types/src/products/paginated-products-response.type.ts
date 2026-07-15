import type { Schema } from 'effect';
import type { PaginatedProductsResponseSchema } from './paginated-products-response.schema';

export type PaginatedProductsResponseDto = Schema.Schema.Type<typeof PaginatedProductsResponseSchema>;
