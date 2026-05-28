import { Schema } from 'effect'
import { Permission } from '../auth/permission.enum'
import { Resource } from '../auth/resource.enum'

export const RolePermissionSchema = Schema.Struct({
  resource: Schema.Enums(Resource),
  permission: Schema.Enums(Permission),
}).annotations({ identifier: 'RolePermission' })

export type RolePermission = Schema.Schema.Type<typeof RolePermissionSchema>
