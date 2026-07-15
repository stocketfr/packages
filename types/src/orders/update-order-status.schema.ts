import { Schema } from 'effect';
import { OrderStatusSchema } from './order-status.schema';

export const UpdateOrderStatusSchema = Schema.Struct({
  status: OrderStatusSchema,
}).annotations({
  identifier: 'UpdateOrderStatus',
});

export type UpdateOrderStatus = Schema.Schema.Type<typeof UpdateOrderStatusSchema>;
