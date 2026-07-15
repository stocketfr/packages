import type { Schema } from 'effect';
import type { LocationResponseSchema } from './location-response.schema';

export type LocationResponseDto = Schema.Schema.Type<typeof LocationResponseSchema>;
