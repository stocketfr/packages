import type { TaskProgressDto } from './task-progress.type'
import type { TaskStatus } from './task-status.enum'

export interface TaskResponseDto {
  readonly id: string
  readonly type: string
  readonly status: TaskStatus
  readonly result: unknown | null
  readonly error: string | null
  readonly attempt_count: number
  readonly max_attempts: number
  readonly run_after: string | Date
  readonly progress: TaskProgressDto
  readonly cancel_requested_at: string | Date | null
  readonly started_at: string | Date | null
  readonly completed_at: string | Date | null
  readonly created_at: string | Date
  readonly updated_at: string | Date
}
