export type EnvSource = Record<string, string | undefined>

function defaultEnv(): EnvSource {
  return (globalThis as { process?: { env?: EnvSource } }).process?.env ?? {}
}

export function readOptionalEnv(
  name: string,
  env: EnvSource = defaultEnv(),
): string | undefined {
  const value = env[name]?.trim()
  return value ? value : undefined
}

export function readRequiredEnv(
  name: string,
  env: EnvSource = defaultEnv(),
): string {
  const value = readOptionalEnv(name, env)
  if (!value) {
    throw new Error(`${name} environment variable is required`)
  }
  return value
}
