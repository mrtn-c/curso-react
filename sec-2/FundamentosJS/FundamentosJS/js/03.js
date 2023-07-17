//FETCH API -> consumir api desde aca... REACT NO PUEDE POR SI SOLO POR EL MOMENTO.
//promises, valor que va a estar disponible ahora o en el futuro.
const url1 = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// fetch(url).then((response) => {
//     return response.json()
// }).then((resultado) => {
//     console.log(resultado)
// }) //esta es la funcion que hace la peticion.


//AHORA CON ASYNC - AWAIT
/*
Async -> las hace asincronas, no detiene el codigo.
Await -> espera que se complete la linea para seguir con el resto del codigo.

*/

const consultarAPI = async () => {
    
    const inicio = performance.now()
    
    
    var response = await fetch(url1)
    var resultado = await response.json()

    response = await fetch(url2)        //va abstante lento... como se hace una y recien dsp la otra...
    resultado = await response.json()

    const fin = performance.now()
    console.log(`Perfomance en API 1: ${fin-inicio}ms`)

}

consultarAPI()

const consultarAPI2 = async () => {
    const inicio = performance.now()
    const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)])
    const [respuesta1, respuesta2] = await [response1.json(), response2.json()]
    const fin = performance.now()
    console.log(`Perfomance en API 2: ${fin-inicio}ms`)
}
consultarAPI2()