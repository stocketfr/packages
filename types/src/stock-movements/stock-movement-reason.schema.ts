import { Schema } from 'effect';
import { StockMovementReason } from './stock-movement-reason.enum';

export const StockMovementReasonSchema = Schema.Enums(StockMovementReason).annotations({
  identifier: 'StockMovementReason',
});
