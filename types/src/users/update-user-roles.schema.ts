import { Schema } from 'effect'
import { UserIdSchema } from './user-query.schema'

export const UpdateUserRolesSchema = Schema.Struct({
  roles: Schema.Array(UserIdSchema),
}).annotations({ identifier: 'UpdateUserRoles' })

export type UpdateUserRoles = Schema.Schema.Type<typeof UpdateUserRolesSchema>
