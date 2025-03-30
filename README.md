
Voici le README mis à jour de notre projet **Spaced Repetition**. Ce projet est une application de mémorisation basée sur la répétition espacée. Elle permet de créer, modifier, déplacer et réviser des cartes réparties par thèmes et niveaux. L'application fonctionne hors-ligne et offre une interface responsive adaptée à la fois aux mobiles et aux desktops.

---

## 1. Fonctionnalités

### 1.1 Gestion des Thèmes et des Cartes

- **Thèmes / Catégories :**
  - Les utilisateurs peuvent ajouter de nouveaux thèmes.
  - Chaque thème peut être modifié ou supprimé via une modale d’édition (bouton ✏️ à côté du nom du thème).

- **Cartes de Révision :**
  - Chaque thème comprend jusqu’à 6 niveaux avec des intervalles de répétition croissants.
  - Une carte peut contenir du texte et/ou des images (les images s'affichent grâce à l’API `URL.createObjectURL()` pour un aperçu).
  - Les utilisateurs peuvent ajouter de nouvelles cartes via un formulaire dédié.
  - **Edition & Déplacement :**
    - Depuis la page de révision, chaque carte intègre un bouton d’édition (✏️) qui ouvre une modale permettant de modifier le contenu (front et back), de déplacer la carte manuellement vers un autre niveau, ou de la supprimer.

### 1.2 Répétition Espacée et Révision

- **Révision :**
  - Dans la page "Today’s Test", les cartes à réviser sont affichées.
  - Si l'utilisateur clique sur **"Trouvé!"**, la carte passe deux niveaux plus haut (déplacement effectif dans le système).
  - Si l'utilisateur clique sur **"Mince!"**, la carte recule d’un niveau.
  - Ces déplacements se reflètent sur la page de révision et dans la vue détaillée d’un thème.

### 1.3 Interface Responsive

- Utilisation de **Tailwind CSS** pour garantir une interface claire et adaptée aux mobiles et aux desktops.
- Les niveaux de chaque thème sont affichés sous forme de liens cliquables indiquant le nombre de cartes présentes.

### 1.4 Fonctionnement Hors-Ligne

- **Service Worker :**  
  Le fichier `public/service-worker.js` met en cache les ressources essentielles pour permettre l’utilisation de l’application même sans connexion Internet.
- **Manifest :**  
  Le fichier `public/manifest.json` permet d’installer l’application en tant que Progressive Web App (PWA).

---

## 2. Installation et Déploiement

### 2.1 Prérequis

- Node.js (version LTS recommandée)
- npm ou yarn

### 2.2 Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/spaced-repetition.git
   cd spaced-repetition
Installer les dépendances :
npm install
# ou
yarn install
2.3 Lancement en Mode Développement
npm run dev
# ou
yarn dev
L’application sera accessible via http://localhost:3000.

2.4 Construction pour la Production
npm run build
# ou
yarn build
3. Utilisation
3.1 Page Principale (SpacedRepetition)
Affichage des Thèmes :

Affiche la liste complète des thèmes, avec pour chaque thème ses niveaux et le nombre de cartes dans chaque niveau.

Chaque thème propose un lien "View Cards" pour consulter les cartes et un bouton d’édition (✏️) pour modifier ou supprimer le thème via une modale.

Un bouton "Add New Theme" permet d’ajouter un nouveau thème via une modale dédiée.

3.2 Page du Thème (ThemePage)
Affichage des Cartes :

Les cartes du thème sont regroupées par niveaux.

Un bouton "Add New Card" ouvre une modale pour ajouter une nouvelle carte.

3.3 Page de Révision (Review)
Révision des Cartes :

Affiche les cartes dues à la révision.

"Trouvé!" : la carte passe deux niveaux plus haut.

"Mince!" : la carte recule d’un niveau.

Chaque carte inclut un bouton d’édition (✏️) qui ouvre une modale permettant de modifier le contenu, de déplacer la carte manuellement vers un autre niveau ou de la supprimer.

4. Architecture et Organisation du Code
4.1 Framework et Style
React pour la création de l’application.

Tailwind CSS pour le style et la responsivité.

4.2 Navigation
React Router gère la navigation entre les pages (SpacedRepetition, ThemePage, Review, etc.).

4.3 Gestion des Données
Le contexte LeitnerContext centralise la gestion des thèmes, des niveaux et des cartes.

Ce contexte fournit également toutes les fonctions d’ajout, de mise à jour, de suppression, de déplacement et de révision des cartes et des thèmes.

4.4 Composants Clés
Card.jsx : Affichage basique d’une carte.

ReviewCard.jsx : Affichage d’une carte dans la page de révision avec boutons de révision et d’édition.

AddCardFormPage.jsx : Formulaire pour ajouter une nouvelle carte.

AddThemeFormPage.jsx : Formulaire pour ajouter un nouveau thème.

EditCardModal.jsx : Modale pour éditer, déplacer ou supprimer une carte.

EditThemeModal.jsx : Modale pour éditer ou supprimer un thème.

5. Fonctionnalités Hors-Ligne
Service Worker :
Le fichier public/service-worker.js met en cache les ressources essentielles pour assurer le fonctionnement de l’application sans connexion.

Manifest :
Le fichier public/manifest.json contient les métadonnées nécessaires pour installer l’application en tant que PWA.

6. Modales et Edition
6.1 Edition de Carte
Dans la page de révision, chaque carte possède un bouton d’édition (✏️) qui ouvre la modale EditCardModal.jsx.

La modale permet à l’utilisateur de :

Modifier le contenu de la carte (front et back).

Déplacer manuellement la carte vers un autre niveau (via un sélecteur).

Supprimer la carte.

6.2 Edition de Thème
Dans la page principale, chaque thème dispose d’un bouton d’édition (✏️) qui ouvre la modale EditThemeModal.jsx.

Cette modale permet à l’utilisateur de modifier le nom du thème ou de le supprimer.

