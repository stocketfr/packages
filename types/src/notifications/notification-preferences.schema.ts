import { Schema } from 'effect';
import { NotificationCategorySchema } from './notification-category.enum';
import { NotificationChannelSchema } from './notification-channel.enum';

export const NotificationPreferenceUpdateSchema = Schema.Struct({
  category: NotificationCategorySchema,
  channel: NotificationChannelSchema,
  enabled: Schema.Boolean,
}).annotations({ identifier: 'NotificationPreferenceUpdate' });

export const UpdateNotificationPreferencesSchema = Schema.Struct({
  preferences: Schema.Array(NotificationPreferenceUpdateSchema),
}).annotations({ identifier: 'UpdateNotificationPreferences' });

export const NotificationPreferenceSchema = Schema.mutable(NotificationPreferenceUpdateSchema).annotations({
  identifier: 'NotificationPreference',
});

export const NotificationPreferencesResponseSchema = Schema.mutable(
  Schema.Struct({
    preferences: Schema.mutable(Schema.Array(NotificationPreferenceSchema)),
  }),
).annotations({ identifier: 'NotificationPreferencesResponse' });
