export interface ProductImportErrorDto {
  row: number;
  error: string;
}

export interface ProductImportResultDto {
  categoriesCreated: number;
  locationsCreated: number;
  areasCreated?: number;
  suppliersCreated?: number;
  productsCreated: number;
  productsUpdated: number;
  inventoryRecordsCreated: number;
  inventoryRecordsUpdated: number;
  rowsSkipped: number;
  errors: ProductImportErrorDto[];
}
