import type { Permission } from './permission.enum'
import type { Resource } from './resource.enum'
import type { FeatureStates, PlanKey } from '../features'

export interface CurrentUserResponseDto {
  id: string
  name: string
  email: string
  image?: string
  tenantId: string
  tenantName: string
  tenantSlug: string
  planKey: PlanKey
  features: FeatureStates
  roles: string[]
  permissions: Partial<Record<Resource, Permission[]>>
}
