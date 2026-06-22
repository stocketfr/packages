import { Schema } from 'effect'

export const UpdateTenantFeatureOverrideSchema = Schema.Struct({
  enabled: Schema.Boolean,
  reason: Schema.optional(
    Schema.NullOr(Schema.Trim.pipe(Schema.maxLength(1000))),
  ),
  expires_at: Schema.optional(Schema.NullOr(Schema.DateFromString)),
}).annotations({ identifier: 'UpdateTenantFeatureOverride' })

export type UpdateTenantFeatureOverride = Schema.Schema.Type<
  typeof UpdateTenantFeatureOverrideSchema
>

