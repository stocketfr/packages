export type ProductImportTypeDto = 'auto' | 'normalized-products' | 'sortly-items';

export type ProductImportFormatDto = Exclude<ProductImportTypeDto, 'auto'>;
export type ProductImportIssueSeverityDto = 'error' | 'warning';
export type ProductImportMappingActionDto =
  | 'use-existing'
  | 'create'
  | 'create-location'
  | 'create-area'
  | 'default'
  | 'ignore';
export type ProductImportInventoryActionDto = 'create' | 'update' | 'skip' | 'conflict';
export type ProductImportSkuConflictPolicyDto = 'reject' | 'derive-sku';

export interface ProductImportErrorDto {
  row: number;
  error: string;
}

export interface ProductImportResultDto {
  categoriesCreated: number;
  locationsCreated: number;
  areasCreated: number;
  readonly suppliersCreated?: number;
  productsCreated: number;
  productsUpdated: number;
  inventoryRecordsCreated: number;
  inventoryRecordsUpdated: number;
  photosCreated: number;
  photosSkipped: number;
  rowsSkipped: number;
  errors: ProductImportErrorDto[];
}

export interface ProductImportWarningDto {
  readonly row?: number;
  readonly field?: string;
  readonly severity: ProductImportIssueSeverityDto;
  readonly message: string;
}

export interface ProductImportCategoryMappingDto {
  readonly sourcePath: string;
  readonly targetCategoryId?: string;
  readonly targetPath: string;
  readonly action: Extract<ProductImportMappingActionDto, 'use-existing' | 'create' | 'default'>;
  readonly rowCount: number;
}

export interface ProductImportSupplierMappingDto {
  readonly sourcePattern: string;
  readonly supplierName: string;
  readonly targetSupplierId?: string;
  readonly action: Extract<ProductImportMappingActionDto, 'use-existing' | 'create' | 'ignore'>;
  readonly confidence: number;
  readonly rowCount: number;
}

export interface ProductImportLocationMappingDto {
  readonly sourceLocation: string;
  readonly targetLocationId?: string;
  readonly targetLocationName?: string;
  readonly areaPath?: string;
  readonly action: Extract<
    ProductImportMappingActionDto,
    'use-existing' | 'create-location' | 'create-area' | 'ignore'
  >;
  readonly confidence: number;
  readonly rowCount: number;
}

export interface ProductImportInventoryPreviewDto {
  readonly row: number;
  readonly sku: string;
  readonly location: string;
  readonly areaPath?: string;
  readonly quantity: number;
  readonly action: ProductImportInventoryActionDto;
  readonly reason?: string;
}

export interface ProductImportDuplicateSkuConflictDto {
  readonly sku: string;
  readonly rows: readonly number[];
  readonly names: readonly string[];
}

export interface ProductImportPreviewDto {
  readonly format: ProductImportFormatDto;
  readonly totalRows: number;
  readonly itemRows: number;
  readonly folderRows: number;
  readonly importableRows: number;
  readonly missingRequiredRows: number;
  readonly duplicateSkuConflicts: readonly ProductImportDuplicateSkuConflictDto[];
  readonly categoryMappings: readonly ProductImportCategoryMappingDto[];
  readonly supplierMappings: readonly ProductImportSupplierMappingDto[];
  readonly locationMappings: readonly ProductImportLocationMappingDto[];
  readonly inventoryPreviews: readonly ProductImportInventoryPreviewDto[];
  readonly warnings: readonly ProductImportWarningDto[];
}

export interface ProductImportApprovedPlanDto {
  readonly skuConflictPolicy?: ProductImportSkuConflictPolicyDto;
  readonly allowCreateSuppliers?: boolean;
  readonly defaultLocationName?: string;
  readonly categoryMappings?: readonly ProductImportCategoryMappingDto[];
  readonly supplierMappings?: readonly ProductImportSupplierMappingDto[];
  readonly locationMappings?: readonly ProductImportLocationMappingDto[];
}

export interface ProductImportAiProposalDto {
  readonly format: ProductImportFormatDto | 'unknown';
  readonly confidence: number;
  readonly productIdentity: {
    readonly sourceColumn: string;
    readonly conflictPolicy: ProductImportSkuConflictPolicyDto;
  };
  readonly categoryMappings: readonly ProductImportCategoryMappingDto[];
  readonly supplierMappings: readonly ProductImportSupplierMappingDto[];
  readonly locationMappings: readonly ProductImportLocationMappingDto[];
  readonly warnings: readonly ProductImportWarningDto[];
}
