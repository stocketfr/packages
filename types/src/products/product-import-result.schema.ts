import { Schema } from 'effect';

export const ProductImportErrorSchema = Schema.mutable(
  Schema.Struct({
    row: Schema.Number,
    error: Schema.String,
  }),
).annotations({ identifier: 'ProductImportError' });

export const ProductImportResultSchema = Schema.mutable(
  Schema.Struct({
    categoriesCreated: Schema.Number,
    locationsCreated: Schema.Number,
    areasCreated: Schema.Number,
    suppliersCreated: Schema.optional(Schema.Number),
    productsCreated: Schema.Number,
    productsUpdated: Schema.Number,
    inventoryRecordsCreated: Schema.Number,
    inventoryRecordsUpdated: Schema.Number,
    photosCreated: Schema.Number,
    photosSkipped: Schema.Number,
    rowsSkipped: Schema.Number,
    errors: Schema.mutable(Schema.Array(ProductImportErrorSchema)),
  }),
).annotations({ identifier: 'ProductImportResult' });
