import type { Schema } from 'effect';
import type { ProductLinksSchema } from './product-links.schema';

export type ProductLinksDto = Schema.Schema.Type<typeof ProductLinksSchema>;
