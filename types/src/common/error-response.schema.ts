import { Schema } from 'effect';
import { ErrorCodeSchema } from './error-code.schema';

export const ErrorResponseSchema = Schema.mutable(
  Schema.Struct({
    statusCode: Schema.Number,
    message: Schema.Union(Schema.String, Schema.mutable(Schema.Array(Schema.String))),
    error: Schema.String,
    code: Schema.optional(ErrorCodeSchema),
    messageKey: Schema.optional(Schema.String),
    messageArgs: Schema.optional(Schema.mutable(Schema.Record({ key: Schema.String, value: Schema.Unknown }))),
    path: Schema.String,
    timestamp: Schema.String,
  }),
).annotations({ identifier: 'ErrorResponse' });
