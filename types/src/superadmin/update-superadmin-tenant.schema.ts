import { Schema } from 'effect'
import { FeatureKeySchema } from '../features'

export const UpdateSuperAdminTenantSchema = Schema.Struct({
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  features: Schema.Record({
    key: FeatureKeySchema,
    value: Schema.Boolean,
  }),
}).annotations({ identifier: 'UpdateSuperAdminTenant' })

export type UpdateSuperAdminTenantInput =
  typeof UpdateSuperAdminTenantSchema.Type
