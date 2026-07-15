import { Schema } from 'effect';
import { HateoasLinkSchema } from '../common/hateoas-link.schema';

export const ProductLinksSchema = Schema.mutable(
  Schema.Struct({
    self: HateoasLinkSchema,
    update: HateoasLinkSchema,
    delete: HateoasLinkSchema,
    category: HateoasLinkSchema,
  }),
).annotations({ identifier: 'ProductLinks' });
