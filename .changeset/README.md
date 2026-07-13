# Changesets

Add one Markdown file in this directory for every change that should publish a shared package. Use `pnpm changeset` to select packages, semantic-version bumps, and release notes.

Package pull requests publish snapshot versions for cross-repository testing. Merges to `main` are collected into a version pull request; merging that release pull request publishes stable versions to GitHub Packages.
