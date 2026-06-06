import { Schema } from 'effect'
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema'
import { SortOrder } from '../common/sort-order.enum'
import { ProductSortField } from './product-sort-field.enum'

const ProductSortFieldValues = [
  ProductSortField.NAME,
  ProductSortField.SKU,
  ProductSortField.CREATED_AT,
  ProductSortField.UPDATED_AT,
  ProductSortField.STANDARD_PRICE,
  ProductSortField.STANDARD_COST,
  ProductSortField.REORDER_POINT,
] as const

const SortOrderValues = [SortOrder.ASC, SortOrder.DESC] as const

export const ProductIdSchema = Schema.UUID.annotations({
  identifier: 'ProductId',
})

export const ProductBooleanQuerySchema = Schema.BooleanFromString.annotations({
  identifier: 'ProductBooleanQuery',
})

export const ProductQuerySchema = Schema.Struct({
  page: Schema.optionalWith(PageSchema, { default: () => 1 }),
  limit: Schema.optionalWith(LimitSchema, { default: () => 20 }),
  search: Schema.optional(Schema.Trim),
  category_id: Schema.optional(Schema.UUID),
  primary_supplier_id: Schema.optional(Schema.UUID),
  is_active: Schema.optional(Schema.BooleanFromString),
  is_perishable: Schema.optional(Schema.BooleanFromString),
  min_price: Schema.optional(Schema.NumberFromString.pipe(Schema.nonNegative())),
  max_price: Schema.optional(Schema.NumberFromString.pipe(Schema.nonNegative())),
  include_deleted: Schema.optionalWith(Schema.BooleanFromString, {
    default: () => false,
  }),
  sort_by: Schema.optionalWith(Schema.Literal(...ProductSortFieldValues), {
    default: () => ProductSortField.NAME,
  }),
  sort_order: Schema.optionalWith(Schema.Literal(...SortOrderValues), {
    default: () => SortOrder.ASC,
  }),
}).annotations({ identifier: 'ProductQuery' })
