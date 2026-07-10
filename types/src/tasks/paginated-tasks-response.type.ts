import type { PaginationMeta } from '../common/pagination-meta.type'
import type { TaskResponseDto } from './task-response.type'

export interface PaginatedTasksResponseDto {
  readonly data: TaskResponseDto[]
  readonly meta: PaginationMeta
}
