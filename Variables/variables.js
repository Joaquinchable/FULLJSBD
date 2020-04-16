
// Variables 

// Es un espacio vacio de memoria en nuestro sistema 

//  var 
//  let 
//  const 



//     TIPOS DE DATOS

// Primitivos

// Tipo String

var Ciudad = "CDMX";

// var Nombre = prompt("Tu primer nombre");
// // var Apellido = prompt("Tu primer apellido");
// var NombreCompleto = Nombre + " " + Apellido;

// document.write(NombreCompleto)
// console.log(typeof(Ciudad)) // Salida Tipo string

// Tipo Number


//  var Numero1 = 1;
//  var Numero2 = 2;
//  var Numero3 = 10;
//  var Suma = Numero3 + Numero2;


//  console.log(Suma)
//  console.log(typeof(Numero1))


// Objeto


// Tipo Boolean true / false 


// var numero1 = 30;
// var numero2 = 4;

// var comparacion = numero1 > numero2;

// console.log(comparacion)
// console.log(typeof(comparacion))


// // Tipo Undefined

// // var Nombre 

// // var Apellido = "chable"

// // var respuesta = Nombre + " " + Apellido;

// // console.log(respuesta)
    
// // console.log(typeof(respuesta))

// // Tipo Null

// var Nombre5 = null ;

// console.log(Nombre5)


// var myVar2;

//  alert(myVar2); // undefined 


//  var myVar = null;

// alert(myVar); // null 


// undefined se usa para decirle a Javascript que algo falta,
//  mientras que null le dice que un valor 
// es esperado, puede que no esté disponible aún, pero se espera.


// Tipo NaN


var Nombre5 = "joaquin"
var numero4 = "8"
var suma =  Nombre5 * numero4;

console.log(suma)



//  Tipo Objeto 


// object


var persona = {

     PrimerNOmbre: "James",
     Apellido: "Bond",
     edad: 25,

}

console.log(persona);
console.log(typeof(persona))



// Array 

    var Animalitos = ["gatito", "perrito", "tortuga", "pez"];

    var numericArray = [1, 2, 3, 4];

    var decimalArray = [1.1, 1.2, 1.3];

    var booleanArray = [true, false, false, true];

    var mixedArray = [1, "gatito", "perrito", 4, true];


    console.log(Animalitos)
    console.log(typeof(Animalitos))



    var Frutas = [  ] // reto 


  // Date

    var hoy = new Date();
    var cumpleaños = new Date("December 17, 1995 03:24:00");
    var aniversario = new Date(1995,11,17);
    var efemerides = new Date(1995,11,17,3,24,0);
 
    console.log(efemerides)
    console.log(typeof(hoy))


    // Funtion

    function ShowMessage() {
        
        alert("Hello World!");
    }
    
    ShowMessage();
