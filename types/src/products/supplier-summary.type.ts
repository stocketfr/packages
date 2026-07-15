import type { Schema } from 'effect';
import type { SupplierSummarySchema } from './supplier-summary.schema';

export type SupplierSummaryDto = Schema.Schema.Type<typeof SupplierSummarySchema>;
