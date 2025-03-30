 let featuringProducts = document.querySelector(".featuring-products");
 
 const featured = () => {
       featuring.forEach((featured) => {
          let productBox = document.createElement("div");
          productBox.className = "product-box";
          productBox.innerHTML = `
            <div class="product-image">
               <img src="${featured.productImage}" alt="${featured.productName}">
            </div>
            
            <div class="product-info">
               <div class="product-name">
                  ${featured.productName}
               </div>
               <div class="product-price">
                  ${featured.productPrice}
               </div>
               <button class="add-to-cart" data-product-name="${featured.productName}" data-product-price="${featured.productPrice}" data-product-image="${featured.productImage}">ADD TO CART</button>
            </div>
         `
          
          featuringProducts.appendChild(productBox);
          
          
       })
    }
 featured()
 
 
 

 //PRODUCT SHOPS
  let overallProducts = document.querySelector(".product-shop");
 
 const products = () => {
       productOverall.forEach((featured) => {
          let productBox = document.createElement("div");
          productBox.className = "product-box";
          productBox.innerHTML = `
            <div class="product-image">
               <img src="${featured.productImage}" alt="${featured.productName}">
            </div>
            
            <div class="product-info">
               <div class="product-name">
                  ${featured.productName}
               </div>
               <div class="product-price">
                  ${featured.productPrice}
               </div>
               <button class="add-to-cart" data-product-name="${featured.productName}" data-product-price="${featured.productPrice}" data-product-image="${featured.productImage}">ADD TO CART</button>
            </div>
         `
          
          overallProducts.appendChild(productBox)
       })
    }
products()

let date = new Date().getFullYear()
document.querySelector(".year").textContent = date


let s = document.querySelectorAll(".other").forEach(other => {
   other.setAttribute("href", "#")
   other.onclick = () => {
      document.querySelector(".pop-up").style.transform = "scaleX(1)"
   }
})

document.querySelectorAll(".p").forEach(p => {
   p.style.left = Math.random() * 70 + "px";
   p.style.top = Math.random() * 70 + "px";
   p.style.filter = `hue-rotate(${Math.random() * 360}deg)`
   p.style.animationDuration = Math.random() *3 + 5 +"s"
})
document.querySelector(".cancel").onclick = () => {
   document.querySelector(".pop-up").style.transform = "scaleY(0)"
}

