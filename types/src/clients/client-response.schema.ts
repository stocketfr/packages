import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { ClientIdSchema } from './client-query.schema';
import { ClientStatusSchema } from './client-status.schema';

export const ClientResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: ClientIdSchema,
    company_name: Schema.String,
    contact_person: Schema.String,
    email: Schema.String,
    yacht_name: Schema.NullOr(Schema.String),
    phone: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Schema.String),
    default_delivery_address: Schema.NullOr(Schema.String),
    account_status: ClientStatusSchema,
    payment_terms: Schema.NullOr(Schema.String),
    credit_limit: Schema.NullOr(Schema.Number),
    notes: Schema.NullOr(Schema.String),
  }),
).annotations({ identifier: 'ClientResponse' });
