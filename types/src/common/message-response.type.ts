import type { Schema } from 'effect';
import type { MessageResponseSchema } from './message-response.schema';

export type MessageResponseDto = Schema.Schema.Type<typeof MessageResponseSchema>;
