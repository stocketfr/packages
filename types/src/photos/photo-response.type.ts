import type { Schema } from 'effect';
import type { PhotoResponseSchema } from './photo-response.schema';

export type PhotoResponseDto = Schema.Schema.Type<typeof PhotoResponseSchema>;
