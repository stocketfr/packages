import type { Schema } from 'effect';
import type { SuperAdminTenantListResponseSchema, SuperAdminTenantResponseSchema } from './superadmin-response.schema';

export type SuperAdminTenantResponse = Schema.Schema.Type<typeof SuperAdminTenantResponseSchema>;

export type SuperAdminTenantListResponse = Schema.Schema.Type<typeof SuperAdminTenantListResponseSchema>;
