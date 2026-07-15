import { Schema } from 'effect';
import { ApiDateSchema } from './api-date.schema';

export const BaseResponseFields = {
  created_at: ApiDateSchema,
  updated_at: ApiDateSchema,
} as const;

export const BaseResponseSchema = Schema.mutable(Schema.Struct(BaseResponseFields)).annotations({
  identifier: 'BaseResponse',
});

export const BaseAuditResponseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    deleted_at: Schema.optional(Schema.NullOr(ApiDateSchema)),
    created_by: Schema.optional(Schema.NullOr(Schema.String)),
    updated_by: Schema.optional(Schema.NullOr(Schema.String)),
    deleted_by: Schema.optional(Schema.NullOr(Schema.String)),
  }),
).annotations({ identifier: 'BaseAuditResponse' });
