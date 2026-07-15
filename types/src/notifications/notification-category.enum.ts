import { Schema } from 'effect';

export enum NotificationCategory {
  ACCOUNT = 'account',
  INVENTORY_ALERTS = 'inventory_alerts',
  ORDER_LIFECYCLE = 'order_lifecycle',
}

export const NotificationCategorySchema = Schema.Enums(NotificationCategory).annotations({
  identifier: 'NotificationCategory',
});
