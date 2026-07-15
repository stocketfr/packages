import type { Schema } from 'effect';
import type {
  StockMovementLocationSummarySchema,
  StockMovementProductSummarySchema,
  StockMovementResponseSchema,
} from './stock-movement-response.schema';

export type StockMovementLocationSummary = Schema.Schema.Type<typeof StockMovementLocationSummarySchema>;

export type StockMovementProductSummary = Schema.Schema.Type<typeof StockMovementProductSummarySchema>;

export type StockMovementResponseDto = Schema.Schema.Type<typeof StockMovementResponseSchema>;
