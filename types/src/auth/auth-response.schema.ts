import { Schema } from 'effect';
import { FeatureStatesSchema } from '../features/feature-key.enum';
import { PlanKeySchema } from '../features/plan-key.enum';
import { PermissionSchema } from './permission.schema';
import { ResourceSchema } from './resource.schema';

const OptionalImageSchema = Schema.optional(Schema.String);

export const CurrentUserPermissionsSchema = Schema.mutable(
  Schema.partialWith(
    Schema.Record({
      key: ResourceSchema,
      value: Schema.mutable(Schema.Array(PermissionSchema)),
    }),
    { exact: true },
  ),
).annotations({ identifier: 'CurrentUserPermissions' });

export const CurrentUserResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    email: Schema.String,
    image: OptionalImageSchema,
    tenantId: Schema.String,
    tenantName: Schema.String,
    tenantSlug: Schema.String,
    planKey: PlanKeySchema,
    features: FeatureStatesSchema,
    roles: Schema.mutable(Schema.Array(Schema.String)),
    permissions: CurrentUserPermissionsSchema,
  }),
).annotations({ identifier: 'CurrentUserResponse' });

export const ProfileResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    email: Schema.String,
    image: OptionalImageSchema,
    createdAt: Schema.String,
    updatedAt: Schema.String,
  }),
).annotations({ identifier: 'ProfileResponse' });

export const SessionClaimsResponseSchema = Schema.mutable(
  Schema.Struct({
    user_id: Schema.String,
    session_id: Schema.String,
    expires_at: Schema.Number,
    issued_at: Schema.Number,
  }),
).annotations({ identifier: 'SessionClaimsResponse' });
