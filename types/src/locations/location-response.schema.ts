import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { LocationIdSchema } from './location-query.schema';
import { LocationTypeSchema } from './location-type.schema';

export const LocationResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: LocationIdSchema,
    name: Schema.String,
    type: LocationTypeSchema,
    address: Schema.String,
    contact_person: Schema.String,
    phone: Schema.String,
    is_active: Schema.Boolean,
  }),
).annotations({ identifier: 'LocationResponse' });
