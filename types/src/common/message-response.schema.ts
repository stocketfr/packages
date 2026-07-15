import { Schema } from 'effect';

export const MessageResponseSchema = Schema.mutable(Schema.Struct({ message: Schema.String })).annotations({
  identifier: 'MessageResponse',
});
