import { Schema } from 'effect'

const NullableDateString = Schema.NullOr(Schema.DateFromString)
const NullableNonNegativeNumber = Schema.NullOr(Schema.Number.pipe(Schema.nonNegative()))

export const CreateInventorySchema = Schema.Struct({
  product_id: Schema.UUID,
  location_id: Schema.UUID,
  area_id: Schema.optional(Schema.NullOr(Schema.UUID)),
  quantity: Schema.Number.pipe(Schema.int(), Schema.nonNegative()),
  batchNumber: Schema.optional(Schema.String.pipe(Schema.maxLength(100))),
  expiry_date: Schema.optional(NullableDateString),
  cost_per_unit: Schema.optional(NullableNonNegativeNumber),
  received_date: Schema.optional(NullableDateString),
}).annotations({ identifier: 'CreateInventory' })

export const UpdateInventorySchema = Schema.Struct({
  location_id: Schema.optional(Schema.UUID),
  area_id: Schema.optional(Schema.NullOr(Schema.UUID)),
  quantity: Schema.optional(Schema.Number.pipe(Schema.int(), Schema.nonNegative())),
  batchNumber: Schema.optional(Schema.String.pipe(Schema.maxLength(100))),
  expiry_date: Schema.optional(NullableDateString),
  cost_per_unit: Schema.optional(NullableNonNegativeNumber),
  received_date: Schema.optional(NullableDateString),
}).annotations({ identifier: 'UpdateInventory' })

export const AdjustInventorySchema = Schema.Struct({
  adjustment: Schema.Number.pipe(Schema.int()),
}).annotations({ identifier: 'AdjustInventory' })
