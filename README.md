# Spaced Repetition

Cette application de mémorisation repose sur le principe de la répétition espacée. Elle permet aux utilisateurs de réviser des cartes de révision organisées par thèmes. L'application fonctionne hors-ligne grâce à l'intégration d'un Service Worker et d'un fichier MANIFEST, et offre une expérience responsive adaptée aux mobiles et aux desktops.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Installation et déploiement](#installation-et-déploiement)
- [Utilisation](#utilisation)
- [Architecture et organisation du code](#architecture-et-organisation-du-code)
- [Fonctionnalités hors-ligne](#fonctionnalités-hors-ligne)

## Fonctionnalités

1. **Création et gestion de thèmes et cartes**  
   - **Thèmes :**  
     Les thèmes de révision sont gérés via un contexte centralisé (`LeitnerContext`) et affichés dans une page dédiée.  
   - **Cartes de révision :**  
     Chaque thème contient des cartes. Les cartes peuvent être créées via un formulaire, avec du texte ou des images.  
     Lors de l'upload, un aperçu de l'image est généré grâce à l'API `URL.createObjectURL()`.

2. **Répétition espacée**  
   - L'application gère la révision des cartes en fonction d'intervalles de répétition espacée.  
   - Les réponses correctes et incorrectes ajustent le niveau des cartes, et la fonction `startReview` permet de récupérer les cartes dues pour la révision.

3. **Fonctionnement hors-ligne**  
   - **Service Worker :**  
     Un fichier `public/service-worker.js` met en cache les ressources essentielles pour permettre l'utilisation de l'application sans connexion Internet.
   - **Manifest :**  
     Le fichier `public/manifest.json` permet d'installer l'application en tant que Progressive Web App (PWA).

4. **Responsive Design**  
   - L'application utilise **Tailwind CSS** et des classes responsives pour s'adapter aux différents formats d'écran (mobile et desktop).

## Installation et déploiement

### Prérequis

- Node.js (version LTS recommandée)
- npm ou yarn

### Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/spaced-repetition.git
   cd spaced-repetition
