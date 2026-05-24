export interface SuperAdminTenantResponse {
  readonly id: string
  readonly name: string
  readonly slug: string
  readonly primaryHostname: string | null
  readonly createdAt: string
}

export interface SuperAdminTenantListResponse {
  readonly data: readonly SuperAdminTenantResponse[]
}
