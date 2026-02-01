# Restaurant App – Mini-Projet Angular (Maison Gusté)

## 1️⃣ Contexte
Ce mini-projet s’inscrit dans le cadre de l’apprentissage du framework Angular.  
Il a pour objectif de créer une application web permettant aux utilisateurs de consulter les plats du restaurant *Maison Gusté*, voir les détails d’un plat, explorer les cuisines et passer une commande simple (sans paiement en ligne).  
La maquette met également en avant le design, les couleurs et la navigation fluide de l’application.

---

## 2️⃣ Objectifs du projet

### Fonctionnels
- Page d’accueil : présentation cinématique du restaurant, logo et bouton « Explore Our Menu »
- Menu : liste des plats avec images, nom, prix et filtres (nom, nationalité, prix)
- Détails d’un plat : description complète, ingrédients, image et bouton « Commander »
- Formulaire de commande : étapes de sélection de quantité, informations client et confirmation
- About : présentation du restaurant et informations complémentaires

### Techniques
- Architecture Angular modulaire (composants, services, routing)
- Gestion centralisée des données via services Angular
- Utilisation de data binding et directives Angular (*ngFor, *ngIf…)

### UX/UI
- Interface élégante, simple, intuitive et responsive
- Navigation fluide entre les pages
- Parcours utilisateur guidé avec flèches et interactions claires
- Couleurs et polices harmonisées avec la charte graphique

---

## 3️⃣ Analyse technique

### Composants
| Composant | Description |
|-----------|------------|
| HomeComponent | Page d’accueil avec présentation cinématique, best dishes, catégories et navbar |
| MenuComponent | Affichage de tous les plats avec cartes et filtres |
| DishDetailsComponent | Affichage des détails d’un plat et bouton Commander |
| OrderComponent | Formulaire de commande par étapes avec résumé de commande |
| AboutComponent | Présentation du restaurant et informations complémentaires |

### Services
| Service | Description |
|---------|------------|
| DishService | Fournit la liste des plats et les détails |
| OrderService | Gère les plats ajoutés à la commande et le total |

### Routing
- `/` → Home  
- `/menu` → Menu  
- `/dish/:id` → Détails d’un plat  
- `/order` → Formulaire de commande  
- `/about` → About

### Diagramme de navigation
- [Home] --> [Menu] --> [DishDetails] --> [Order]  
- [Menu] --> [Order] (via bouton "Ajouter")  
- [DishDetails] --> [Order] (via bouton "Commander")  
- [Explore Cuisines] dans Home --> [Menu] filtré

---

## 4️⃣ Outils et technologies
- **Angular CLI** : création projet et composants  
- **VS Code** : éditeur de code  
- **Bootstrap** : design simple, responsive et moderne  
- **Git/GitHub** : versionning et partage  
- **Node.js & npm** : gestion des packages  
- **Canva** : conception des maquettes UI avec couleurs et polices

---

## 5️⃣ Risques et solutions
| Risque | Solution |
|--------|---------|
| Perte de données commande | Garder les données dans le service tant que l’application tourne |
| Trop de dépendances | Limiter aux outils nécessaires (Angular + Bootstrap) |
| Manque de temps | Commencer par UI simple, puis ajouter fonctionnalités et interactions |

---

## 6️⃣ Structure du projet

```
restaurant-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── menu/
│   │   │   ├── dish-details/
│   │   │   ├── order/
│   │   │   └── about/
│   │   ├── services/
│   │   │   ├── dish.service.ts
│   │   │   └── order.service.ts
│   │   └── models/
│   │       └── dish.model.ts
│   └── assets/
│       └── images des plats
└── README.md
```

---

## 🔧 Instructions pour exécuter le projet
1. Cloner le dépôt :  
```bash
git clone https://github.com/lailamarzouki40-cpu/Restaurent-angular.git
cd Restaurent-angular

```
2. Installer les dépendances :
```bash
npm install
```
3. Lancer le serveur Angular :
```bash
ng serve
```
4. Ouvrir dans le navigateur : http://localhost:4200

---

## 7️⃣ Conclusion

Ce projet permet de mettre en pratique les concepts fondamentaux d’Angular tout en développant une application fonctionnelle et modulable avec un parcours utilisateur clair.  
Il peut être étendu à l’avenir pour intégrer un backend réel, un système de paiement ou un catalogue de plats plus complet, tout en conservant un design élégant et des interactions fluides.

