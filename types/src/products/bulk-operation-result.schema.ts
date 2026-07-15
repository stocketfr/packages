import { Schema } from 'effect'

export const BulkOperationFailureSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.String,
    error: Schema.String,
  }),
).annotations({ identifier: 'BulkOperationFailure' })

export const BulkOperationResultSchema = Schema.mutable(
  Schema.Struct({
    success_count: Schema.Number,
    failure_count: Schema.Number,
    succeeded: Schema.mutable(Schema.Array(Schema.String)),
    failures: Schema.mutable(Schema.Array(BulkOperationFailureSchema)),
  }),
).annotations({ identifier: 'BulkOperationResult' })
