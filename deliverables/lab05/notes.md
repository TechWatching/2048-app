# Rendu Lab5

## Ce que j'ai retenu

- **Vercel** est une plateforme de déploiement qui distingue trois environnements : `production`, `preview` et `development`. Chaque déploiement preview a sa propre URL distincte de l'URL de production.

- Pour intégrer Vercel dans un pipeline CI, il faut trois secrets : `VERCEL_TOKEN`, `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID` ces valeurs sont récupérées depuis l'interface Vercel et stockées dans les repository secrets GitHub.

- L'**intervention humaine avant la production** est assurée via les GitHub Environments : en configurant un `Required reviewer` sur l'environment `Production`, GitHub bloque le job jusqu'à approbation manuelle.

- Le **déploiement de preview** se déclenche automatiquement lors d'une Pull Request grâce à `if: github.event_name == 'pull_request'`. Cela permet de tester une modification dans un environnement isolé avant de la fusionner.

- **Le blue-green deployment** est une stratégie de déploiement qui permet de basculer entre deux versions d'une application sans interruption de service

## Difficultés rencontrées

- **ESLint et fichier généré par Nuxt** : `eslint.config.mjs` importait `.nuxt/eslint.config.mjs`, un fichier généré dynamiquement par Nuxt. Ce fichier n'existait pas en CI, ni avec `nuxi prepare`, ni après `nuxi build`. La solution a été de réécrire `eslint.config.mjs` avec une config qui utilise directement `eslint-plugin-vue` et `@typescript-eslint`, sans dépendre du fichier généré.

- **Artifact non trouvé** : une première approche consistait à partager le répertoire `.nuxt/` via un artifact entre le job `build` et `lint`. Cela échouait car l'artifact n'était pas toujours disponible. La solution finale a été de ne pas dépendre de cet artifact pour le lint.


