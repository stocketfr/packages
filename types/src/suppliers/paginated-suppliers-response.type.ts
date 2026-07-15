import type { Schema } from 'effect';
import type { PaginatedSuppliersResponseSchema } from './paginated-suppliers-response.schema';

export type PaginatedSuppliersResponseDto = Schema.Schema.Type<typeof PaginatedSuppliersResponseSchema>;
