import type { Schema } from 'effect';
import type { CurrentUserResponseSchema } from './auth-response.schema';

export type CurrentUserResponseDto = Schema.Schema.Type<typeof CurrentUserResponseSchema>;
