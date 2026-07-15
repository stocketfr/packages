import type { Schema } from 'effect';
import type { ProductResponseSchema } from './product-response.schema';

export type ProductResponseDto = Schema.Schema.Type<typeof ProductResponseSchema>;
