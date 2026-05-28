import { Schema } from 'effect'

export const RoleIdSchema = Schema.UUID.annotations({ identifier: 'RoleId' })
