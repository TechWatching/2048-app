# Fonctionnement du script

Voici comment fonctionne le script, étape par étape :
Il suit une progression logique, en partant des tâches les plus simples pour aller vers les plus complexes. D'abord, il installe les dépendances avec `pnpm install`. Ensuite, il vérifie la qualité du code grâce à ESLint, puis s'assure de la cohérence des types avec TypeScript. Une fois ces vérifications passées, il lance les tests unitaires pour valider la logique de l'application. Enfin, et seulement si tout s'est bien déroulé jusque-là, il génère le build de production.

---
# Ce que j'ai retenu de cette expérience

Cette expérience m'a permis de prendre conscience de l'importance de l'analyse statique pour repérer les erreurs le plus tôt possible, parfois même avant d'exécuter l'application. J'ai également mieux compris le cycle rouge/vert des tests unitaires et découvert comment Vite génère un bundle optimisé pour la production, dans un dossier spécifique qu'il vaut mieux ne pas versionner.

---
# Difficultés rencontrées

La principale difficulté a été de configurer correctement ESLint et TypeScript afin qu'ils analysent les fichiers `.vue` sans erreur. J'ai aussi rencontré des problèmes de synchronisation avec l'IDE : certaines erreurs restaient affichées alors que le terminal indiquait que tout fonctionnait correctement. Cela m'a appris à redémarrer les services de typage pour résoudre ce type d'incohérence.
