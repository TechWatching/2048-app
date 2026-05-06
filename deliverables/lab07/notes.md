# Notes TP7 — Infrastructure as Code avec Pulumi

## Concepts retenus

### Infrastructure as Code (IaC)
Au lieu de créer les ressources Azure à la main (portail ou CLI), on les décrit dans du code. Pulumi lit ce code et crée/modifie/supprime les ressources en conséquence.

Avantages :
- **Reproductible** : une commande recrée exactement la même infra
- **Déclaratif** : on décrit l'état final voulu, Pulumi calcule ce qu'il faut faire

### Commandes essentielles


`pulumi new` : Initialiser un nouveau projet 
`pulumi up` : Déployer / appliquer les changements 
`pulumi preview` : Voir ce qui va changer sans appliquer 
`pulumi stack output` : Voir les outputs de la stack 
`pulumi stack output --show-secrets` : Voir les outputs dont les secrets 
`pulumi stack --show-urns` : Lister toutes les ressources avec leur URN 


### Outputs
Un output Pulumi = une valeur produite par une ressource qu'on veut rendre visible après déploiement.


### Secrets
`pulumi.secret(...)` marque une valeur comme secrète :
- Encryptée dans l'état Pulumi
- Masquée dans les logs (`[secret]`)
- Visible uniquement avec `--show-secrets`

```typescript
export const deploymentToken = pulumi.secret(
  secrets.apply(s => s.properties.apiKey)
);
```

### Interpolation dynamique
`pulumi.getStack()` retourne le nom de la stack courante. Utilisé pour nommer les ressources dynamiquement :

```typescript
const environment = pulumi.getStack(); 
name: pulumi.interpolate`stapp-2048-app-${environment}`

```

---

## Ce qu'on a produit

```
En exécutant pulumi up sur le fichier index.ts, Pulumi a créé une Azure Static Web App nommée stapp-2048-app-dev avec un plan Free, hébergée dans la région eastus2 et taguée Class=EI8IT213, accessible à l'URL white-plant-0ff83b40f.7.azurestaticapps.net. La stack expose trois outputs : l'hostname (URL publique), le deploymentToken (token CI/CD stocké en secret) et le resourceGroupName.
```

---

## Difficultés rencontrées

### 1. `pulumi: command not found` après installation
**Cause** : Pulumi s'installe et ajoute son chemin dans `.bashrc`, mais mon terminal actuel ne l'a pas encore pris en compte.

**Solution** :
```bash
source ~/.bashrc
```

### 2. Organisation `teachingiac` introuvable
**Cause** : j'avais pas encore accepter L'invitation du prof à l'organisation Pulumi;

**Solution** : Vérifier les emails, accepter l'invitation sur app.pulumi.com. En attendant, j'ai créé la stack dans l'organisation personnelle `knajmedd`.

### 3. Dossier `infra/` non vide lors du `pulumi new`
**Cause** : Une première tentative avait laissé des fichiers cachés (`.gitignore`, etc.).

**Solution** :
```bash
rm -rf ~/genie-logiciel/2048-app/infra/.[!.]*
```

### 4. Erreur 401 `InvalidAuthenticationTokenTenant`
**Cause** : Pulumi essayait de supprimer un ancien resource group `rg-lab7` qui appartenait au mon propre tenant étudiant, alors que j'étais connecté au tenant du prof.

**Solution** : Supprimer la ressource fantôme de l'état Pulumi sans toucher Azure :
```bash
pulumi state delete "urn:pulumi:dev::khaoula-najmeddineLab7-vue-2048::azure-native:resources:ResourceGroup::rg-lab7"
```


### 5. Connexion au mauvais tenant Azure
**Cause** : La souscription étudiante n'avait pas les permissions pour créer des ressources.

**Solution** : Se connecter au tenant du prof avec :
```bash
az login --tenant d0cf1ed1-5a50-4a79-8afb-e642a3308fd1
```

