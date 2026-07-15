import { Schema } from 'effect'
import { LocationTypeSchema } from '../locations/location-type.schema'

const DecisionMetadataFields = {
  mappingKey: Schema.optional(Schema.String),
  confidence: Schema.optional(Schema.Number),
  reason: Schema.optional(Schema.String),
  reviewRequired: Schema.optional(Schema.Boolean),
}

const ProductImportWarningSchema = Schema.mutable(
  Schema.Struct({
    row: Schema.optional(Schema.Number),
    field: Schema.optional(Schema.String),
    severity: Schema.Literal('error', 'warning'),
    message: Schema.String,
  }),
)

const ProductImportCategoryMappingSchema = Schema.mutable(
  Schema.Struct({
    ...DecisionMetadataFields,
    sourcePath: Schema.String,
    targetCategoryId: Schema.optional(Schema.String),
    targetPath: Schema.String,
    action: Schema.Literal('use-existing', 'create', 'default'),
    rowCount: Schema.Number,
  }),
)

const ProductImportSupplierMappingSchema = Schema.mutable(
  Schema.Struct({
    ...DecisionMetadataFields,
    sourcePattern: Schema.String,
    supplierName: Schema.String,
    targetSupplierId: Schema.optional(Schema.String),
    action: Schema.Literal('use-existing', 'create', 'ignore'),
    rowCount: Schema.Number,
  }),
)

const ProductImportChildAreaSchema = Schema.mutable(
  Schema.Struct({ name: Schema.String }),
)

const ProductImportLocationMappingSchema = Schema.mutable(
  Schema.Struct({
    ...DecisionMetadataFields,
    sourceLocation: Schema.String,
    targetLocationId: Schema.optional(Schema.String),
    targetAreaId: Schema.optional(Schema.String),
    targetLocationName: Schema.optional(Schema.String),
    areaPath: Schema.optional(Schema.String),
    childAreas: Schema.optional(
      Schema.mutable(Schema.Array(ProductImportChildAreaSchema)),
    ),
    action: Schema.Literal(
      'use-existing',
      'use-existing-area',
      'create-location',
      'create-area',
      'ignore',
    ),
    rowCount: Schema.Number,
  }),
)

const ProductImportInventoryPreviewSchema = Schema.mutable(
  Schema.Struct({
    row: Schema.Number,
    sku: Schema.String,
    location: Schema.String,
    areaPath: Schema.optional(Schema.String),
    quantity: Schema.Number,
    action: Schema.Literal('create', 'update', 'skip', 'conflict'),
    reason: Schema.optional(Schema.String),
  }),
)

const ProductImportDuplicateSkuVariantSchema = Schema.mutable(
  Schema.Struct({
    variantKey: Schema.String,
    rows: Schema.mutable(Schema.Array(Schema.Number)),
    names: Schema.mutable(Schema.Array(Schema.String)),
  }),
)

const ProductImportDuplicateSkuConflictSchema = Schema.mutable(
  Schema.Struct({
    conflictKey: Schema.optional(Schema.String),
    sku: Schema.String,
    rows: Schema.mutable(Schema.Array(Schema.Number)),
    names: Schema.mutable(Schema.Array(Schema.String)),
    variants: Schema.optional(
      Schema.mutable(Schema.Array(ProductImportDuplicateSkuVariantSchema)),
    ),
  }),
)

export const ProductImportPreviewSchema = Schema.mutable(
  Schema.Struct({
    format: Schema.Literal('normalized-products', 'sortly-items'),
    totalRows: Schema.Number,
    itemRows: Schema.Number,
    folderRows: Schema.Number,
    photoUrlCount: Schema.Number,
    importableRows: Schema.Number,
    missingRequiredRows: Schema.Number,
    duplicateSkuConflicts: Schema.mutable(
      Schema.Array(ProductImportDuplicateSkuConflictSchema),
    ),
    categoryMappings: Schema.mutable(
      Schema.Array(ProductImportCategoryMappingSchema),
    ),
    supplierMappings: Schema.mutable(
      Schema.Array(ProductImportSupplierMappingSchema),
    ),
    locationMappings: Schema.mutable(
      Schema.Array(ProductImportLocationMappingSchema),
    ),
    inventoryPreviews: Schema.mutable(
      Schema.Array(ProductImportInventoryPreviewSchema),
    ),
    warnings: Schema.mutable(Schema.Array(ProductImportWarningSchema)),
  }),
).annotations({ identifier: 'ProductImportPreview' })

const ProductImportSkuVariantResolutionSchema = Schema.mutable(
  Schema.Struct({
    variantKey: Schema.String,
    rows: Schema.mutable(Schema.Array(Schema.Number)),
    action: Schema.Literal(
      'keep-source-sku',
      'derive-sku',
      'custom-sku',
      'skip',
    ),
    targetSku: Schema.optional(Schema.String),
  }),
)

const ProductImportSkuConflictResolutionSchema = Schema.mutable(
  Schema.Struct({
    ...DecisionMetadataFields,
    conflictKey: Schema.String,
    sourceSku: Schema.String,
    variants: Schema.mutable(
      Schema.Array(ProductImportSkuVariantResolutionSchema),
    ),
  }),
)

const ProductImportMissingLocationStrategySchema = Schema.mutable(
  Schema.Struct({
    ...DecisionMetadataFields,
    action: Schema.Literal(
      'assign-review-area',
      'use-existing-area',
      'skip-inventory',
    ),
    targetLocationId: Schema.optional(Schema.String),
    targetLocationName: Schema.optional(Schema.String),
    targetAreaId: Schema.optional(Schema.String),
    areaPath: Schema.optional(Schema.String),
    rowCount: Schema.Number,
  }),
)

const ProductImportTargetContextSchema = Schema.mutable(
  Schema.Struct({
    categories: Schema.mutable(
      Schema.Array(
        Schema.mutable(
          Schema.Struct({ id: Schema.String, path: Schema.String }),
        ),
      ),
    ),
    locations: Schema.mutable(
      Schema.Array(
        Schema.mutable(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            type: LocationTypeSchema,
          }),
        ),
      ),
    ),
    areas: Schema.mutable(
      Schema.Array(
        Schema.mutable(
          Schema.Struct({
            id: Schema.String,
            locationId: Schema.String,
            path: Schema.String,
          }),
        ),
      ),
    ),
    truncated: Schema.optional(Schema.Boolean),
  }),
)

export const ProductImportProposalSchema = Schema.mutable(
  Schema.Struct({
    planVersion: Schema.optional(Schema.Literal(2)),
    photoPolicy: Schema.optional(Schema.Literal('import', 'skip')),
    proposalSource: Schema.optional(Schema.Literal('ai', 'deterministic')),
    format: Schema.Literal(
      'normalized-products',
      'sortly-items',
      'unknown',
    ),
    confidence: Schema.Number,
    productIdentity: Schema.mutable(
      Schema.Struct({
        sourceColumn: Schema.String,
        conflictPolicy: Schema.Literal('reject', 'derive-sku'),
      }),
    ),
    targetContext: Schema.optional(ProductImportTargetContextSchema),
    skuConflictResolutions: Schema.optional(
      Schema.mutable(Schema.Array(ProductImportSkuConflictResolutionSchema)),
    ),
    missingLocationStrategy: Schema.optional(
      ProductImportMissingLocationStrategySchema,
    ),
    categoryMappings: Schema.mutable(
      Schema.Array(ProductImportCategoryMappingSchema),
    ),
    supplierMappings: Schema.mutable(
      Schema.Array(ProductImportSupplierMappingSchema),
    ),
    locationMappings: Schema.mutable(
      Schema.Array(ProductImportLocationMappingSchema),
    ),
    warnings: Schema.mutable(Schema.Array(ProductImportWarningSchema)),
  }),
).annotations({ identifier: 'ProductImportProposal' })
