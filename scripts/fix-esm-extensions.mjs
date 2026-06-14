// Shared post-build step for the dual-output packages (types, emails):
// appends .js to extensionless relative imports in the ESM output. Runs with
// the package directory as cwd (pnpm runs scripts from the package root).
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const target = resolve(process.cwd(), 'dist', 'esm')

const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) {
      walk(path)
      continue
    }
    if (!path.endsWith('.js') && !path.endsWith('.d.ts')) continue
    const src = readFileSync(path, 'utf8')
    const fixed = src.replace(
      /(from\s+|import\s*\()(['"])(\.\.?\/[^'"]+?)\2/g,
      (match, keyword, quote, spec) => {
        if (/\.[mc]?js$/.test(spec)) return match
        return `${keyword}${quote}${spec}.js${quote}`
      },
    )
    if (fixed !== src) writeFileSync(path, fixed)
  }
}

walk(target)
