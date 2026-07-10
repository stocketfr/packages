import type { SortOrder } from '../common/sort-order.enum'
import type { TaskStatus } from './task-status.enum'

export interface TaskQueryDto {
  readonly page?: number
  readonly limit?: number
  readonly type?: string
  readonly status?: TaskStatus
  readonly sort_order?: SortOrder
}
