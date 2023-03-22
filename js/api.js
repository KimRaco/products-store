const API_URL = 'https://kodemia-24g-default-rtdb.firebaseio.com/products/.json'

let getProducts= async () => {
    let response = await fetch (`${API_URL}`)
    let data = await response.json()
    return data;
}

export {getProducts}


