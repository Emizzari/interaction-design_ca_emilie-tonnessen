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



// local storage
class Storage {

}

document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    // get all products
    products.getProducts().then(data => ui.displayProducts(data));
})



// End of carts and products -----------------------------------------

const url = json.parse(LOCALFILE);

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        productsUI(json);
    })

    .catch(function (error) {
        console.log(error);
    });

function productsUI(json) {
    const results = json.results;

    console.log(results);

    const resultsContainer = document.querySelector(".products-center");

    let newHTML = "";

    // Adding the new HTML code with the propper values:
    results.forEach(function (result) {

        
        newHTML += `
                <!-- Single product -->
                <article class="product">
                    <div class="img-container">
                        <img class="product-img" src="${result.imageUrl}" alt="${result.name}">
                        <button class="bag-btn" data-id="${result.id}">
                            <i class="fas fa-shopping-bag"></i>
                            add to bag
                        </button>
                    </div>
                    <h3>${result.name}</h3>
                    <h4>NOK ${result.price}</h4>
                 </article> 
                 <!-- End of single product -->
            `;
    });

    resultsContainer.innerHTML = newHTML;
}



// getting the products
/*class Products {
    async getProducts() {
        try {
            let result = await fetch("shoes.json");
            let data = await result.json();
            return data;
            /* let products = data.items;
            products = products.map(item => {
                const {title, price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,price,id,image};
            }) 
            return products; *//*
        } catch (error) {
            console.log(error);
        }
    }
}*/

// display products
/*class UI {
    displayProducts(products){
        let result = "";

        products.forEach(data => {
            result += `
                <!-- Single product -->
                <article class="product">
                    <div class="img-container">
                        <img class="product-img" src="${data.imageUrl}" alt="${data.name}">
                        <button class="bag-btn" data-id="${data.id}">
                            <i class="fas fa-shopping-bag"></i>
                            add to bag
                        </button>
                    </div>
                    <h3>${data.name}</h3>
                    <h4>NOK ${data.price}</h4>
                 </article> 
                 <!-- End of single product -->
            `
        });

        productsDOM.innerHTML = result;
    }
}*/