import type { Schema } from 'effect';
import type { PaginationMetaSchema } from './pagination-meta.schema';

export type PaginationMeta = Schema.Schema.Type<typeof PaginationMetaSchema>;
