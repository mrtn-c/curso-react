//Trabajo con el DOM.html
//Puedo trabajar con los elementos del HTML. Mediante dos metodos, querySelector() y querySelectorAll().
//->querySelector() trae maximo 1 elemento.
//->querySelectorAll() trae todos los elementos que tengan concidencia con el selector que envio. Arma una coleccion, para acceder a los elementos se itera!!
//Selectores -> se coloca '.' para las clases '.class', '#' para los id '#id' y elemento html mando etiqueta 'etiqueta'. IGUAL QUE CSS

const nombre = document.querySelector('#nombre')
nombre.value = "hola hola"
var x = 0
//--------Eventos!!!

//CLICK
const heading = document.querySelector('.heading')
heading.addEventListener('click', function() {
    if(x%2==0){
        heading.textContent = "nuevo heading"
        x+=1
    } else {
        x+=1
        heading.textContent = "otro heading"
    }
})
//INPUTS
// const inputPassword = document.querySelector('.password')
// inputPassword.addEventListener('input', funcionPassword)

// function funcionPassword(e){
//     inputPassword.type = 'text'

//     setTimeout(() => {
//         inputPassword.type = 'password'
//     }, 1000);
// }

//formulario
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => { //Por default envia todo, al login ese. Por eso prevenimos
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value
    
    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    if(nombre === '' || password === ''){
        alerta.textContent = "Espacios en blanco, pone algo"
        alerta.classList.add('error')
        
    } else {
        alerta.textContent = "Todo correcto..."
        alerta.classList.add('exito')
    }
    formulario.appendChild(alerta)

    setTimeout(() => {
        formulario.removeChild(alerta)
    }, 1000);



    // setTimeout(() => {
    //     formulario.removeChild(alerta) //NO ESTA BUENO PORQUE SIGO AGREGANDO LA CLASE...
    //  }, 5000);

})

//Export y import
/*
mediante export tiro las funciones, con import las agarro
import funcion from "archivo.js"

export funcion
o varias -> export {
    funcion1,
    funcion2
}


*/ 