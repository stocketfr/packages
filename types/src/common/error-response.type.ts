import type { Schema } from 'effect';
import type { ErrorResponseSchema } from './error-response.schema';

export { ErrorType } from './error-type.enum';

export type ErrorResponseDto = Schema.Schema.Type<typeof ErrorResponseSchema>;
