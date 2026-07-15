import type { Schema } from 'effect';
import type { HateoasLinkSchema } from './hateoas-link.schema';

export type HateoasLink = Schema.Schema.Type<typeof HateoasLinkSchema>;
