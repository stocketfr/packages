import { Schema } from 'effect';

export const HateoasLinkSchema = Schema.mutable(
  Schema.Struct({
    href: Schema.String,
    method: Schema.optional(Schema.String),
  }),
).annotations({ identifier: 'HateoasLink' });
