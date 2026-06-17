# Notes - Lab 04

## Leçons à retenir 

1. Un pipeline CI/CD doit être pensé par type d'événement (`push`, `PR`, manuel), pas comme un flux unique.
2. La séparation en jobs (`build`, qualité, tests, déploiement) rend le diagnostic plus simple et la maintenance plus claire.
3. Le parallélisme réduit le temps total d'exécution, mais il faut bien définir les dépendances entre jobs.
4. Les conditions d'exécution permettent d'éviter les runs inutiles et d'adapter le comportement au contexte.
5. Le cache des dépendances est un levier important pour accélérer les pipelines et réduire les coûts.
6. Les artifacts doivent être gérés comme des livrables temporaires avec une rétention adaptée à l'usage.
7. Les variables globales (ex. : version Node) centralisent la configuration et limitent les incohérences.
8. Le déclenchement manuel avec des inputs transforme le pipeline en outil opérable par l'équipe.
9. Les inputs doivent être contraints (type, choix) pour limiter les erreurs de saisie.
10. Le déploiement doit être strictement contrôlé par des conditions explicites pour limiter les risques.

