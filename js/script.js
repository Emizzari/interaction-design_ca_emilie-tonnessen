// MAIN JAVASCRIPT SCRIPT

// JS FOR CART AND PRODUCTS----------------------------------------
// Variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-centre");

// cart
let cart = [];

// getting the products
const shoesContainer = document.querySelector(".products-center");

let newHTML = "";

shoes.forEach(function (shoe) {

    newHTML += `
            <!-- Single product -->
            <a href="details.html?id=${shoe.id}">
                <article class="product">
                    <div class="img-container">
                        <img class="product-img" src="${shoe.imageUrl}" alt="${shoe.name}">
                        <button class="bag-btn" data-id="${shoe.id}">
                            <i class="fas fa-shopping-bag"></i>
                            details
                        </button>
                    </div>
                    <h3>${shoe.name}</h3>
                    <h4>NOK ${shoe.price}</h4>
                </article>
            </a>
            <!-- End of single product -->
        `;
});

shoesContainer.innerHTML = newHTML;




// local storage
class Storage {
    static saveProduct(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    // get all products
    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProduct(products);
    });
    
});



// End of carts and products -----------------------------------------




