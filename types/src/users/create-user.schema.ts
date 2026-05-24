import { Schema } from 'effect'
import { EmailSchema } from '../common/schema-helpers.schema'
import { UserIdSchema } from './user-query.schema'

export const CreateUserSchema = Schema.Struct({
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  email: EmailSchema,
  password: Schema.String.pipe(Schema.minLength(8)),
  roles: Schema.Array(UserIdSchema),
}).annotations({ identifier: 'CreateUser' })

export type CreateUser = Schema.Schema.Type<typeof CreateUserSchema>
