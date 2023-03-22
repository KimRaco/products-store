
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {count: 120, rate: 3.9}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

import { precios, getTotal } from "./main.js";

const createCard = (category, description, id, image, price, rating, title, handler) => {
    // let {name, url} = origin
         // Create card
         let divCard = document.createElement("div");
         divCard.classList.add("card", "mb-3", "h-100", "d-flex", "align-items-center");
         let imgCard = document.createElement("img");
         imgCard.classList.add("w-50", "m-4");
         imgCard.setAttribute("src", image)
 
         // card body
         let divCardBody = document.createElement("div")
         divCardBody.classList.add("card-body")
         let cardName = document.createElement("h5")
         let pOrigin = document.createElement("p")
         pOrigin.classList.add("card-text")
         let priceDetail = document.createElement("p")
         priceDetail.classList.add("card-text")
         let linkDetails = document.createElement("a")
         linkDetails.classList.add("btn", "btn-info", "d-flex", "justify-content-center")
        linkDetails.addEventListener("click", ()=>{
        handler({ price, title})
           
         })
         
         
         // Create content
         cardName.innerText = title
         pOrigin.innerText = category
         priceDetail.innerText = price
         linkDetails.innerText = 'Add to Cart'

         
          
         
        
         // Insert content
         divCardBody.append( cardName, pOrigin, priceDetail, linkDetails)
         divCard.append( imgCard, divCardBody)
         return divCard
     }
 
     export {createCard, cardCart}

     

 let cardCart = (title, price) => {
  let divPrincipal = document.createElement("div")
     divPrincipal.classList.add("d-flex","justify-content-between")
    
     let titleInDiv = document.createElement("p")
     let textTitle = document.createTextNode(title)
     titleInDiv.classList.add ()
     titleInDiv.appendChild(textTitle)
    
     let priceInDiv = document.createElement("div")
     priceInDiv.classList.add()
     let textPrice = document.createTextNode(`Price: ${price}`)
     priceInDiv.appendChild(textPrice)

    let deleteButton = document.createElement("button")
    const classAdd = deleteButton.classList;
    classAdd.add("btn","btn-outline-info","btn-sm");
    deleteButton.textContent = "x";



     precios.forEach((item, index) => {
        let { price } = item; 
        console.log (precios)

            deleteButton.addEventListener("click", (deleteEvent) => 
        {
        deleteEvent.target.parentNode.remove()
        console.log (index)
        precios.splice(index,1)
        getTotal(precios)
        
       
          
        })

    }) 

         //obj.splice(index,1)
          
     
     
    //  { deleteEvent.target.parentNode.remove() })
    
     divPrincipal.append(titleInDiv, priceInDiv, deleteButton)
    
   return divPrincipal
     }


//      let saver = []
// let precios = []

// const handler = ({price, title}) => {
//     saver.push(title)
//     console.log (saver)

//     saver.forEach(() => {
//         let car = document.querySelector("#cart-id")
//         car.append(cardCart(title, price))
//     } )
   
//     precios.push(price)
   
//     document.getElementById("total").innerText = `Total = ${getTotal(precios)}`
// }

// const getTotal = (array) => {
//     return array.reduce((acum, current) => acum + current, 0)
// }

// export {saver}

