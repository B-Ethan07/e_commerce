$(document).ready(function () {
    async function chargerProduits() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            const resultat = await response.json(); 

            // Vérifie si l'écran est petit
            if ($(window).width() < 768) {
                afficherProduits(resultat.products); // Sans pagination
            } else {
                lancerPagination(resultat.products); // Avec pagination
            }

        } catch (error) {
            console.error("Erreur lors du fetch :", error);
        }
    }

    function lancerPagination(data) {
        $('#demo').pagination({
            dataSource: data,
            pageSize: 6,
            callback: function(data, pagination) {
                afficherProduits(data);
            }
        });
    }

    function afficherProduits(articles) {
        $("#items-container").empty();
        articles.forEach(article => {
            $("#items-container").append(`
                <div class="col-md-4 mb-4">
                    <div class="card h-100 p-3 mb-5 rounded" id="card">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge " style="background-color:rgb(42, 14, 117)">#${article.tags[0]}</span>
                        </div>
                        <img src="${article.thumbnail}" class="card-img-top" alt="${article.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="text-uppercase">${article.title}</h5>
                            <span class="text-muted text-uppercase">${article.brand}</span>
                            <div class="my-3">
                                <span class="fs-4 fw-bold">${article.price} €</span>
                                <span class="ms-2 text-warning">${article.rating} ★</span>
                            </div>
                            <a href="details.html?id=${article.id}" class="btn mt-auto btnHover"  >Voir les détails</a>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    chargerProduits();

    // Optionnel : Recharger si on redimensionne la fenêtre
    $(window).resize(function () {
        location.reload();
    });
});
