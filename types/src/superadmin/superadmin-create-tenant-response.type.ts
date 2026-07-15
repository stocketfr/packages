import type { Schema } from 'effect';
import type { SuperAdminCreateTenantResponseSchema } from './superadmin-response.schema';

export type SuperAdminCreateTenantResponse = Schema.Schema.Type<typeof SuperAdminCreateTenantResponseSchema>;
