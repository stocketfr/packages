import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { OrderIdSchema } from './order-id.schema';
import { OrderStatusSchema } from './order-status.schema';

export const OrderItemResponseSchema = Schema.mutable(
  Schema.Struct({
    id: Schema.UUID,
    product_id: Schema.UUID,
    product_name: Schema.NullOr(Schema.String),
    product_sku: Schema.NullOr(Schema.String),
    quantity: Schema.Number,
    unit_price: Schema.Number,
    subtotal: Schema.Number,
    notes: Schema.NullOr(Schema.String),
    quantity_picked: Schema.Number,
    quantity_packed: Schema.Number,
    created_at: ApiDateSchema,
    updated_at: ApiDateSchema,
  }),
).annotations({ identifier: 'OrderItemResponse' });

export const OrderResponseSchema = Schema.mutable(
  Schema.Struct({
    id: OrderIdSchema,
    order_number: Schema.String,
    client_id: Schema.UUID,
    client_name: Schema.NullOr(Schema.String),
    status: OrderStatusSchema,
    delivery_address: Schema.String,
    delivery_deadline: Schema.NullOr(ApiDateSchema),
    yacht_name: Schema.NullOr(Schema.String),
    special_instructions: Schema.NullOr(Schema.String),
    total_amount: Schema.Number,
    assigned_to: Schema.NullOr(Schema.String),
    created_by: Schema.String,
    confirmed_at: Schema.NullOr(ApiDateSchema),
    shipped_at: Schema.NullOr(ApiDateSchema),
    delivered_at: Schema.NullOr(ApiDateSchema),
    kanban_task_id: Schema.NullOr(Schema.String),
    items: Schema.mutable(Schema.Array(OrderItemResponseSchema)),
    created_at: ApiDateSchema,
    updated_at: ApiDateSchema,
  }),
).annotations({ identifier: 'OrderResponse' });
