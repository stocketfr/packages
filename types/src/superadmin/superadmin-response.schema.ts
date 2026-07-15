import { Schema } from 'effect';
import { ProductImportResultSchema } from '../products/product-import-result.schema';

export const SuperAdminTenantSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    slug: Schema.String,
    hostname: Schema.String,
  }),
).annotations({ identifier: 'SuperAdminTenantSummary' });

export const SuperAdminUserSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    email: Schema.String,
    name: Schema.String,
  }),
).annotations({ identifier: 'SuperAdminUserSummary' });

export const SuperAdminCreateTenantResponseSchema = Schema.mutable(
  Schema.Struct({
    tenant: SuperAdminTenantSummarySchema,
    admin: SuperAdminUserSummarySchema,
    productImport: Schema.optional(ProductImportResultSchema),
  }),
).annotations({ identifier: 'SuperAdminCreateTenantResponse' });

export const SuperAdminMeResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    email: Schema.String,
    name: Schema.String,
    isSuperAdmin: Schema.Literal(true),
  }),
).annotations({ identifier: 'SuperAdminMeResponse' });

export const SuperAdminTenantResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    slug: Schema.String,
    primaryHostname: Schema.NullOr(Schema.String),
    createdAt: Schema.String,
  }),
).annotations({ identifier: 'SuperAdminTenantResponse' });

export const SuperAdminTenantListResponseSchema = Schema.mutable(
  Schema.Struct({
    data: Schema.mutable(Schema.Array(SuperAdminTenantResponseSchema)),
  }),
).annotations({ identifier: 'SuperAdminTenantListResponse' });
