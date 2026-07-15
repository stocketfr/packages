import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { EntitlementSourceSchema } from './entitlement-source.enum';
import { FeatureStatesSchema } from './feature-key.enum';
import { PlanKeySchema } from './plan-key.enum';
import { TenantFeatureOverrideResponseSchema } from './tenant-feature-override-response.schema';

export const TenantFeaturesResponseSchema = Schema.mutable(
  Schema.Struct({
    tenantId: Schema.String,
    planKey: PlanKeySchema,
    source: EntitlementSourceSchema,
    features: FeatureStatesSchema,
    overrides: Schema.mutable(Schema.Array(TenantFeatureOverrideResponseSchema)),
    updated_at: Schema.NullOr(ApiDateSchema),
    updated_by: Schema.NullOr(Schema.String),
  }),
).annotations({ identifier: 'TenantFeaturesResponse' });
