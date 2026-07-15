import { Schema } from 'effect';
import { ApiDateSchema } from '../common/api-date.schema';
import { PoweredBySchema } from './powered-by.schema';

export const BrandingResponseSchema = Schema.mutable(
  Schema.Struct({
    app_name: Schema.String,
    tagline: Schema.String,
    logo_url: Schema.NullOr(Schema.String),
    favicon_url: Schema.NullOr(Schema.String),
    primary_color: Schema.String,
    powered_by: PoweredBySchema,
    updated_at: ApiDateSchema,
  }),
).annotations({ identifier: 'BrandingResponse' });
