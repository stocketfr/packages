import type { Schema } from 'effect';
import type { ProductSummarySchema } from './product-summary.schema';

export type ProductSummaryDto = Schema.Schema.Type<typeof ProductSummarySchema>;
