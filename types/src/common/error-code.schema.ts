import { Schema } from 'effect';
import { ErrorCode } from './error-code.enum';

export const ErrorCodeSchema = Schema.Enums(ErrorCode).annotations({
  identifier: 'ErrorCode',
});
