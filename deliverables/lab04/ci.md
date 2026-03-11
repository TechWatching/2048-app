# Notes - CI (GitHub Actions)

## Fichier
- .github/workflows/ci.yaml

## Triggers
- push sur lab4
- pull_request vers lab4
- workflow_dispatch avec inputs (run_checks, environment)
- ignore les changements docs/**

## Jobs
- build: pnpm install + pnpm build + artifact (push uniquement)
- lint, typecheck, test: uniquement sur PR ou workflow_dispatch si run_checks=true
- deploy: uniquement sur workflow_dispatch, echo de l environment

## Cache
- setup-node avec cache: pnpm
- pnpm/action-setup pour la version pnpm

## Artifacts
- paths: .output/**, dist/**
- if-no-files-found: warn
- retention-days selon la branche

## Variables
- NODE_VERSION et PNPM_VERSION definies au niveau workflow
- inputs: run_checks (bool) et environment (QA/PROD)
