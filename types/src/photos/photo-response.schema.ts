import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { PhotoIdSchema, PhotoProductIdSchema } from './photo-id.schema';

export const PhotoResponseSchema = Schema.mutable(
  Schema.Struct({
    id: PhotoIdSchema,
    product_id: PhotoProductIdSchema,
    filename: Schema.String,
    mimetype: Schema.String,
    size: Schema.Number,
    uploaded_by: Schema.NullOr(Schema.String),
    display_order: Schema.Number,
    created_at: ApiDateSchema,
  }),
).annotations({ identifier: 'PhotoResponse' });
