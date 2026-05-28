/**
 * Tenant slug rules, kept in sync with `TenantSlugSchema`
 * (`superadmin/create-superadmin-tenant.schema.ts`): lowercase alphanumeric
 * with internal hyphens, 1–63 chars, no leading/trailing hyphen.
 */
const TENANT_SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/

export function isValidTenantSlug(slug: string): boolean {
  return TENANT_SLUG_PATTERN.test(slug)
}
