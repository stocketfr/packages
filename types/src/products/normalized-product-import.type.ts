export const NORMALIZED_PRODUCT_IMPORT_HEADERS = [
  'sku',
  'name',
  'category_path',
  'reorder_point',
  'quantity',
  'location',
  'unit',
  'standard_price',
  'barcode',
  'description',
  'notes',
  'is_active',
  'is_perishable',
  'expiry_date',
] as const

export const NORMALIZED_PRODUCT_IMPORT_REQUIRED_HEADERS = [
  'sku',
  'name',
] as const satisfies readonly NormalizedProductImportHeader[]

export type NormalizedProductImportHeader =
  (typeof NORMALIZED_PRODUCT_IMPORT_HEADERS)[number]

export type NormalizedProductImportRequiredHeader =
  (typeof NORMALIZED_PRODUCT_IMPORT_REQUIRED_HEADERS)[number]

export type NormalizedProductImportRowDto = Partial<
  Record<NormalizedProductImportHeader, string>
>
