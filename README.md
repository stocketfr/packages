# Stocket shared packages

> **Legacy package source — publishing is frozen.** Canonical internal packages moved to [`stocketfr/stocket/packages`](https://github.com/stocketfr/stocket/tree/main/packages) and are private source workspaces, not registry dependencies. This repository preserves the immutable historical releases required by excluded consumers and is scheduled for archive under [`meta#43`](https://github.com/stocketfr/meta/issues/43). Do not publish new `@stocketfr/*` versions or add consumers.

Final frozen compatibility releases are `@stocketfr/types@1.9.0`, `@stocketfr/emails@0.1.0`, `@stocketfr/tsconfig@1.3.2`, and `@stocketfr/eslint-config@1.2.3`. The content below is historical release documentation.

This repository published the shared `@stocketfr/*` packages used by the frontend and backend. Package source remains public, while GitHub Packages provides immutable versions for reproducible cross-repository builds.

## Packages

- `@stocketfr/types` — API contracts, schemas, and shared domain vocabulary
- `@stocketfr/emails` — transactional email templates
- `@stocketfr/tsconfig` — shared TypeScript configuration
- `@stocketfr/eslint-config` — shared lint configuration

## Local authentication

GitHub Packages requires authentication even for public npm packages. Create a classic GitHub token with `read:packages`, expose it as `GITHUB_PACKAGES_TOKEN`, and configure pnpm once:

```sh
pnpm config set --global @stocketfr:registry https://npm.pkg.github.com
pnpm config set --global //npm.pkg.github.com/:_authToken "${GITHUB_PACKAGES_TOKEN}"
```

## Frozen consumer mapping

`stocketfr/mobile-app` intentionally pins `@stocketfr/types@1.8.0` and `@stocketfr/tsconfig@1.3.2` to preserve the exact generated contract surface it previously resolved from sibling workspaces. Version `1.9.0` remains the final published Types release but is not an upgrade target for the frozen mobile consumer.

Release and snapshot workflows have been removed. Historical Changesets and release scripts remain only as provenance and must not be run.
