import { Schema } from 'effect';

export const PoweredBySchema = Schema.mutable(
  Schema.Struct({
    name: Schema.String,
    url: Schema.String,
  }),
).annotations({ identifier: 'PoweredBy' });
