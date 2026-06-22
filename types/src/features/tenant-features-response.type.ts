import type { EntitlementSource } from './entitlement-source.enum'
import type { FeatureStates } from './feature-key.enum'
import type { PlanKey } from './plan-key.enum'
import type { TenantFeatureOverrideResponseDto } from './tenant-feature-override-response.type'

export interface TenantFeaturesResponseDto {
  tenantId: string
  planKey: PlanKey
  source: EntitlementSource
  features: FeatureStates
  overrides: TenantFeatureOverrideResponseDto[]
  updated_at: string | Date | null
  updated_by: string | null
}
