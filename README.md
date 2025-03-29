Spaced Repetition
Cette application de mémorisation repose sur le principe de la répétition espacée. Elle permet aux utilisateurs de réviser des cartes de révision organisées par thèmes. L'application fonctionne hors-ligne grâce à l'intégration d'un Service Worker et d'un fichier MANIFEST, et offre une expérience responsive adaptée aux mobiles et aux desktops.

Table des matières
Fonctionnalités

Installation et déploiement

Utilisation

Architecture et organisation du code

Fonctionnalités hors-ligne

Fonctionnalités
Création et gestion de thèmes et cartes

Thèmes :
Les thèmes de révision sont gérés via un contexte centralisé (LeitnerContext) et affichés dans une page dédiée.

Cartes de révision :
Chaque thème contient des cartes. Les cartes peuvent être créées via un formulaire, avec du texte ou des images (les images sont gérées via un aperçu local grâce à l'API URL.createObjectURL()).

Répétition espacée

L'application gère la révision des cartes en fonction d'intervalles de répétition espacée.

Les réponses correctes et incorrectes ajustent le niveau des cartes, et une fonction dédiée (startReview) permet de récupérer les cartes dues pour la révision.

Fonctionnement hors-ligne

Service Worker :
Un fichier public/service-worker.js met en cache les ressources essentielles pour permettre l'utilisation de l'application sans connexion Internet.

Manifest :
Le fichier public/manifest.json permet d'installer l'application en tant que Progressive Web App (PWA).

Responsive Design

L'application utilise Tailwind CSS et des classes responsives pour s'adapter aux différents formats d'écran (mobile et desktop).

Installation et déploiement
Prérequis
Node.js (version LTS recommandée)

npm ou yarn

Installation
Clonez le dépôt :

bash
Copier
git clone https://github.com/votre-utilisateur/spaced-repetition.git
cd spaced-repetition
Installez les dépendances :

bash
Copier
npm install
# ou
yarn install
Lancement en mode développement
bash
Copier
npm run dev
# ou
yarn dev
L'application sera accessible via http://localhost:3000.

Construction pour la production
bash
Copier
npm run build
# ou
yarn build
Utilisation
Création de cartes :
Utilisez le formulaire d'ajout de carte pour créer des cartes avec du texte ou des images. Lors de l'upload, un aperçu de l'image est généré et affiché dans la carte.

Révision :
Sélectionnez un thème et lancez la révision. Les cartes sont affichées en fonction de leur date de révision et de leur niveau. En répondant correctement ou incorrectement, le niveau de la carte est mis à jour.

Architecture et organisation du code
Framework :
L'application est développée en React.

Style :
Utilisation de Tailwind CSS pour la gestion du style et la responsivité.

Navigation :
La navigation est assurée par React Router.

Gestion des données :
Le contexte LeitnerContext centralise la gestion des thèmes, niveaux et cartes, ainsi que les fonctions de révision (correctAnswer, wrongAnswer, startReview).

Composants :
Le code est organisé en plusieurs composants réutilisables (par exemple, Card, ReviewCard, AddCardFormPage, etc.), facilitant ainsi la maintenance et l'extension de l'application.

Fonctionnalités hors-ligne
Service Worker :
Le fichier public/service-worker.js met en cache les fichiers essentiels pour permettre à l'application de fonctionner en mode hors-ligne.

Manifest :
Le fichier public/manifest.json définit les métadonnées de l'application pour l'installation en tant que PWA.

