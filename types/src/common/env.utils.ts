export type EnvSource = Record<string, string | undefined>

declare const process: { readonly env: EnvSource }

export function readOptionalEnv(
  name: string,
  env: EnvSource = process.env,
): string | undefined {
  const value = env[name]?.trim()
  return value ? value : undefined
}

export function readRequiredEnv(
  name: string,
  env: EnvSource = process.env,
): string {
  const value = readOptionalEnv(name, env)
  if (!value) {
    throw new Error(`${name} environment variable is required`)
  }
  return value
}
