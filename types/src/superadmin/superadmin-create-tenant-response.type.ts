import type { ProductImportResultDto } from '../products/product-import-result.type'

export interface SuperAdminCreateTenantResponse {
  readonly tenant: {
    readonly id: string
    readonly name: string
    readonly slug: string
    readonly hostname: string
  }
  readonly admin: {
    readonly id: string
    readonly email: string
    readonly name: string
  }
  readonly productImport?: ProductImportResultDto
}
