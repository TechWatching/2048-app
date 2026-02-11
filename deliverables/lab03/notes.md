Lab 3 : Mise en place d'une Pipeline CI/CD

## Fonctionnalités de la Pipeline
La pipeline fait dans `.github/workflows/pipeline.yml` réalise les actions suivantes :
- **Déclenchements automatisés** : 
    - À chaque push sur `main`, `lab2`, `lab3` ou les branches `feature/*`.
    - Une exécution planifiée tous les jours à 8h00.
- **Optimisation du temps de run** : placement d'un système de cache pour pnpm afin d'éviter de réinstaller toutes les dépendances à chaque exécution.
- **Validation du code** : Exécution du script `pipelines/script.sh` qui englobe le Linting, le Typecheck et les Tests unitaires.
- **Vérification du Build** : Test -d et -f pour confirmer la présence du dossier `.output/` et du fichier serveur `index.mjs`.
- **Gestion des Artifacts** : Archivage du package de production pendant 7 jours sur GitHub.

## Difficultés rencontrées & Solutions

* **Problème 1** : Au début, la pipeline échouait avec une erreur `Cannot find module '@oxc-parser/binding-linux-x64-gnu'`.
* **Solution** : Ce problème était dû à une mauvaise installation de `pnpm` en global via npm. La solution a été d'utiliser l'action `pnpm/action-setup` et de configurer correctement le cache Node.js pour restaurer les binaires. Et aussi, j'ai rencontré des problèmes sur les bonnes versions à installer pour pnpm


* **Problème 2** : Lors de la mise en place de l'archivage, l'erreur suivante est apparue :
**No files were found with the provided path: .output/. No artifacts will be uploaded.**
Le problème est du au mal emplacement du chemin du fichier index.mjs dans **path**.
**avant** : **path**: .output
**après** : **path**: .output/server/index.mjs