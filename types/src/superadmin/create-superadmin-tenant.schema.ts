import { Schema } from 'effect'
import { EmailSchema } from '../common/schema-helpers.schema'

export const TenantSlugSchema = Schema.Trim.pipe(
  Schema.pattern(/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/),
).annotations({ identifier: 'TenantSlug' })

export const CreateSuperAdminTenantSchema = Schema.Struct({
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  slug: TenantSlugSchema,
  admin: Schema.Struct({
    name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
    email: EmailSchema,
    password: Schema.String.pipe(Schema.minLength(8), Schema.maxLength(256)),
  }),
}).annotations({ identifier: 'CreateSuperAdminTenant' })
