import { Schema } from 'effect';
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema';

import { OrderStatusSchema } from './order-status.schema';

export const OrderQuerySchema = Schema.Struct({
  page: Schema.optionalWith(PageSchema, { default: () => 1 }),
  limit: Schema.optionalWith(LimitSchema, { default: () => 20 }),
  q: Schema.optional(Schema.Trim),
  client_id: Schema.optional(Schema.UUID),
  status: Schema.optional(OrderStatusSchema),
  date_from: Schema.optional(Schema.DateFromString),
  date_to: Schema.optional(Schema.DateFromString),
}).annotations({
  identifier: 'OrderQuery',
});

export type OrderQuery = Schema.Schema.Type<typeof OrderQuerySchema>;
