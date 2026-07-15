import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { FeatureKeySchema } from './feature-key.enum';

export const TenantFeatureOverrideResponseSchema = Schema.mutable(
  Schema.Struct({
    featureKey: FeatureKeySchema,
    enabled: Schema.Boolean,
    reason: Schema.NullOr(Schema.String),
    expires_at: Schema.NullOr(ApiDateSchema),
    updated_at: ApiDateSchema,
    updated_by: Schema.NullOr(Schema.String),
  }),
).annotations({ identifier: 'TenantFeatureOverrideResponse' });
