import { Schema } from 'effect';

export enum NotificationChannel {
  EMAIL = 'email',
}

export const NotificationChannelSchema = Schema.Enums(NotificationChannel).annotations({
  identifier: 'NotificationChannel',
});
