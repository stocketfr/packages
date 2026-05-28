import { Schema } from 'effect'
import { EmailSchema } from '../common/schema-helpers.schema'
import { TenantSlugSchema } from '../common/tenant-slug.schema'

export { TenantSlugSchema } from '../common/tenant-slug.schema'

export const CreateSuperAdminTenantSchema = Schema.Struct({
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  slug: TenantSlugSchema,
  admin: Schema.Struct({
    name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
    email: EmailSchema,
    password: Schema.String.pipe(Schema.minLength(8), Schema.maxLength(256)),
  }),
}).annotations({ identifier: 'CreateSuperAdminTenant' })
