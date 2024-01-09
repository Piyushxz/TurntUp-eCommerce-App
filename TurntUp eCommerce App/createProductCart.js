
export const  createProductCard= (products,parentContainer,findProductInCart,pageType)=>{
for (let product of products){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-component");

  
    parentContainer.appendChild(cardContainer);


    //Image element
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-comp-img");

    const image = document.createElement("img");
    image.classList.add("card-top-img");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.alt);
    imageContainer.appendChild(image);
    
    // Card details
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add("card-comp-contant");

    const pname= document.createElement("h2");
    pname.classList.add("card-h2");
    pname.innerText= `${product.name}`;
    cardDetailsContainer.appendChild(pname);

    const productBy = document.createElement("h3");
    productBy.classList.add("card-h3");
    productBy.innerText = `By ${product.brand}`
    cardDetailsContainer.appendChild(productBy);

    const amountDetails = document.createElement("p");
    amountDetails.classList.add("code-para");
    cardDetailsContainer.appendChild(amountDetails);
    
    const price = document.createElement("h5");
    price.innerText= `Rs ${product.newPrice}`;
    amountDetails.appendChild(price);

    const discount = document.createElement("p");
    discount.classList.add("discount-tag");
    discount.innerText=`${product.discount}% Off`;
    amountDetails.appendChild(discount);


    // CTA Button 

    const ctaButton = document.createElement("div")
    ctaButton.classList.add("card-btn-footer");

    const cartButton = document.createElement("button");
    cartButton.classList.add("btn","btn-outline","btn-outline-prime","add-to-cart");
    const isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart")),product._id);
    cartButton.innerText= pageType === "products" && isProductInCart ?"Go to cart":"Add to cart";
    ctaButton.appendChild(cartButton);
    cartButton.setAttribute("data-id",product._id);


    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(cardDetailsContainer);
    cardContainer.appendChild(ctaButton);
    parentContainer.appendChild(cardContainer);
}
}