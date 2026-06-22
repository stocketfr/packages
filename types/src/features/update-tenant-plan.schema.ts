import { Schema } from 'effect'
import { PlanKeySchema } from './plan-key.enum'

export const UpdateTenantPlanSchema = Schema.Struct({
  planKey: PlanKeySchema,
}).annotations({ identifier: 'UpdateTenantPlan' })

export type UpdateTenantPlan = Schema.Schema.Type<typeof UpdateTenantPlanSchema>
