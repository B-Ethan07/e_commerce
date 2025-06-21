# 🛒 Mini E-Commerce

Une application web front-end simple développée dans le cadre d’un projet de cours, utilisant :

- ☁️ Une API REST publique ([DummyJSON](https://dummyjson.com/products))
- 🔄 Navigation paramétrée (`?id=...`)
- 📱 Mise en page responsive avec Bootstrap 5

---

## 🚀 Fonctionnalités

- Page d’accueil : liste de produits avec **image**, **titre**, **marque**, **prix**, **note**, **catégorie**
- Page détail produit : **images**, **description**, **stock**, **livraison**, **avis clients**
- Ajout au panier (front-end uniquement)
- Retour vers l’accueil
- Comportement **responsive** sur mobile et desktop
- **Page produit dynamique** (via `product.html?id=XX`)
- **Ajout au panier** à partir de la fiche produit
- **Page panier (`myCart.html`)**
  - Affiche dynamiquement les produits ajoutés
  - Mise à jour automatique du prix total
- **Résumé de commande** (total, taxes, livraison)
- **Code promo** (affichage uniquement si panier non vide)
- **Responsive mobile**
- Message affiché quand le panier est vide

---

## 🧰 Tech Stack

- HTML5, CSS3, Bootstrap 5
- JavaScript (ES6+)
- jQuery
- API DummyJSON pour les données produit

---

## ⚙️ Installation & utilisation

- Cloner le dépôt :
git clone https://github.com/B-Ethan07/e_commerce.git
- Ouvrir le projet localement avec un navigateur ou une extension comme Live Server
- Visiter index.html pour afficher les produits, puis cliquer sur un produit pour accéder à sa page de détails (details.html?id=1)

---

## ⚙️ Page déployer avec GitHub

https://b-ethan07.github.io/e_commerce/
