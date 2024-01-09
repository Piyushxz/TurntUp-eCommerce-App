import { products } from "./db/prdoucts.js";
import { createProductCard } from "./createProductCart.js";
import { findProductInCart } from "./utils/findProductInCart.js"


const parentContainer = document.getElementById("products");
const filerContainer = document.querySelector(".side-bar");
let cart=JSON.parse(localStorage.getItem("cart")) || [];



// const findInCartButton = (cart,prodId)=>{
//     const isProductInCart = cart && cart.length >0 && cart.some(({_id})=>_id === prodId)
//     return isProductInCart;
// }


// for (let product of products){
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("card-component");

  
//     parentContainer.appendChild(cardContainer);


//     //Image element
//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("card-comp-img");

//     const image = document.createElement("img");
//     image.classList.add("card-top-img");
//     image.setAttribute("src",product.img);
//     image.setAttribute("alt",product.alt);
//     imageContainer.appendChild(image);
    
//     // Card details
//     const cardDetailsContainer = document.createElement("div");
//     cardDetailsContainer.classList.add("card-comp-contant");

//     const pname= document.createElement("h2");
//     pname.classList.add("card-h2");
//     pname.innerText= `${product.name}`;
//     cardDetailsContainer.appendChild(pname);

//     const productBy = document.createElement("h3");
//     productBy.classList.add("card-h3");
//     productBy.innerText = `By ${product.brand}`
//     cardDetailsContainer.appendChild(productBy);

//     const amountDetails = document.createElement("p");
//     amountDetails.classList.add("code-para");
//     cardDetailsContainer.appendChild(amountDetails);
    
//     const price = document.createElement("h5");
//     price.innerText= `Rs ${product.newPrice}`;
//     amountDetails.appendChild(price);

//     const discount = document.createElement("p");
//     discount.classList.add("discount-tag");
//     discount.innerText=`${product.discount}% Off`;
//     amountDetails.appendChild(discount);


//     // CTA Button 

//     const ctaButton = document.createElement("div")
//     ctaButton.classList.add("card-btn-footer");

//     const cartButton = document.createElement("button");
//     cartButton.classList.add("btn","btn-outline","btn-outline-prime");
//     cartButton.innerText="Add to Cart";
//     ctaButton.appendChild(cartButton);
//     cartButton.setAttribute("data-id",product._id);


//     cardContainer.appendChild(imageContainer);
//     cardContainer.appendChild(cardDetailsContainer);
//     cardContainer.appendChild(ctaButton);
//     parentContainer.appendChild(cardContainer);
// }

parentContainer.addEventListener("click", (event)=>{
    
    const isProductInCart = findProductInCart(cart,event.target.dataset.id);
    if(!isProductInCart){
    const producToAddToCart= products.filter(({_id})=> _id === event.target.dataset.id);
    cart=[...cart,...producToAddToCart]; 
    localStorage.setItem("cart",JSON.stringify(cart));
    console.log(cart);
    const cartButton = event.target;
    cartButton.innerHTML="Go to Cart <span class=' material-icons-outlined'>shopping_cart</span>";
    }else{
        location.href="cart.html";
    }
})

filerContainer.addEventListener("click",(event)=>{
    let field = event.target.dataset.key;
    console.log(field);
    switch(field)
    {
        case "lowtohigh":
            parentContainer.innerHTML = "";
            const sortLowToHighcart=products.sort((a,b)=> { return a.newPrice - b.newPrice});
            createProductCard(sortLowToHighcart,parentContainer, findProductInCart,"products");
            break;

        case "hightolow":
            parentContainer.innerHTML = "";
            const sortHighToLowcart=products.sort((a,b)=> { return b.newPrice - a.newPrice});
            createProductCard(sortHighToLowcart,parentContainer, findProductInCart,"products");
            break;

        case "discount":
            parentContainer.innerHTML="";
            const updatedContainer = products.filter(({discount})=>discount>=Number(event.target.dataset.discount));
            createProductCard(updatedContainer,parentContainer, findProductInCart,"products");
            break;           
    }



})

createProductCard(products,parentContainer, findProductInCart,"products");





