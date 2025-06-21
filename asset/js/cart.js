$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const newCartId = params.get('id');

    async function chargerCart() {
        try {
            const response = await fetch(`https://dummyjson.com/products/${newCartId}`);
            if (!response.ok) {
                throw new Error("Erreur HTTP : " + response.status);
            }

            const buy = await response.json();
            addCart(buy);
        } catch (error) {
            console.error("Erreur lors du fetch :", error);
        }
    }

    function addCart(buy) {
        $("#items-shopping").empty();

        $("#items-shopping").append(`
            <div class="card card-item mb-4">
                <div class="card-body">
                    <div class="row cart-item mb-3">
                        <div class="col-md-3">
                            <img src="${buy.thumbnail}" class="card-img-top" alt="${buy.title}">
                        </div>
                        <div class="col-md-5">
                            <h5 class="card-title">${buy.title}</h5>
                            <p class="text-muted">${buy.brand}</p>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                                <input style="max-width:100px" type="text" class="form-control form-control-sm text-center quantity-input" value="1">
                                <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                            </div>
                        </div>
                        <div class="col-md-2 text-end">
                            <p class="fw-bold">$${buy.price}</p>
                            <button class="btn btn-delete btn-sm btn-outline-danger" title="Supprimer">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        `);

        $(".cart-summary").empty();

        $(".cart-summary").append(`
            <div class="card-body card-order">
                <h5 class="card-title mb-4">Order Summary</h5>
                <div class="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <span>$${buy.price}</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <span>$${buy.shippingPrice || 5.99}</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                    <span>Tax</span>
                    <span>$${buy.tax || 3.50}</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between mb-4">
                    <strong>Total</strong>
                    <strong>$${buy.total || (buy.price + (buy.shippingPrice || 5.99) + (buy.tax || 3.50)).toFixed(2)}</strong>
                </div>
                <button class="btn btnHover2 w-100">Proceed to Checkout</button>
            </div>
        `);
         $(".promo-code").empty();

        $(".promo-code").append(`
            <div class="card-body card-promo">
                    <h5 class="card-title mb-3">Apply Promo Code</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter promo code">
                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                    </div>
                </div>
        `);
    }



    // Appel final
    chargerCart();
});