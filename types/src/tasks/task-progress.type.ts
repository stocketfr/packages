export type TaskProgressMessageArgs = Readonly<Record<string, string | number>>

export interface TaskProgressDto {
  readonly total: number | null
  readonly processed: number
  readonly failed: number
  readonly percent: number | null
  readonly message: string | null
  readonly message_key: string | null
  readonly message_args: TaskProgressMessageArgs | null
}
