import { Schema } from 'effect'
import { RolePermissionSchema } from './role-permission.schema'

export const UpdateRoleSchema = Schema.Struct({
  name: Schema.optional(Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200))),
  description: Schema.optional(Schema.Trim.pipe(Schema.maxLength(1000))),
  permissions: Schema.optional(Schema.Array(RolePermissionSchema)),
}).annotations({ identifier: 'UpdateRole' })

export type UpdateRole = Schema.Schema.Type<typeof UpdateRoleSchema>
