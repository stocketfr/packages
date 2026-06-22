import type { FeatureKey } from './feature-key.enum'

export interface TenantFeatureOverrideResponseDto {
  featureKey: FeatureKey
  enabled: boolean
  reason: string | null
  expires_at: string | Date | null
  updated_at: string | Date
  updated_by: string | null
}

