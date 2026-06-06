export interface ProductImportErrorDto {
  row: number
  error: string
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
