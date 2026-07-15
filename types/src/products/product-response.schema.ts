import { Schema } from 'effect';
import { BaseAuditResponseSchema } from '../common/base-response.schema';
import { CategorySummarySchema } from './category-summary.schema';
import { ProductLinksSchema } from './product-links.schema';
import { ProductIdSchema } from './product-query.schema';
import { SupplierSummarySchema } from './supplier-summary.schema';

export const ProductResponseSchema = Schema.mutable(
  Schema.extend(
    BaseAuditResponseSchema,
    Schema.Struct({
      id: ProductIdSchema,
      sku: Schema.String,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      category_id: Schema.UUID,
      category: Schema.optional(Schema.NullOr(CategorySummarySchema)),
      volume_ml: Schema.NullOr(Schema.Number),
      weight_kg: Schema.NullOr(Schema.Number),
      dimensions_cm: Schema.NullOr(Schema.String),
      standard_cost: Schema.NullOr(Schema.Number),
      standard_price: Schema.NullOr(Schema.Number),
      markup_percentage: Schema.NullOr(Schema.Number),
      reorder_point: Schema.Number,
      primary_supplier_id: Schema.NullOr(Schema.UUID),
      primary_supplier: Schema.optional(Schema.NullOr(SupplierSummarySchema)),
      supplier_sku: Schema.NullOr(Schema.String),
      barcode: Schema.NullOr(Schema.String),
      unit: Schema.NullOr(Schema.String),
      is_active: Schema.Boolean,
      is_perishable: Schema.Boolean,
      notes: Schema.NullOr(Schema.String),
      _links: Schema.optional(ProductLinksSchema),
    }),
  ),
).annotations({ identifier: 'ProductResponse' });
