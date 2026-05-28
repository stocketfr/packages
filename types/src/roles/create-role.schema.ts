import { Schema } from 'effect'
import { RolePermissionSchema } from './role-permission.schema'

export const CreateRoleSchema = Schema.Struct({
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  description: Schema.optional(Schema.Trim.pipe(Schema.maxLength(1000))),
  permissions: Schema.Array(RolePermissionSchema),
}).annotations({ identifier: 'CreateRole' })

export type CreateRole = Schema.Schema.Type<typeof CreateRoleSchema>
