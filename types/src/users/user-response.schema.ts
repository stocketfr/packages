import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';

export const UserResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    email: Schema.String,
    image: Schema.NullOr(Schema.String),
    roles: Schema.mutable(Schema.Array(Schema.String)),
    banned: Schema.Boolean,
    banReason: Schema.NullOr(Schema.String),
    banExpires: Schema.NullOr(ApiDateSchema),
    createdAt: ApiDateSchema,
  }),
).annotations({ identifier: 'UserResponse' });
