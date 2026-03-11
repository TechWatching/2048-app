# GitLab CI - Lab 4 (Pour aller plus loin)

## Fichier
- .gitlab-ci.yml

## Stages
- build: installe les dependances et construit l application.
- check: lint, typecheck, tests (en parallele apres build).
- deploy: deploy manuel.

## Triggers (rules + workflow)
- push sur lab4
- merge request vers lab4
- pipeline manuel (web)
- schedule (a configurer dans l interface GitLab)
- pas de pipeline si seuls des fichiers docs/** changent (rules:changes liste de chemins non-docs).

## Cache
- pnpm store + node_modules via cache GitLab.
- cle de cache: pnpm-${CI_COMMIT_REF_SLUG}.

## Artifacts
- build produit .output/ et dist/.
- expire_in par variable ARTIFACT_TTL.
- 7 jours pour main ou lab4, sinon 1 jour.

## Needs
- lint, typecheck, test dependent de build pour parallele apres build.

## Variables
- NODE_VERSION: 20
- PNPM_VERSION: 10.28.2
- RUN_CHECKS: true (pipeline manuel)
- ENVIRONMENT: QA (pipeline manuel)
- ARTIFACT_TTL: 1 day (surchargee par rules)

## Deploy
- job deploy declenche seulement quand CI_PIPELINE_SOURCE == web.
- affiche: Deploying to $ENVIRONMENT.
