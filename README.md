# Stocket shared packages

This repository publishes the shared `@stocketfr/*` packages used by the frontend and backend. Package source remains public, while GitHub Packages provides immutable versions for reproducible cross-repository builds.

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

GitHub Actions uses its short-lived `GITHUB_TOKEN`; no long-lived package token is stored in repository secrets.

## Releasing

Run `pnpm changeset` with every publishable change. Package pull requests publish immutable snapshot versions for coordinated consumer testing. After changes merge to `main`, Changesets maintains a version pull request; merging that PR publishes stable packages and GitHub releases.
