import type { Schema } from 'effect';
import type { SuperAdminMeResponseSchema } from './superadmin-response.schema';

export type SuperAdminMeResponse = Schema.Schema.Type<typeof SuperAdminMeResponseSchema>;
