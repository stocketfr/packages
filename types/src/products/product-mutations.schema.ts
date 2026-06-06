import { Schema } from 'effect'

const DIMENSIONS_PATTERN = /^\d+(\.\d+)?x\d+(\.\d+)?x\d+(\.\d+)?$/

const NullableTrimmedString = (maxLength: number) =>
  Schema.NullOr(Schema.Trim.pipe(Schema.maxLength(maxLength)))

const ProductBaseFields = {
  sku: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(50)),
  name: Schema.Trim.pipe(Schema.minLength(1), Schema.maxLength(200)),
  description: Schema.optional(NullableTrimmedString(1000)),
  category_id: Schema.UUID,
  volume_ml: Schema.optional(
    Schema.NullOr(Schema.Number.pipe(Schema.greaterThanOrEqualTo(1))),
  ),
  weight_kg: Schema.optional(
    Schema.NullOr(Schema.Number.pipe(Schema.nonNegative())),
  ),
  dimensions_cm: Schema.optional(
    Schema.NullOr(
      Schema.String.pipe(
        Schema.maxLength(50),
        Schema.pattern(DIMENSIONS_PATTERN),
      ),
    ),
  ),
  standard_cost: Schema.optional(
    Schema.NullOr(Schema.Number.pipe(Schema.nonNegative())),
  ),
  standard_price: Schema.optional(
    Schema.NullOr(Schema.Number.pipe(Schema.nonNegative())),
  ),
  markup_percentage: Schema.optional(
    Schema.NullOr(
      Schema.Number.pipe(
        Schema.greaterThanOrEqualTo(0),
        Schema.lessThanOrEqualTo(1000),
      ),
    ),
  ),
  reorder_point: Schema.Number.pipe(Schema.nonNegative()),
  primary_supplier_id: Schema.optional(Schema.NullOr(Schema.UUID)),
  supplier_sku: Schema.optional(NullableTrimmedString(50)),
  barcode: Schema.optional(NullableTrimmedString(100)),
  unit: Schema.optional(NullableTrimmedString(50)),
  is_active: Schema.Boolean,
  is_perishable: Schema.Boolean,
  notes: Schema.optional(NullableTrimmedString(500)),
} as const

export const CreateProductRequestSchema = Schema.Struct(
  ProductBaseFields,
).annotations({ identifier: 'CreateProductRequest' })

export const UpdateProductRequestSchema = Schema.Struct({
  sku: Schema.optional(ProductBaseFields.sku),
  name: Schema.optional(ProductBaseFields.name),
  description: ProductBaseFields.description,
  category_id: Schema.optional(ProductBaseFields.category_id),
  volume_ml: ProductBaseFields.volume_ml,
  weight_kg: ProductBaseFields.weight_kg,
  dimensions_cm: ProductBaseFields.dimensions_cm,
  standard_cost: ProductBaseFields.standard_cost,
  standard_price: ProductBaseFields.standard_price,
  markup_percentage: ProductBaseFields.markup_percentage,
  reorder_point: Schema.optional(ProductBaseFields.reorder_point),
  primary_supplier_id: ProductBaseFields.primary_supplier_id,
  supplier_sku: ProductBaseFields.supplier_sku,
  barcode: ProductBaseFields.barcode,
  unit: ProductBaseFields.unit,
  is_active: Schema.optional(ProductBaseFields.is_active),
  is_perishable: Schema.optional(ProductBaseFields.is_perishable),
  notes: ProductBaseFields.notes,
}).annotations({ identifier: 'UpdateProductRequest' })

export const BulkCreateProductsSchema = Schema.Struct({
  products: Schema.Array(CreateProductRequestSchema).pipe(
    Schema.minItems(1),
    Schema.maxItems(100),
  ),
}).annotations({ identifier: 'BulkCreateProducts' })

export const BulkUpdateStatusSchema = Schema.Struct({
  ids: Schema.Array(Schema.UUID).pipe(Schema.minItems(1), Schema.maxItems(100)),
  is_active: Schema.Boolean,
}).annotations({ identifier: 'BulkUpdateStatus' })

export const BulkDeleteSchema = Schema.Struct({
  ids: Schema.Array(Schema.UUID).pipe(Schema.minItems(1), Schema.maxItems(100)),
  permanent: Schema.optionalWith(Schema.Boolean, { default: () => false }),
}).annotations({ identifier: 'BulkDelete' })

export const BulkRestoreSchema = Schema.Struct({
  ids: Schema.Array(Schema.UUID).pipe(Schema.minItems(1), Schema.maxItems(100)),
}).annotations({ identifier: 'BulkRestore' })
