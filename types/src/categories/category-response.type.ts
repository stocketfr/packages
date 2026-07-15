import type { Schema } from 'effect';
import type { CategoryResponseSchema } from './category-response.schema';

export type CategoryResponseDto = Schema.Schema.Type<typeof CategoryResponseSchema>;
