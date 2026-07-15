import type { Schema } from 'effect';
import type { InventoryResponseSchema } from './inventory-response.schema';

export type InventoryResponseDto = Schema.Schema.Type<typeof InventoryResponseSchema>;
