// Estructuras Condicionales 

// Introducción
// Un script consiste en una lista de enunciados que se van 
// ejecutando a medida que se cargan. Sin embargo, en ocasiones nos 
// interesa controlar el flujo de la ejecución estableciendo alternativas, 
// es decir, que una serie de enunciados se ejecuten en algunas ocasiones y en otras no.
// Para permitir esto existen las estructuras condicionales.




// if … else
// Por medio de if se puede indicar una condición que, de cumplirse, 
// permite la ejecución de uno o más enunciados. Por medio de else se 
// puede establecer una alternativa, aunque su uso es opcional.


// La sintaxis de esta estructura es la siguiente:

// if(condicion){


// ...enunciados a ejecutar si se cumple la condicion

// }else{

//     …enunciados a ejecutar si NO se cumple la condición…
// }



// var edad = prompt("¿Cuál es tu edad?");

// if  (edad > 18 ){

//     document.write("Puedes entrar a la party");

// }else if ( edad == 18 ){

//     document.write("Puedes Entrar a la fiesta ");
// } else{
//     document.write("Tienes menos de 18 años lo siento no puedes pasar vete a tu casa");
// }


// Reto crear un sistema de condicion If ... else


 // Se pueden concatenar tantos else if como se quiera, pero cuando se 
// trata de analizar el valor de una variable suele 
// ser más efectivo emplear la estructura condicional switch




    //   Switch



// Por medio de switch se puede listar una serie de bloques
//  de enunciados que se ejecuten dependiendo del valor de una variable.

// La sintaxis sería:


// switch (variable){

//     case(valor1):
//     …enunciados a ejecutar para ese valor…
//     break;
//     case(valor2):
//     …enunciados a ejecutar para ese valor…
//     break;
//     case(valor3):
//     …enunciados a ejecutar para ese valor…
//     break;

//     default:
//     …enunciados a ejecutar cuando el valor no 
//     coincida con ninguno de los anteriores…
//             break;

// }


// break indica que el bloque de código puede dejar de interpretarse cuando se haya dado una coincidencia.

// La especificación de default: es opcional. En este caso, si no se emplease simplemente 
// no se lanzaría ninguna alerta en caso de que el valor
//  no coincidiese con ninguno de los datos recogidos en switch.




//  var GeneroMusical = prompt("¿Cuál es tu Genero Musical Preferido?");
 
 
 
//  switch (GeneroMusical) {


//     case "Banda":
//     document.write('No eres de los mios');
//     break;

//     case "Rock":
//     document.write('Eres CHIDO');
//     break;

//     case "Indie":
//     document.write('Eres RaRO');
//      break;

//     case "Merengue":
//     document.write('BAilarin');
//     break;

//     default:
//     document.write('No sabes de musica');
//     break;

//  }


 // RETO hacer su propio  switch



  var Frutas = prompt(" a como kilo de ? ")

 switch(Frutas) {
    case "Platano":
     document.write(" el kilo cuesta  10 pesos")
       break;
    case "Naranja":
       document.write(" el kilo cuesta  50 pesos")
         break;
    case "Manzana":
       document.write(" el kilo cuesta  30 pesos")
         break;
    default:
       document.write(" no hay esa fruta ")
       break;
}