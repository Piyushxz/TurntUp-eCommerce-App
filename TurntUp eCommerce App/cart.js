import {createHorizontalProductCart} from "./createHorizontalProductCard.js"
import { findProductInCart } from "./utils/findProductInCart.js";

const placeOrderBtn = document.querySelector(".place-order")
const cartContainer = document.getElementById("cart");

let cart=  JSON.parse(localStorage.getItem("cart")) || [];

 cartContainer.addEventListener("click",(event)=>{
        let field = event.target.dataset.key
        console.log(event.target);
        switch(field){
        case "remove":
        cart = cart.filter(({_id})=> _id!==event.target.dataset.id);
        cartContainer.innerHTML = "";
        createHorizontalProductCart(cart,cartContainer,findProductInCart,"cart");
        localStorage.setItem("cart",JSON.stringify(cart));
        window.location.reload();
        break;

 }
 })



let cartLength= document.querySelector(".item-count");
cartLength.innerText = JSON.parse(localStorage.getItem("cart")).length;

let productPrice = document.querySelector(".product-price");
let priceAfterDiscount= JSON.parse(localStorage.getItem("cart")).reduce((acc,cur) => acc + cur.newPrice,0);
productPrice.innerText = priceAfterDiscount;

let discount=document.querySelector(".discount-amount");
let priceBeforeDiscount= JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=>acc+cur.oldPrice,0);
let discountedAmount = priceBeforeDiscount- priceAfterDiscount
discount.innerText = discountedAmount;

let totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount - discountedAmount + 100;

createHorizontalProductCart(cart,cartContainer,findProductInCart,"cart");

placeOrderBtn.addEventListener("click",()=>{
        location.href="success.html";
})

console.log(cart);