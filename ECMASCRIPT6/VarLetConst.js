// ECMAscript6


// ECMAScript es una especificación de lenguaje de programación publicada 
// por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript 
// propuesto como estándar por Netscape Communications Corporation.
//  Actualmente está aceptado como el estándar ISO/IEC 22275:2018.



// var let y const


// En JavaScript, el contexto de ejecución es un concepto abstracto que contiene información
// sobre el entorno en el que se está ejecutando el código actual.


// (Scope)



// Uno de los grandes problemas de las variables con var es lo que en JavaScript se conoce 
// como Scope, el scope es básicamente en que parte de nuestro programa una variable y su valor son 
// accesibles por otro código.

// El problema de var (Scope)


var nombre = 'Joaquin';


if(nombre) {
    //  var nombre = 'Pedro';
    //  let nombre = "Juan";
   console.log(nombre, ' dentro del IF');
}

console.log(nombre, ' fuera del IF');



// Notarás que en ambos casos se imprime el valor de ‘Pedro’, 
// si bien da la impresión de que estamos reescribiendo la variable nombre
//  ( o creando una nueva variable) puedes notar que la que esta fuera del if (considerado un Scope Global)
//   también muestra el valor de la que esta dentro, esto hacia que muchos desarrolladores que venian 
//   de otros lenguajes como C#, 
// Java o C, consideraran a JavaScript un lenguaje mal diseñado.



// let



// Variables con let
// Las diferencias entre var y let son mínimas. Ambas pueden guardar cualquier 
// tipo de dato sin declarar que tipo de dato guardarán, 
// el mismo código que utilizamos anteriormente puede ser utilizado con let:



// También en let, una variable puede ser creada sin tener un valor de inicio.



let frutas;

frutas = ['MANZANA', 'MANGO']; // la variable productos ya tendrá valores


console.log(frutas)


// se puede re-asignar un valor 

// let edad = 18;
// edad = 19; // el valor ha sido re-asignado


// console.log(edad)


// si var y let son muy similares ¿En qué se diferencían? El Scope.



 var nombre1 = 'Joaquin'; // global 

//  let nombre1 = 'Joaquin';   // ejemplo si declaramos la variable con let





// primer contexto de ejecucion

if(nombre1) {
    //   var nombre1 = 'Pedro';    // contradicion y error
      let nombre1 = "Juan";         
   console.log(nombre1, ' dentro del primer contexto de ejecucion');
}





// segundo contexto de ejecucion

if(nombre1) {
       
console.log(nombre1, ' dentro del IF en otro contexto de ejecucion');

}


// let su Scope  es local y var Scope es global 





// const


// una variable con const debe tener un valor al ser creada:


const nombre2 = 'Juan'; // Es necesario agregar un valor


// const frutas; // error



// No se pueden re-asignar los valores.


// const edad = 18;
// edad = 19;



// console.log(edad)



const nombre3 = "joaquin";

if(nombre3) {
            
   console.log(nombre3, ' dentro del primer contexto de ejecucion');
}


console.log(nombre3)


// su Scope es global pero no puede ser reasignado tiene que un variable que nunca cambie





// EScribe las diferencias entre var , let y const ::RETO

