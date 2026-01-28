#!/bin/bash
echo "pipeline"


echo "Démarrage du script de pipeline"

echo "Installation des dépendances avec pnpm"
pnpm install

echo "Dépendances installées"

echo "Type-checking"

pnpm nuxt typecheck