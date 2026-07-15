import type { Schema } from 'effect';
import type { ClientResponseSchema } from './client-response.schema';

export type ClientResponseDto = Schema.Schema.Type<typeof ClientResponseSchema>;
