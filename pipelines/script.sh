#!/bin/bash
echo "pipeline"
echo "Démarrage du script de pipeline"


echo "Installation des dépendances avec pnpm"
pnpm install
echo "Dépendances installées"


echo "Type-checking"
pnpm typecheck


echo "Analyse Statique"
pnpm lint


echo "Packaging (Production)"
echo "Cette étape crée le dossier .output"
pnpm build


echo "Exécution de test unitaire"
pnpm vitest run


echo "Construction du package (Production)"
pnpm build