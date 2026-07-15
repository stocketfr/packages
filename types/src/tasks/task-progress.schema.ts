import { Schema } from 'effect';

export const TaskProgressMessageArgsSchema = Schema.mutable(
  Schema.Record({
    key: Schema.String,
    value: Schema.Union(Schema.String, Schema.Number),
  }),
).annotations({ identifier: 'TaskProgressMessageArgs' });

export const TaskProgressSchema = Schema.mutable(
  Schema.Struct({
    total: Schema.NullOr(Schema.Number),
    processed: Schema.Number,
    failed: Schema.Number,
    percent: Schema.NullOr(Schema.Number),
    message: Schema.NullOr(Schema.String),
    message_key: Schema.NullOr(Schema.String),
    message_args: Schema.NullOr(TaskProgressMessageArgsSchema),
  }),
).annotations({ identifier: 'TaskProgress' });
