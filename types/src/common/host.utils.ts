import { readOptionalEnv, type EnvSource } from './env.utils'

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1'])

export function firstHeaderValue(
  value: string | null | undefined,
): string | undefined {
  const first = value?.split(',')[0]?.trim()
  return first && first.length > 0 ? first : undefined
}

function stripPort(host: string): string {
  if (host.startsWith('[')) {
    const closingBracketIndex = host.indexOf(']')
    return closingBracketIndex >= 0 ? host.slice(1, closingBracketIndex) : host
  }

  const colonCount = (host.match(/:/g) ?? []).length
  if (colonCount === 1) {
    return host.slice(0, host.indexOf(':'))
  }

  return host
}

export function normalizeHost(value: string | null | undefined): string | null {
  const raw = firstHeaderValue(value)
  if (!raw) {
    return null
  }

  const normalized = stripPort(raw).toLowerCase().replace(/\.+$/, '')
  return normalized.length > 0 ? normalized : null
}

export function isLocalHostname(value: string | null | undefined): boolean {
  const hostname = normalizeHost(value)
  return (
    hostname !== null &&
    (LOCAL_HOSTNAMES.has(hostname) || hostname.endsWith('.localhost'))
  )
}

export function readRequiredHostEnv(name: string, env?: EnvSource): string {
  const value = normalizeHost(readOptionalEnv(name, env))
  if (!value) {
    throw new Error(`${name} environment variable is required`)
  }
  return value
}
