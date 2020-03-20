// PRODUCTS
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
