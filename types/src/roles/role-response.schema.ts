import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { RolePermissionSchema } from './role-permission.schema';
import { RoleIdSchema } from './role-query.schema';

export const RoleResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: RoleIdSchema,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    is_system: Schema.Boolean,
    permissions: Schema.mutable(Schema.Array(RolePermissionSchema)),
  }),
).annotations({ identifier: 'RoleResponse' });
