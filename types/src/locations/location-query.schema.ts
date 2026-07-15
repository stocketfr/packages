import { Schema } from 'effect';
import { LimitSchema, PageSchema } from '../common/schema-helpers.schema';
import { SortOrder } from '../common/sort-order.enum';
import { LocationSortField } from './location-sort-field.enum';
import { LocationTypeSchema } from './location-type.schema';

const LocationSortFieldValues = [
  LocationSortField.NAME,
  LocationSortField.TYPE,
  LocationSortField.CREATED_AT,
  LocationSortField.UPDATED_AT,
] as const;

const SortOrderValues = [SortOrder.ASC, SortOrder.DESC] as const;

export const LocationIdSchema = Schema.UUID.annotations({
  identifier: 'LocationId',
});

export const LocationQuerySchema = Schema.Struct({
  page: Schema.optionalWith(PageSchema, { default: () => 1 }),
  limit: Schema.optionalWith(LimitSchema, { default: () => 20 }),
  search: Schema.optional(Schema.Trim),
  type: Schema.optional(LocationTypeSchema),
  is_active: Schema.optional(Schema.BooleanFromString),
  sort_by: Schema.optionalWith(Schema.Literal(...LocationSortFieldValues), {
    default: () => LocationSortField.NAME,
  }),
  sort_order: Schema.optionalWith(Schema.Literal(...SortOrderValues), {
    default: () => SortOrder.ASC,
  }),
}).annotations({ identifier: 'LocationQuery' });
