import { products } from "./db/prdoucts.js"



export const createHorizontalProductCart =(products,parentElement)=>{
    for (let product of products){


        //Border
        const Container = document.createElement("div");
        Container.classList.add("card-component");
        Container.classList.add("gap-sm");

        parentElement.appendChild(Container);

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("horizontal-card");



        // Image Element
        const imageContainer= document.createElement("div");
        imageContainer.classList.add("card-side-img");


        const image = document.createElement("img");

        image.classList.add("card-side-img");
        image.setAttribute("src",product.img);
        image.setAttribute("alt",product.name);
        
        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);

        //Card Details

        const cardDetailsContainer=document.createElement("div");
        cardDetailsContainer.classList.add("card-comp-contant");

        const name = document.createElement("h4")
        name.classList.add("card-h2","heading-sm")
        name.innerText= product.name;

        cardDetailsContainer.appendChild(name);

        // Quantity Container

        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("item-quantity");
        

        //Increment Container
        const IncBtnContainer = document.createElement("button");
        IncBtnContainer.classList.add("btn-icon")

        const IncBtn = document.createElement("i");
        IncBtn.classList.add("bi","bi-plus");
        IncBtn.setAttribute("data-key","increment");       

        IncBtnContainer.appendChild(IncBtn);
        quantityContainer.appendChild(IncBtnContainer);

        // Quantity Number
        const quantityNumber= document.createElement("div");
        quantityNumber.classList.add("quantity-number");
        quantityNumber.innerText = "1";
        quantityContainer.appendChild(quantityNumber);

        // Decrement Button
        const DecBtnContainer = document.createElement("button");
        DecBtnContainer.classList.add("btn-icon")

        const DecBtn = document.createElement("i");
        DecBtn.classList.add("bi","bi-dash");
        DecBtn.setAttribute("data-key","decrement");    

        DecBtnContainer.appendChild(DecBtn);
        quantityContainer.appendChild(DecBtnContainer);


        cardDetailsContainer.appendChild(quantityContainer);


        //Price
        const price = document.createElement("h5");
        price.classList.add("price-tag");
        price.innerText = `Rs ${product.newPrice}`

        cardDetailsContainer.appendChild(price);

        //Add to Wishlist Button 

        const addToWishlistButton = document.createElement("button");
        addToWishlistButton.classList.add("btn","btn-small");
        addToWishlistButton.innerText = "Move to Wishlist";
        addToWishlistButton.setAttribute("data-key","AddToWishlist")
        addToWishlistButton.setAttribute("data-id",product._id);
        addToWishlistButton.setAttribute("data-key","wishlist");
        cardDetailsContainer.appendChild(addToWishlistButton);


        //Remove button 
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn","btn-small");
        removeBtn.innerHTML ="Remove";
        removeBtn.setAttribute("data-id",product._id);
        removeBtn.setAttribute("data-key","remove");
        cardDetailsContainer.appendChild(removeBtn);


        cardContainer.appendChild(cardDetailsContainer);
        Container.appendChild(cardContainer);


        parentElement.appendChild(Container);
    }
}