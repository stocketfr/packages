export interface AreaSummaryDto {
  id: string
  name: string
  code: string
  /** Full ancestor path within the location, for example `Bay E / Shelf 3`. */
  path?: string
}
