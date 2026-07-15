import type { Schema } from 'effect';
import type {
  NotificationPreferenceSchema,
  NotificationPreferencesResponseSchema,
} from './notification-preferences.schema';

export type NotificationPreferenceDto = Schema.Schema.Type<typeof NotificationPreferenceSchema>;

export type NotificationPreferencesResponseDto = Schema.Schema.Type<typeof NotificationPreferencesResponseSchema>;
