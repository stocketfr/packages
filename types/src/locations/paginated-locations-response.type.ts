import type { Schema } from 'effect';
import type { PaginatedLocationsResponseSchema } from './paginated-locations-response.schema';

export type PaginatedLocationsResponseDto = Schema.Schema.Type<typeof PaginatedLocationsResponseSchema>;
