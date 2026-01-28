#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

# 1) Dependencies
# Install, remove node_modules, then reinstall to validate pnpm cache

echo "[1/5] Installing dependencies"
pnpm install

echo "[1/5] Reinstalling dependencies (cache check)"
rm -rf node_modules
pnpm install

# 2) Static type checking

echo "[2/5] Type checking"
pnpm typecheck

# 3) Static analysis

echo "[3/5] Linting"
pnpm lint

# 4) Build package
# Nuxt uses Vite internally; build output is in .output/public

echo "[4/5] Building package"
pnpm nuxt build

if [[ -d ".output/public" ]]; then
  rm -rf publish
  cp -R .output/public publish
fi

# 5) Tests

echo "[5/5] Running tests"
pnpm test

echo "Pipeline completed successfully."
