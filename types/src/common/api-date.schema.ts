import { Schema } from 'effect';

/**
 * A JSON date-time string at the wire boundary that also accepts the `Date`
 * values used by backend mappers before response encoding.
 */
export const ApiDateSchema = Schema.Union(Schema.String, Schema.Date).annotations({
  identifier: 'ApiDate',
  jsonSchema: { type: 'string', format: 'date-time' },
});
