import { Schema } from 'effect'

export enum FeatureKey {
  SMART_IMPORT = 'smartImport',
  ORDERS = 'orders',
}

export const FeatureKeySchema = Schema.Enums(FeatureKey)

export type FeatureStates = Record<FeatureKey, boolean>

export const DEFAULT_FEATURE_STATES: FeatureStates = {
  [FeatureKey.SMART_IMPORT]: false,
  [FeatureKey.ORDERS]: false,
}

export const FEATURE_DISPLAY_LABELS: Record<FeatureKey, string> = {
  [FeatureKey.SMART_IMPORT]: 'Smart Import',
  [FeatureKey.ORDERS]: 'Orders',
}
