export function fetchProduct(url){
    return new Promise(resolve =>{
        fetch(url)
        .then(response => response.json())
        .then(data  =>{
            resolve(data)
        })
    })
}