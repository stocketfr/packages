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

export interface ProductImportWarningDto {
  row?: number;
  field?: string;
  severity: ProductImportIssueSeverityDto;
  message: string;
}

export interface ProductImportCategoryMappingDto {
  sourcePath: string;
  targetCategoryId?: string;
  targetPath: string;
  action: Extract<ProductImportMappingActionDto, 'use-existing' | 'create' | 'default'>;
  rowCount: number;
}

export interface ProductImportSupplierMappingDto {
  sourcePattern: string;
  supplierName: string;
  targetSupplierId?: string;
  action: Extract<ProductImportMappingActionDto, 'use-existing' | 'create' | 'ignore'>;
  confidence: number;
  rowCount: number;
}

export interface ProductImportLocationMappingDto {
  sourceLocation: string;
  targetLocationId?: string;
  targetLocationName?: string;
  areaPath?: string;
  action: Extract<ProductImportMappingActionDto, 'use-existing' | 'create-location' | 'create-area' | 'ignore'>;
  confidence: number;
  rowCount: number;
}

export interface ProductImportInventoryPreviewDto {
  row: number;
  sku: string;
  location: string;
  areaPath?: string;
  quantity: number;
  action: ProductImportInventoryActionDto;
  reason?: string;
}

export interface ProductImportDuplicateSkuConflictDto {
  sku: string;
  rows: number[];
  names: string[];
}

export interface ProductImportPreviewDto {
  format: ProductImportFormatDto;
  totalRows: number;
  itemRows: number;
  folderRows: number;
  importableRows: number;
  missingRequiredRows: number;
  duplicateSkuConflicts: ProductImportDuplicateSkuConflictDto[];
  categoryMappings: ProductImportCategoryMappingDto[];
  supplierMappings: ProductImportSupplierMappingDto[];
  locationMappings: ProductImportLocationMappingDto[];
  inventoryPreviews: ProductImportInventoryPreviewDto[];
  warnings: ProductImportWarningDto[];
}

export interface ProductImportApprovedPlanDto {
  skuConflictPolicy?: ProductImportSkuConflictPolicyDto;
  allowCreateSuppliers?: boolean;
  defaultLocationName?: string;
  categoryMappings?: ProductImportCategoryMappingDto[];
  supplierMappings?: ProductImportSupplierMappingDto[];
  locationMappings?: ProductImportLocationMappingDto[];
}

export interface ProductImportAiProposalDto {
  format: ProductImportFormatDto | 'unknown';
  confidence: number;
  productIdentity: {
    sourceColumn: string;
    conflictPolicy: ProductImportSkuConflictPolicyDto;
  };
  categoryMappings: ProductImportCategoryMappingDto[];
  supplierMappings: ProductImportSupplierMappingDto[];
  locationMappings: ProductImportLocationMappingDto[];
  warnings: ProductImportWarningDto[];
}
