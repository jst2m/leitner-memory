
### Fonctionnalités

- **Création et Gestion des Thèmes et Cartes**
  - **Thèmes / Catégories :**  
    - Les utilisateurs peuvent ajouter de nouveaux thèmes.
    - Chaque thème peut être modifié ou supprimé grâce à une modale d’édition (bouton ✏️ à côté du nom du thème).
  - **Cartes de Révision :**  
    - Chaque thème possède plusieurs niveaux (jusqu’à 6 niveaux) avec des intervalles de répétition croissants.
    - Une carte peut contenir du texte et/ou une image (affichage via `URL.createObjectURL()` pour un aperçu).
    - Les cartes peuvent être ajoutées via un formulaire dédié et sont affichées selon leur niveau.

- **Répétition Espacée et Révision**
  - Lors d’une révision (page "Today’s Test"), si l'utilisateur clique sur **"Trouvé!"**, la carte passe deux niveaux plus haut.
  - Si l'utilisateur clique sur **"Mince!"**, la carte recule d’un niveau.
  - Le déplacement de la carte est effectif : elle disparaît du niveau d’origine et apparaît dans le nouveau niveau, visible aussi bien sur la page "Review" que sur la page du thème.

- **Interface Responsive**
  - L’application utilise Tailwind CSS pour s’adapter aux différentes tailles d’écran (mobile et desktop).
  - Les niveaux sont affichés sous forme de liens cliquables qui indiquent le nombre de cartes contenues dans chacun.

- **Fonctionnement Hors-Ligne**
  - Un Service Worker (fichier `public/service-worker.js`) met en cache les ressources essentielles pour que l’application fonctionne sans connexion Internet.
  - Le fichier `public/manifest.json` permet d’installer l’application en tant que Progressive Web App (PWA).

---

### Installation et Déploiement

#### Prérequis

- Node.js (version LTS recommandée)
- npm ou yarn

#### Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/spaced-repetition.git
   cd spaced-repetition
Installez les dépendances :

bash
Copier
npm install
# ou
yarn install
Lancement en Mode Développement
bash
Copier
npm run dev
# ou
yarn dev
L’application sera accessible via http://localhost:3000.

Construction pour la Production
bash
Copier
npm run build
# ou
yarn build
Utilisation
Page Principale (SpacedRepetition) :

Visualisez la liste de tous les thèmes, avec leurs niveaux et le nombre de cartes par niveau.

Pour chaque thème, vous pouvez :

Consulter les cartes via le lien "View Cards".

Modifier ou supprimer le thème en cliquant sur l’icône ✏️ (ce qui ouvre une modale d’édition).

Un bouton "Add New Theme" permet d’ajouter un nouveau thème via une modale dédiée.

Page du Thème (ThemePage) :

Vous pouvez voir toutes les cartes d’un thème, regroupées par niveaux.

Un bouton "Add New Card" permet d’ouvrir une modale pour ajouter une nouvelle carte.

Page de Révision (Review) :

Les cartes dues à la révision sont affichées.

En cliquant sur "Trouvé!", la carte passe deux niveaux plus haut.

En cliquant sur "Mince!", la carte recule d’un niveau.

Chaque carte possède également un bouton d’édition (✏️) pour modifier son contenu, la déplacer manuellement ou la supprimer.

Architecture et Organisation du Code
Framework :
L’application est développée en React.

Style :
Nous utilisons Tailwind CSS pour un style moderne et une responsivité optimale.

Navigation :
La navigation entre les pages est gérée par React Router.

Gestion des Données :
Le contexte LeitnerContext centralise la gestion des thèmes, des niveaux et des cartes.
Il contient aussi toutes les fonctions pour ajouter, mettre à jour, supprimer, et déplacer les cartes et les thèmes.

Composants Principaux :

Card.jsx : Affiche une carte.

ReviewCard.jsx : Affiche une carte avec ses boutons d’édition et de révision.

AddCardFormPage.jsx : Formulaire pour ajouter une nouvelle carte.

AddThemeFormPage.jsx : Formulaire pour ajouter un nouveau thème.

EditThemeModal.jsx : Modale pour éditer ou supprimer un thème.

EditCardModal.jsx : Modale pour éditer, déplacer ou supprimer une carte.

Fonctionnalités Hors-Ligne
Service Worker :
Le fichier public/service-worker.js permet de mettre en cache les ressources essentielles afin d’assurer le fonctionnement de l’application sans connexion Internet.

Manifest :
Le fichier public/manifest.json configure les métadonnées pour l’installation de l’application en tant que Progressive Web App (PWA).

Modales et Édition
Édition de Carte :
Dans la page de révision, chaque carte possède un bouton d’édition (✏️) qui ouvre une modale (EditCardModal.jsx) permettant de :

Modifier le contenu (front et back).

Déplacer la carte en modifiant son niveau.

Supprimer la carte.

Édition de Thème :
Dans la liste des thèmes, chaque thème a un bouton d’édition (✏️) qui ouvre la modale EditThemeModal.jsx pour :

Modifier le nom du thème.

Supprimer le thème.

