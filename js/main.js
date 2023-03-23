import { getProducts } from "./api.js";
import { createCard, cardCart } from "./productCards.js";



const printCards = async () => {
    let wrapper = document.getElementById("card-wrapper");
    let products = await getProducts()
    console.log(products)
    products.forEach((item) => {
        let { category, description, id, image, price, rating, title } = item
        console.log(image, id)
        let col = document.createElement("div");
        col.classList.add("col-6", "col-sm-6", "col-md-3", "mb-4");
        col.appendChild(createCard(category, description, id, image, price, rating, title, handler));
        wrapper.append(col);
    });
};
printCards();


// let precios = []


// const handler = ({price, title}) => {
//     let car = document.querySelector("#cart-id")
//     precios.push(price)

//     document.querySelectorAll("#cart-id div").forEach(div => div.remove())
    

//     car.append(cardCart(title, price))
//    document.getElementById("total").innerText = `Total = ${getTotal(precios)}`
// }

// const getTotal = (array) => {
//     return array.reduce((acum, current) => acum + current, 0)
// }



//export {precios, getTotal}

let saver = []
let prices = []

const handler = ({price, title}) => {
    saver.push({title: title, price: price})
    handlePrices(saver)

    console.log (saver)

    document.querySelectorAll("#cart-id div").forEach(div => div.remove())
    let itemDiv = document.querySelector("#cart-id")
    
    
    document.getElementById("total").innerText = `Total = ${getTotal(prices)}`

    saver.forEach((it) => {
       
    itemDiv.append(cardCart(it))
    })
    
    
}

const handlePrices = (saver) => {
    prices = saver.map(it => it.price)
}

const getTotal = (array) => {
    console.log(array)
    return array.reduce((acum, current) => acum + current, 0)
}
 export {getTotal, prices, saver, handlePrices}