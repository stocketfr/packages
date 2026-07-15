import { Schema } from 'effect';
import { OrderStatus } from './order-status.enum';

export const OrderStatusSchema = Schema.Enums(OrderStatus).annotations({
  identifier: 'OrderStatus',
});
