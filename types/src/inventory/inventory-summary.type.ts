import type { Schema } from 'effect';
import type { InventorySummarySchema } from './inventory-summary.schema';

export type InventorySummaryDto = Schema.Schema.Type<typeof InventorySummarySchema>;
