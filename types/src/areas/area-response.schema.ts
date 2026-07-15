import { Schema } from 'effect';
import { BaseResponseFields } from '../common/base-response.schema';
import { AreaIdSchema } from './area-query.schema';

const AreaResponseBaseSchema = Schema.mutable(
  Schema.Struct({
    ...BaseResponseFields,
    id: AreaIdSchema,
    location_id: Schema.UUID,
    parent_id: Schema.NullOr(AreaIdSchema),
    name: Schema.String,
    code: Schema.String,
    description: Schema.String,
    is_active: Schema.Boolean,
  }),
);

type AreaResponseBase = Schema.Schema.Type<typeof AreaResponseBaseSchema>;
type AreaResponseEncodedBase = Schema.Schema.Encoded<typeof AreaResponseBaseSchema>;

export interface AreaResponse extends AreaResponseBase {
  children?: AreaResponse[];
}

interface AreaResponseEncoded extends AreaResponseEncodedBase {
  children?: AreaResponseEncoded[];
}

export const AreaResponseSchema: Schema.Schema<AreaResponse, AreaResponseEncoded> = Schema.mutable(
  Schema.extend(
    AreaResponseBaseSchema,
    Schema.Struct({
      children: Schema.optional(
        Schema.mutable(
          Schema.Array(Schema.suspend((): Schema.Schema<AreaResponse, AreaResponseEncoded> => AreaResponseSchema)),
        ),
      ),
    }),
  ),
).annotations({ identifier: 'AreaResponse' });
