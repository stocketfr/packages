import { normalizeTenantSlug, TENANT_SLUG_PATTERN } from './tenant-slug.schema'

/**
 * Tenant slug rules, kept in sync with `TenantSlugSchema`
 * (`common/tenant-slug.schema.ts`): lowercase alphanumeric with internal
 * hyphens, 1–63 chars, no leading/trailing hyphen.
 */
export function isValidTenantSlug(slug: string): boolean {
  return TENANT_SLUG_PATTERN.test(normalizeTenantSlug(slug))
}
