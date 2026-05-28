import { Schema } from 'effect'

const TENANT_SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/

const TenantSlugSchema = Schema.Trim.pipe(
  Schema.pattern(TENANT_SLUG_PATTERN),
).annotations({ identifier: 'TenantSlug' })

const normalizeTenantSlug = (slug: string) => slug.trim().toLowerCase()

export { normalizeTenantSlug, TENANT_SLUG_PATTERN, TenantSlugSchema }
