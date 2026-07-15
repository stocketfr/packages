import type { Schema } from 'effect';
import type { OrderItemResponseSchema, OrderResponseSchema } from './order-response.schema';

export type OrderItemResponseDto = Schema.Schema.Type<typeof OrderItemResponseSchema>;

export type OrderResponseDto = Schema.Schema.Type<typeof OrderResponseSchema>;

// Backward-compatible aliases (deprecated).
export type OrderItemResponseType = OrderItemResponseDto;
export type OrderResponseType = OrderResponseDto;
