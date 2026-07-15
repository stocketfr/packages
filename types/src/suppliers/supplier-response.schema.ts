import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { SupplierIdSchema } from './supplier-query.schema';

export const SupplierResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: SupplierIdSchema,
    name: Schema.String,
    contact_person: Schema.NullOr(Schema.String),
    email: Schema.NullOr(Schema.String),
    phone: Schema.NullOr(Schema.String),
    address: Schema.NullOr(Schema.String),
    website: Schema.NullOr(Schema.String),
    notes: Schema.NullOr(Schema.String),
    is_active: Schema.Boolean,
  }),
).annotations({ identifier: 'SupplierResponse' });
