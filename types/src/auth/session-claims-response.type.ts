import type { Schema } from 'effect';
import type { SessionClaimsResponseSchema } from './auth-response.schema';

export type SessionClaimsResponseDto = Schema.Schema.Type<typeof SessionClaimsResponseSchema>;
