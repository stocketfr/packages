import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { CategoryIdSchema } from './category-mutations.schema';

const CategoryWithChildrenBaseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: CategoryIdSchema,
    name: Schema.String,
    parent_id: Schema.NullOr(CategoryIdSchema),
    description: Schema.NullOr(Schema.String),
  }),
);

type CategoryWithChildrenBase = Schema.Schema.Type<typeof CategoryWithChildrenBaseSchema>;
type CategoryWithChildrenEncodedBase = Schema.Schema.Encoded<typeof CategoryWithChildrenBaseSchema>;

export interface CategoryWithChildrenResponse extends CategoryWithChildrenBase {
  children: CategoryWithChildrenResponse[];
}

interface CategoryWithChildrenResponseEncoded extends CategoryWithChildrenEncodedBase {
  children: CategoryWithChildrenResponseEncoded[];
}

export const CategoryWithChildrenResponseSchema: Schema.Schema<
  CategoryWithChildrenResponse,
  CategoryWithChildrenResponseEncoded
> = Schema.mutable(
  Schema.extend(
    CategoryWithChildrenBaseSchema,
    Schema.Struct({
      children: Schema.mutable(
        Schema.Array(
          Schema.suspend(
            (): Schema.Schema<CategoryWithChildrenResponse, CategoryWithChildrenResponseEncoded> =>
              CategoryWithChildrenResponseSchema,
          ),
        ),
      ),
    }),
  ),
).annotations({ identifier: 'CategoryWithChildrenResponse' });
