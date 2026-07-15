import type { Schema } from 'effect';
import type { UserResponseSchema } from './user-response.schema';

export type UserResponseDto = Schema.Schema.Type<typeof UserResponseSchema>;
