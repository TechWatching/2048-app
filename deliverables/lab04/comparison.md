# Comparison - GitHub Actions vs GitLab CI

## Syntaxe
- GitHub Actions: workflows avec jobs/steps en YAML.
- GitLab CI: jobs par stages, rules pour declencher, needs pour parallele.

## Triggers / Rules
- GitHub Actions: on: push, pull_request, workflow_dispatch, schedule.
- GitLab CI: workflow:rules + rules par job, CI_PIPELINE_SOURCE.

## Jobs vs Stages
- GitHub Actions: jobs independants, needs pour dependances.
- GitLab CI: stages definissent l ordre, needs accelere l execution parallele.

## Artifacts
- GitHub Actions: actions/upload-artifact, retention-days.
- GitLab CI: artifacts: paths + expire_in.

## Cache
- GitHub Actions: setup-node cache: pnpm.
- GitLab CI: cache paths (pnpm store, node_modules).

## Variables
- GitHub Actions: env + inputs workflow_dispatch.
- GitLab CI: variables globales + variables a l execution (web).

## Schedule / Manuel
- GitHub Actions: schedule et workflow_dispatch dans le YAML.
- GitLab CI: schedule configure dans l UI, manuel via pipeline web + variables.

## Secrets / Permissions
- GitHub Actions: secrets + permissions par workflow/job.
- GitLab CI: CI/CD variables + protection par environnements/branches.
