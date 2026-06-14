import type { NotificationCategory } from './notification-category.enum'
import type { NotificationChannel } from './notification-channel.enum'

export interface NotificationPreferenceDto {
  category: NotificationCategory
  channel: NotificationChannel
  enabled: boolean
}

export interface NotificationPreferencesResponseDto {
  preferences: NotificationPreferenceDto[]
}
