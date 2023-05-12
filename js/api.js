//const API_URL = 'https://kodemia-24g-default-rtdb.firebaseio.com/products/.json'
const API_URL ='https://fakestoreapi.com/products'

let getProducts= async () => {
    let response = await fetch (`${API_URL}`)
    let data = await response.json()
    return data;
}

export {getProducts}


