import { Schema } from 'effect';

export enum EntitlementSource {
  SYSTEM = 'system',
  MANUAL = 'manual',
  BILLING = 'billing',
}

export const EntitlementSourceSchema = Schema.Enums(EntitlementSource).annotations({ identifier: 'EntitlementSource' });
