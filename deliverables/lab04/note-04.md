# TP4 - Notes

## Difficultes rencontrees
- Comprendre les conditions if selon le trigger (push, pull_request, workflow_dispatch).
- Bien organiser les jobs avec needs pour garder le build avant les checks.
- Choisir les bons triggers et les paths-ignore pour docs/.
- Gérer la retention des artifacts avec une expression conditionnelle.
- Ajouter les inputs du workflow_dispatch sans erreur de syntaxe.

## Ce que j ai appris
- Utiliser les triggers GitHub Actions et limiter l execution avec paths-ignore.
- Parallelliser lint, typecheck et tests avec needs.
- Mettre en place le cache pnpm pour accelerer les runs.
- Utiliser des variables globales (NODE_VERSION) dans le workflow.
- Publier un artifact avec une retention differente selon la branche.
- Simuler un deploiement manuel avec un input d environnement.
