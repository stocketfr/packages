import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { CategoryIdSchema } from './category-mutations.schema';

export const CategoryResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: CategoryIdSchema,
    name: Schema.String,
    parent_id: Schema.NullOr(CategoryIdSchema),
    description: Schema.NullOr(Schema.String),
  }),
).annotations({ identifier: 'CategoryResponse' });
