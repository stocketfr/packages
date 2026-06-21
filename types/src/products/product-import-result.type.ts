export interface ProductImportErrorDto {
  row: number
  error: string
}

export interface ProductImportWarningDto {
  row?: number
  warning: string
}

export interface ProductImportResultDto {
  categoriesCreated: number
  locationsCreated: number
  productsCreated: number
  productsUpdated: number
  inventoryRecordsCreated: number
  inventoryRecordsUpdated: number
  rowsSkipped: number
  errors: ProductImportErrorDto[]
}

export type ProductImportFormatDto = 'normalized-products' | 'sortly-items'

export interface ProductImportValueSummaryDto {
  value: string
  count: number
}

export interface ProductImportPreviewStatsDto {
  totalRows: number
  importableRows: number
  itemRows: number
  folderRows: number
  rowsMissingSku: number
  rowsMissingName: number
  rowsMissingLocation: number
  rowsMissingCategory: number
  itemsWithPhotos: number
  itemsWithBarcodes: number
}

export interface ProductImportCategoryMappingDto {
  source: string
  target: string
}

export interface ProductImportLocationMappingDto {
  source: string
  locationName: string
  areaPath: string
}

export interface ProductImportMappingDto {
  categoryMappings: ProductImportCategoryMappingDto[]
  locationMappings: ProductImportLocationMappingDto[]
}

export interface ProductImportPreviewDto {
  detectedFormat: ProductImportFormatDto
  stats: ProductImportPreviewStatsDto
  categories: ProductImportValueSummaryDto[]
  locations: ProductImportValueSummaryDto[]
  suggestedMapping: ProductImportMappingDto
  issues: ProductImportErrorDto[]
  warnings: ProductImportWarningDto[]
}

export interface ProductImportCommitResultDto extends ProductImportResultDto {
  areasCreated: number
  photosImported: number
  warnings: ProductImportWarningDto[]
}
