import { Schema } from 'effect';

export enum FeatureKey {
  SMART_IMPORT = 'smartImport',
  ORDERS = 'orders',
}

export const FeatureKeySchema = Schema.Enums(FeatureKey);

export const FeatureStatesSchema = Schema.mutable(
  Schema.Struct({
    [FeatureKey.SMART_IMPORT]: Schema.Boolean,
    [FeatureKey.ORDERS]: Schema.Boolean,
  }),
).annotations({ identifier: 'FeatureStates' });

export type FeatureStates = Schema.Schema.Type<typeof FeatureStatesSchema>;

export const FEATURE_DISPLAY_LABELS: Record<FeatureKey, string> = {
  [FeatureKey.SMART_IMPORT]: 'Smart Import',
  [FeatureKey.ORDERS]: 'Orders',
};
