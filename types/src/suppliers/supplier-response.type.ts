import type { Schema } from 'effect';
import type { SupplierResponseSchema } from './supplier-response.schema';

export type SupplierResponseDto = Schema.Schema.Type<typeof SupplierResponseSchema>;
