import { Schema } from 'effect'
import { NotificationCategory } from './notification-category.enum'
import { NotificationChannel } from './notification-channel.enum'

const CategoryValues = [
  NotificationCategory.ACCOUNT,
  NotificationCategory.INVENTORY_ALERTS,
  NotificationCategory.ORDER_LIFECYCLE,
] as const

const ChannelValues = [
  NotificationChannel.EMAIL,
] as const

export const NotificationPreferenceUpdateSchema = Schema.Struct({
  category: Schema.Literal(...CategoryValues),
  channel: Schema.Literal(...ChannelValues),
  enabled: Schema.Boolean,
}).annotations({ identifier: 'NotificationPreferenceUpdate' })

export const UpdateNotificationPreferencesSchema = Schema.Struct({
  preferences: Schema.Array(NotificationPreferenceUpdateSchema),
}).annotations({ identifier: 'UpdateNotificationPreferences' })
