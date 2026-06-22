import { Schema } from 'effect'

export enum PlanKey {
  FREE = 'free',
  BASE = 'base',
  GROWTH = 'growth',
  ENTERPRISE = 'enterprise',
}

export const PlanKeySchema = Schema.Enums(PlanKey)
