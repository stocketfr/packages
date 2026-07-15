import { Schema } from 'effect';

export const LocationSummarySchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    name: Schema.String,
    type: Schema.String,
  }),
).annotations({ identifier: 'LocationSummary' });
