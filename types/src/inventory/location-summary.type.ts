import type { Schema } from 'effect';
import type { LocationSummarySchema } from './location-summary.schema';

export type LocationSummaryDto = Schema.Schema.Type<typeof LocationSummarySchema>;
