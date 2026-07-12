import type { LocationType } from '../locations/location-type.enum'

export type ProductImportTypeDto =
  | 'auto'
  | 'normalized-products'
  | 'sortly-items'

export type ProductImportFormatDto = Exclude<ProductImportTypeDto, 'auto'>
export type ProductImportIssueSeverityDto = 'error' | 'warning'
export type ProductImportPlanVersionDto = 2
export type ProductImportProposalSourceDto = 'ai' | 'deterministic'
export type ProductImportMappingActionDto =
  | 'use-existing'
  | 'use-existing-area'
  | 'create'
  | 'create-location'
  | 'create-area'
  | 'default'
  | 'ignore'
export type ProductImportInventoryActionDto =
  | 'create'
  | 'update'
  | 'skip'
  | 'conflict'
export type ProductImportSkuConflictPolicyDto = 'reject' | 'derive-sku'
export type ProductImportPhotoPolicyDto = 'import' | 'skip'

export interface ProductImportDecisionMetadataDto {
  /** Stable key used to preserve edits across AI re-proposals. */
  readonly mappingKey?: string
  readonly confidence?: number
  readonly reason?: string
  readonly reviewRequired?: boolean
}

export interface ProductImportDecisionMetadataV2Dto {
  readonly mappingKey: string
  readonly confidence: number
  readonly reason?: string
  readonly reviewRequired: boolean
}

type ProductImportWithRequiredDecisionMetadataDto<T> = T extends unknown
  ? Omit<T, keyof ProductImportDecisionMetadataDto> &
      ProductImportDecisionMetadataV2Dto
  : never

export interface ProductImportErrorDto {
  row: number
  error: string
}

export interface ProductImportResultDto {
  categoriesCreated: number
  locationsCreated: number
  areasCreated: number
  /** @deprecated Supplier imports are reserved for a later Smart Import version. */
  readonly suppliersCreated?: number
  productsCreated: number
  productsUpdated: number
  inventoryRecordsCreated: number
  inventoryRecordsUpdated: number
  photosCreated: number
  photosSkipped: number
  rowsSkipped: number
  errors: ProductImportErrorDto[]
}

export interface ProductImportWarningDto {
  readonly row?: number
  readonly field?: string
  readonly severity: ProductImportIssueSeverityDto
  readonly message: string
}

export interface ProductImportCategoryMappingDto extends ProductImportDecisionMetadataDto {
  readonly sourcePath: string
  readonly targetCategoryId?: string
  readonly targetPath: string
  readonly action: Extract<
    ProductImportMappingActionDto,
    'use-existing' | 'create' | 'default'
  >
  readonly rowCount: number
}

interface ProductImportCategoryMappingV2BaseDto extends ProductImportDecisionMetadataV2Dto {
  readonly sourcePath: string
  readonly targetPath: string
  readonly rowCount: number
}

export type ProductImportCategoryMappingV2Dto =
  | (ProductImportCategoryMappingV2BaseDto & {
      readonly action: 'use-existing'
      readonly targetCategoryId: string
    })
  | (ProductImportCategoryMappingV2BaseDto & {
      readonly action: 'create' | 'default'
      readonly targetCategoryId?: never
    })

/** @deprecated Supplier import decisions are reserved for a later Smart Import version. */
export interface ProductImportSupplierMappingDto extends ProductImportDecisionMetadataDto {
  readonly sourcePattern: string
  readonly supplierName: string
  readonly targetSupplierId?: string
  readonly action: Extract<
    ProductImportMappingActionDto,
    'use-existing' | 'create' | 'ignore'
  >
  readonly confidence: number
  readonly rowCount: number
}

export interface ProductImportLocationMappingDto extends ProductImportDecisionMetadataDto {
  readonly sourceLocation: string
  readonly targetLocationId?: string
  readonly targetAreaId?: string
  readonly targetLocationName?: string
  readonly areaPath?: string
  readonly action: Extract<
    ProductImportMappingActionDto,
    'use-existing' | 'create-location' | 'create-area' | 'ignore'
  >
  readonly confidence: number
  readonly rowCount: number
}

interface ProductImportLocationMappingV2BaseDto extends ProductImportDecisionMetadataV2Dto {
  readonly sourceLocation: string
  readonly rowCount: number
}

/** Empty areas to create directly beneath an imported inventory target area. */
export interface ProductImportChildAreaDto {
  readonly name: string
}

interface ProductImportChildAreaSetupDto {
  readonly childAreas?: readonly ProductImportChildAreaDto[]
}

interface ProductImportCreateAreaMappingV2BaseDto
  extends
    ProductImportLocationMappingV2BaseDto,
    ProductImportChildAreaSetupDto {
  readonly action: 'create-area'
  readonly targetAreaId?: never
  readonly areaPath: string
}

export type ProductImportLocationMappingV2Dto =
  | (ProductImportLocationMappingV2BaseDto & {
      readonly action: 'use-existing'
      readonly targetLocationId: string
      readonly targetLocationName?: string
      readonly targetAreaId?: never
      readonly areaPath?: never
    })
  | (ProductImportLocationMappingV2BaseDto &
      ProductImportChildAreaSetupDto & {
        readonly action: 'use-existing-area'
        readonly targetLocationId: string
        readonly targetLocationName?: string
        readonly targetAreaId: string
        readonly areaPath?: string
      })
  | (ProductImportLocationMappingV2BaseDto & {
      readonly action: 'create-location'
      readonly targetLocationId?: never
      readonly targetLocationName: string
      readonly targetAreaId?: never
      readonly areaPath?: never
    })
  | (ProductImportCreateAreaMappingV2BaseDto & {
      readonly targetLocationId: string
      readonly targetLocationName?: never
    })
  | (ProductImportCreateAreaMappingV2BaseDto & {
      readonly targetLocationId?: never
      readonly targetLocationName: string
    })
  | (ProductImportLocationMappingV2BaseDto & {
      readonly action: 'ignore'
      readonly targetLocationId?: never
      readonly targetLocationName?: never
      readonly targetAreaId?: never
      readonly areaPath?: never
    })

export interface ProductImportInventoryPreviewDto {
  readonly row: number
  readonly sku: string
  readonly location: string
  readonly areaPath?: string
  readonly quantity: number
  readonly action: ProductImportInventoryActionDto
  readonly reason?: string
}

export interface ProductImportDuplicateSkuConflictDto {
  /** Stable key for applying one conflict resolution after re-proposal. */
  readonly conflictKey?: string
  readonly sku: string
  readonly rows: readonly number[]
  readonly names: readonly string[]
  readonly variants?: readonly ProductImportDuplicateSkuVariantDto[]
}

export interface ProductImportDuplicateSkuVariantDto {
  readonly variantKey: string
  readonly rows: readonly number[]
  readonly names: readonly string[]
}

interface ProductImportSkuVariantResolutionBaseDto {
  readonly variantKey: string
  readonly rows: readonly number[]
}

export type ProductImportSkuVariantResolutionDto =
  | (ProductImportSkuVariantResolutionBaseDto & {
      readonly action: 'keep-source-sku' | 'derive-sku' | 'custom-sku'
      readonly targetSku: string
    })
  | (ProductImportSkuVariantResolutionBaseDto & {
      readonly action: 'skip'
      readonly targetSku?: never
    })

export interface ProductImportSkuConflictResolutionDto extends ProductImportDecisionMetadataDto {
  readonly conflictKey: string
  readonly sourceSku: string
  readonly variants: readonly ProductImportSkuVariantResolutionDto[]
}

export type ProductImportSkuConflictResolutionV2Dto = Omit<
  ProductImportSkuConflictResolutionDto,
  keyof ProductImportDecisionMetadataDto
> &
  ProductImportDecisionMetadataV2Dto

export interface ProductImportCategoryTargetDto {
  readonly id: string
  readonly path: string
}

export interface ProductImportLocationTargetDto {
  readonly id: string
  readonly name: string
  readonly type: LocationType
}

export interface ProductImportAreaTargetDto {
  readonly id: string
  readonly locationId: string
  readonly path: string
}

export interface ProductImportTargetContextDto {
  readonly categories: readonly ProductImportCategoryTargetDto[]
  readonly locations: readonly ProductImportLocationTargetDto[]
  readonly areas: readonly ProductImportAreaTargetDto[]
  readonly truncated?: boolean
}

interface ProductImportMissingLocationStrategyBaseDto extends ProductImportDecisionMetadataDto {
  readonly rowCount: number
}

export type ProductImportMissingLocationStrategyDto =
  | (ProductImportMissingLocationStrategyBaseDto & {
      readonly action: 'assign-review-area'
      readonly targetLocationId: string
      readonly targetLocationName?: never
      readonly targetAreaId?: never
      readonly areaPath: string
    })
  | (ProductImportMissingLocationStrategyBaseDto & {
      readonly action: 'assign-review-area'
      readonly targetLocationId?: never
      readonly targetLocationName: string
      readonly targetAreaId?: never
      readonly areaPath: string
    })
  | (ProductImportMissingLocationStrategyBaseDto & {
      readonly action: 'use-existing-area'
      readonly targetLocationId: string
      readonly targetLocationName?: string
      readonly targetAreaId: string
      readonly areaPath?: string
    })
  | (ProductImportMissingLocationStrategyBaseDto & {
      readonly action: 'skip-inventory'
      readonly targetLocationId?: never
      readonly targetLocationName?: never
      readonly targetAreaId?: never
      readonly areaPath?: never
    })

export type ProductImportMissingLocationStrategyV2Dto =
  ProductImportWithRequiredDecisionMetadataDto<ProductImportMissingLocationStrategyDto>

export interface ProductImportPreviewDto {
  readonly format: ProductImportFormatDto
  readonly totalRows: number
  readonly itemRows: number
  readonly folderRows: number
  /**
   * Number of non-empty photo URL cells across source product rows.
   * Repeated URLs in separate source cells are counted separately.
   */
  readonly photoUrlCount: number
  readonly importableRows: number
  readonly missingRequiredRows: number
  readonly duplicateSkuConflicts: readonly ProductImportDuplicateSkuConflictDto[]
  readonly categoryMappings: readonly ProductImportCategoryMappingDto[]
  /** @deprecated Accepted for legacy clients; v2 producers return an empty list. */
  readonly supplierMappings: readonly ProductImportSupplierMappingDto[]
  readonly locationMappings: readonly ProductImportLocationMappingDto[]
  readonly inventoryPreviews: readonly ProductImportInventoryPreviewDto[]
  readonly warnings: readonly ProductImportWarningDto[]
}

export interface ProductImportApprovedPlanDto {
  /** Legacy plans are unversioned; editable plans use ProductImportApprovedPlanV2Dto. */
  readonly planVersion?: never
  /** Omitted plans preserve the legacy behavior and import photos. */
  readonly photoPolicy?: ProductImportPhotoPolicyDto
  readonly skuConflictPolicy?: ProductImportSkuConflictPolicyDto
  /** Per-conflict decisions override the global conflict policy. */
  readonly skuConflictResolutions?: readonly ProductImportSkuConflictResolutionDto[]
  readonly missingLocationStrategy?: ProductImportMissingLocationStrategyDto
  /** @deprecated Accepted and ignored by Smart Import v2. */
  readonly allowCreateSuppliers?: boolean
  readonly defaultLocationName?: string
  readonly categoryMappings?: readonly ProductImportCategoryMappingDto[]
  /** @deprecated Accepted and ignored by Smart Import v2. */
  readonly supplierMappings?: readonly ProductImportSupplierMappingDto[]
  readonly locationMappings?: readonly ProductImportLocationMappingDto[]
}

export type ProductImportApprovedPlanV2Dto = Omit<
  ProductImportApprovedPlanDto,
  | 'planVersion'
  | 'skuConflictPolicy'
  | 'skuConflictResolutions'
  | 'missingLocationStrategy'
  | 'categoryMappings'
  | 'locationMappings'
> & {
  readonly planVersion: 2
  readonly skuConflictPolicy: ProductImportSkuConflictPolicyDto
  readonly skuConflictResolutions: readonly ProductImportSkuConflictResolutionV2Dto[]
  readonly missingLocationStrategy: ProductImportMissingLocationStrategyV2Dto
  readonly categoryMappings: readonly ProductImportCategoryMappingV2Dto[]
  readonly locationMappings: readonly ProductImportLocationMappingV2Dto[]
}

export type ProductImportPlanDto =
  | ProductImportApprovedPlanDto
  | ProductImportApprovedPlanV2Dto

export interface ProductImportLockedDecisionKeysDto {
  readonly skuConflictPolicy?: boolean
  readonly photoPolicy?: boolean
  readonly missingLocationStrategy?: boolean
  /** Stable category mapping keys that AI re-proposals must preserve. */
  readonly categoryMappings?: readonly string[]
  /** Stable location mapping keys that AI re-proposals must preserve. */
  readonly locationMappings?: readonly string[]
  /** Stable conflict-resolution mapping keys that AI re-proposals must preserve. */
  readonly skuConflictResolutions?: readonly string[]
}

export interface ProductImportProposalGuidanceDto {
  /** Free-form user direction; API boundaries cap this at 4,000 characters. */
  readonly instructions?: string
  readonly currentPlan?: ProductImportPlanDto
  readonly locks?: ProductImportLockedDecisionKeysDto
}

export interface ProductImportAiProposalDto {
  /** Legacy proposals are unversioned; editable proposals use ProductImportAiProposalV2Dto. */
  readonly planVersion?: never
  /** Omitted plans preserve the legacy behavior and import photos. */
  readonly photoPolicy?: ProductImportPhotoPolicyDto
  readonly proposalSource?: ProductImportProposalSourceDto
  readonly format: ProductImportFormatDto | 'unknown'
  readonly confidence: number
  readonly productIdentity: {
    readonly sourceColumn: string
    readonly conflictPolicy: ProductImportSkuConflictPolicyDto
  }
  readonly targetContext?: ProductImportTargetContextDto
  readonly skuConflictResolutions?: readonly ProductImportSkuConflictResolutionDto[]
  readonly missingLocationStrategy?: ProductImportMissingLocationStrategyDto
  readonly categoryMappings: readonly ProductImportCategoryMappingDto[]
  /** @deprecated Accepted for legacy clients; v2 producers return an empty list. */
  readonly supplierMappings: readonly ProductImportSupplierMappingDto[]
  readonly locationMappings: readonly ProductImportLocationMappingDto[]
  readonly warnings: readonly ProductImportWarningDto[]
}

export type ProductImportAiProposalV2Dto = Omit<
  ProductImportAiProposalDto,
  | 'planVersion'
  | 'proposalSource'
  | 'targetContext'
  | 'skuConflictResolutions'
  | 'missingLocationStrategy'
  | 'categoryMappings'
  | 'locationMappings'
> & {
  readonly planVersion: 2
  readonly proposalSource: ProductImportProposalSourceDto
  readonly targetContext: ProductImportTargetContextDto
  readonly skuConflictResolutions: readonly ProductImportSkuConflictResolutionV2Dto[]
  readonly missingLocationStrategy: ProductImportMissingLocationStrategyV2Dto
  readonly categoryMappings: readonly ProductImportCategoryMappingV2Dto[]
  readonly locationMappings: readonly ProductImportLocationMappingV2Dto[]
}

export type ProductImportProposalDto =
  | ProductImportAiProposalDto
  | ProductImportAiProposalV2Dto
