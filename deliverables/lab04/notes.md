# Rendu Lab4

## Ce que j'ai retenu

- Un workflow GitHub Actions peut se déclencher :
  - À chaque push sur une branche
  - À chaque Pull Request
  - Manuellement avec `workflow_dispatch`

- Les jobs peuvent dépendre les uns des autres grâce à `needs`.
- Le cache (ici pnpm) permet d'accélérer les installations de dépendances.
- Les artifacts servent à conserver des fichiers (ex: build) pour un certain nombre de jours.
- On peut définir des variables d'environnement au niveau du workflow et les réutiliser dans tous les jobs.
- Les conditions (`if`) permettent d'adapter le pipeline selon le type de déclencheur ou les inputs.

## Difficultés rencontrées

- **Lint Nuxt 3** : ESLint dépend d'un fichier `.nuxt/eslint.config.mjs` généré seulement après le build.
  Solution : lancer un `pnpm build` avant le lint.

- **Paramètres manuels** : comprendre l'utilisation de `workflow_dispatch` avec des inputs pour déclencher des jobs spécifiques comme le déploiement, surtout le bouton qui ne s'affiche pas qu'après avoir la branch lab4 comme default branch
