import type { Schema } from 'effect';
import type { RoleResponseSchema } from './role-response.schema';

export type RoleResponseDto = Schema.Schema.Type<typeof RoleResponseSchema>;
