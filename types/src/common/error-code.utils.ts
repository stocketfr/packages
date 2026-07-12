import { ErrorCode } from './error-code.enum'

const HTTP_STATUS_ERROR_CODES: Readonly<Partial<Record<number, ErrorCode>>> = {
  400: ErrorCode.BAD_REQUEST,
  401: ErrorCode.UNAUTHORIZED,
  403: ErrorCode.FORBIDDEN,
  404: ErrorCode.NOT_FOUND,
  405: ErrorCode.METHOD_NOT_ALLOWED,
  409: ErrorCode.CONFLICT,
  422: ErrorCode.UNPROCESSABLE_ENTITY,
  429: ErrorCode.RATE_LIMIT_EXCEEDED,
  500: ErrorCode.INTERNAL_SERVER_ERROR,
  501: ErrorCode.NOT_IMPLEMENTED,
  502: ErrorCode.BAD_GATEWAY,
  503: ErrorCode.SERVICE_UNAVAILABLE,
}

const ERROR_CODES = new Set<string>(Object.values(ErrorCode))

export const errorCodeForHttpStatus = (statusCode: number): ErrorCode =>
  HTTP_STATUS_ERROR_CODES[statusCode] ?? ErrorCode.INTERNAL_SERVER_ERROR

export const isErrorCode = (value: unknown): value is ErrorCode =>
  typeof value === 'string' && ERROR_CODES.has(value)
