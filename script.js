$(document).ready(function () {
    async function chargerProduits() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            const resultat = await response.json(); 
            lancerPagination(resultat.products); 
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
                    <div class="card h-100 shadow-sm p-3 mb-5 bg-white rounded">
                    <p class="card-text mt-2">#${article.tags[0]} </p>
                        <img src="${article.thumbnail}" class="card-img-top" alt="${article.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">Marque : ${article.brand}</p>
                            <p class="card-text">Rating : ${article.rating}/5</p>
                            <p class="card-text">Prix : ${article.price} €</p>
                            
                            <a href="details.html?id=${article.id}" class="btn btn-outline-primary mt-auto">Voir les détails</a>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    chargerProduits();
});
