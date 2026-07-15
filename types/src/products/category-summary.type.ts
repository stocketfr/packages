import type { Schema } from 'effect';
import type { CategorySummarySchema } from './category-summary.schema';

export type CategorySummaryDto = Schema.Schema.Type<typeof CategorySummarySchema>;
