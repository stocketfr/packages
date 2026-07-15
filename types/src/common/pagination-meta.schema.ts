import { Schema } from 'effect';

export const PaginationMetaSchema = Schema.mutable(
  Schema.Struct({
    page: Schema.Number,
    limit: Schema.Number,
    total: Schema.Number,
    total_pages: Schema.Number,
    has_next: Schema.Boolean,
    has_previous: Schema.Boolean,
  }),
).annotations({ identifier: 'PaginationMeta' });
