import type { Schema } from 'effect';
import type { AreaSummarySchema } from './area-summary.schema';

export type AreaSummaryDto = Schema.Schema.Type<typeof AreaSummarySchema>;
