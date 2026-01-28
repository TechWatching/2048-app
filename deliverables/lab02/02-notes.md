# TP2 — Notes

## Choix du script
- Script Bash unique dans pipelines/ci.sh.
- Utilisation de pnpm partout (installation et exécution des outils).
- Le script est séquencé et échoue au premier problème (set -euo pipefail).

## Dépendances
- Installation via pnpm install.
- Suppression de node_modules puis réinstallation pour valider le cache pnpm.

## Typage statique
- Installation de vue-tsc.
- Étape de type-checking via pnpm typecheck (vue-tsc --noEmit).
- Nuxt expose aussi nuxt typecheck qui s’appuie sur vue-tsc.

## Analyse statique (ESLint)
- Ajout d’une configuration ESLint (eslint.config.mjs) avec ignores.
- Analyse des fichiers .ts et .vue via pnpm lint.

## Build / Packaging
- Nuxt utilise Vite en interne pour builder.
- Build exécuté avec pnpm nuxt build.
- Pour un livrable exploitable, la sortie statique .output/public est copiée dans publish.
- Le dossier publish est ignoré par Git.

## Tests (Vitest)
- Ajout de Vitest et @vue/test-utils.
- Test unitaire sur Tile : vérifie que la classe bg-amber-100 est appliquée pour la valeur 2.
- Exécution via pnpm test.

## Ce que j’ai appris
- Orchestrer un pipeline CI simple (install → typecheck → lint → build → tests).
- Mettre en place ESLint/Vitest sur un projet Nuxt.
- Comprendre la place de Vite dans le build Nuxt.
