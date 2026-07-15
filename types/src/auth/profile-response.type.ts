import type { Schema } from 'effect';
import type { ProfileResponseSchema } from './auth-response.schema';

export type ProfileResponseDto = Schema.Schema.Type<typeof ProfileResponseSchema>;
