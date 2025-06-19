$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    async function chargerProduit() {
        try {
            const response = await fetch(`https://dummyjson.com/products/${articleId}`);
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            const produit = await response.json(); 
            afficherArticle(produit);
        } catch (error) {
            console.error("Erreur lors du fetch :", error);
        }
    }

    function afficherArticle(article) {
        $("#article-container").empty(); // Tu veux peut-être afficher un seul article ici

            const commentaires = article.reviews && article.reviews.length > 0
        ? article.reviews.map(r =>
            `<p><strong>${r.reviewerName}</strong> : "${r.comment}"</p>`
          ).join('')
        : "<p>Aucun commentaire disponible.</p>";

        $("#article-container").append(`
              

  <div class="card shadow">
    <div class="row g-0">
      <!-- Colonne image -->
      <div class="col-md-6 border-end">
        <div class="p-4 d-flex flex-column align-items-center">
          <img id="main-image" src="${article.images[0]}" class="img-fluid mb-3" style="max-height: 300px;" />

          <div class="d-flex justify-content-center gap-2 flex-wrap">
            ${article.images.map(img => `
              <img onclick="change_image(this)" src="${img}" width="70" class="img-thumbnail" style="cursor:pointer;">
            `).join('')}
          </div>

          <p class="mt-4"><strong>${article.availabilityStatus}</strong> : ${article.stock}</p>
          <p>Livraison : ${article.shippingInformation}</p>
        </div>
      </div>

      <!-- Colonne infos produit -->
      <div class="col-md-6">
        <div class="p-4 d-flex flex-column justify-content-between h-100">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <a href="index.html" class="btn btn-sm btn-outline-secondary">← Retour</a>
              <i class="fa fa-shopping-cart text-muted"></i>
            </div>

            <h5 class="text-uppercase">${article.title}</h5>
            <span class="text-muted text-uppercase">${article.brand}</span>

            <div class="my-3">
              <span class="fs-4 fw-bold">${article.price} €</span>
              <span class="ms-2 text-warning">${article.rating} ★</span>
            </div>

            <p class="text-muted">${article.description}</p>
          </div>

          <div>
            <h6 class="mt-4">Commentaires :</h6>
            <div class="reviews">
              ${commentaires}
            </div>

            <div class="mt-4 d-flex align-items-center gap-3">
              <button class="btn btn-primary text-uppercase px-4">Ajouter au panier</button>
              <i class="fa fa-heart text-muted fs-5"></i>
              <i class="fa fa-share-alt text-muted fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `);
    }

    chargerProduit();
});



