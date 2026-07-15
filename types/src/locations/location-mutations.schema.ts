import { Schema } from 'effect';
import { LocationTypeSchema } from './location-type.schema';

export const CreateLocationSchema = Schema.Struct({
  name: Schema.String.pipe(Schema.minLength(1), Schema.maxLength(200)),
  type: LocationTypeSchema,
  address: Schema.optional(Schema.String),
  contact_person: Schema.optional(Schema.String.pipe(Schema.maxLength(200))),
  phone: Schema.optional(Schema.String.pipe(Schema.maxLength(50))),
  is_active: Schema.optional(Schema.Boolean),
}).annotations({ identifier: 'CreateLocation' });

export const UpdateLocationSchema = Schema.Struct({
  name: Schema.optional(Schema.String.pipe(Schema.minLength(1), Schema.maxLength(200))),
  type: Schema.optional(LocationTypeSchema),
  address: Schema.optional(Schema.String),
  contact_person: Schema.optional(Schema.String.pipe(Schema.maxLength(200))),
  phone: Schema.optional(Schema.String.pipe(Schema.maxLength(50))),
  is_active: Schema.optional(Schema.Boolean),
}).annotations({ identifier: 'UpdateLocation' });
