import { Schema } from 'effect';
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema';
import { ClientStatusSchema } from './client-status.schema';

export const ClientIdSchema = Schema.UUID.annotations({ identifier: 'ClientId' });

export const ClientQuerySchema = Schema.Struct({
  page: Schema.optionalWith(PageSchema, { default: () => 1 }),
  limit: Schema.optionalWith(LimitSchema, { default: () => 20 }),
  q: Schema.optional(Schema.Trim),
  account_status: Schema.optional(ClientStatusSchema),
}).annotations({ identifier: 'ClientQuery' });
