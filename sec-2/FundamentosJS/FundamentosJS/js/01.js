console.log("hola mundo");
let variable = 30;
console.log(variable);
variable = "hola mundo otra vez"; //Al ser let no le importa el tipo de dato es variable en todo sentido.
console.log(variable);

const constante = 100;
console.log(constante); //No se puede cambiar, es obligatorio inicializarlo
//constante = "malo";


//------>Tipos de datos<------

//-->UNDEFINED, basicamente creo la variable y no le asigno nada asi que no esta definida.

//-->BOOLEAN, true o false xd
let booleano = true;

//-->Number, entra todo lo relacionado a numeros, negativos, positivos y fracciones.
const numero1 = 100.2;
const numero2 = 50;
const numero3 = -50;

console.log(typeof(numero1)); //con eso veo el tipo de dato

//-->BIG INT, numero grande.
const numero = BigInt(1212313213546489431321231231); //Constructor de BigInt, los otros tipos tmb tienen el suyo.
console.log(typeof numero);

//-->SYMBOL, unico.
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol); 

//Objeto, lo declaro como un JSON.
const precio = 300;
const producto = { //aunque tenga el const, puedo cambiar los valores de las propiedades.
    nombre: "camara",
    precio: precio, //object literal enhacement, se tienen que llamar si o si iguales!!!
    disponible: true
};
console.log(producto);
console.table(producto);



producto.imagen = "imagen.jpg"; //aunque no exista lo agrega
console.log(producto);
delete producto.disponible; //borra la propiedad

//Object.freeze(producto); //te lo frizea, no podes cambiar mas nada.
//Object.seal(producto); //Solo podes modificar las existentes, no se puede agregar ni eliminar ninguna propiedad

const productoNuevo = {
    nombre: "le tengo que poner alias"
};

//destructuring
const {nombre} = producto;
console.log(nombre);
//destructuring de 2
const {nombre: nombreALIAS} = productoNuevo; //Le pongo ALIAS, asi no da problema
console.log(nombreALIAS);

//UNIR DOS OBJETOS
// const productoUnificado = Object.assign(producto, productoNuevo); //Si hago asi modifica los originales. NO SE USA
// console.table(productoUnificado);

const productoUnificadoCorrecto = {
    producto: {...producto},
    productoNuevo: {...productoNuevo}
}; //Aca no modifica pero si son iguales los nombres de las propiedades
// toma la ultima.

//array.splice(2,3); //elimina desde la posicion 2 - 3 elementos
const arreglo = ['cero', 'uno', 'dos', 'tres'];

arreglo.forEach(function(x,y,z,h){ //Solo permite acceder a cada elemento
    console.log("x: ", x, " ,y: ", y, ",z:", z, ",h:", h );//x el elemento, y iterador, z arreglo completo, h nada. AUTOMATICO.
});

const arregloMap = arreglo.map(function(x){
    if(x === 'cero'){
        return x;
    }
    return null;
});

console.log(arregloMap);

//PAR DE COSAS CON ARREGLOS

//.find() devuelve el primero que cumpla con la condicion
const arregloPruebas = [0,1,2,3,4,5,6,7,8,9,10]

const pruebaFind = arregloPruebas.find(numero => numero > 5)

console.log(pruebaFind)

//Scope = -> alcanze de una variable.
const scopee = 800;
viendoScope()
function viendoScope(){
    const scopee = 900;
    console.log(scopee)
    console.log()
}

