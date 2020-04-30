//  function

 function Mifuncion(){

  return  
    //código de la función motor de la funcion

  }


  Mifuncion();




//  function saludo2(nombre, apellido) {

    
//            return 'Hola ' + nombre + ' ' + apellido; 
        
//           //  alert('Hola ' + nombre + ' ' + apellido)
//      }
  
// //   //invocamos
//     console.log(saludo2("joaquin", "chable"))
//     console.log(saludo2("gatito", "perrito"))
     
//     saludo2("joaquin", "chable")
//      saludo2('Miguel', 'Perez');



// // Arrow Functions


// // Las "arrow functions" de ES6 son una nueva manera de expresar las funciones de siempre, 
// // de un modo resumido y con algunas características nuevas

// // Aunque son comúnmente conocidas como arrow functions, también 
// // podrás oír hablar de ellas con su denominación en español,
// //  funciones flecha

// //Cómo expresar una función con las arrow functions


// //en vez de usar la palabra clave function se utiliza el símbolo de la flecha gorda


  let mifuncion = () => {

//     //código de la función motor de la funcion

}



// // La invocación de la función se realizaría como ya conoces.


 mifuncion();





//    Parámetros de las funciones flecha
// // El tratamiento de los parámetros se realiza como hasta ahora, 
// // simplemente se colocan entre los paréntesis.


//    let saludo = (nombre, apellido) => {

//       //  alert('Hola ' + nombre + ' ' + apellido)
//       // console.log('Hola ' + nombre + ' ' + apellido)
//      }
  
// // //   //invocamos
//   saludo('Miguel', 'Perez');



// // El único detalle es que, en el caso que tengamos un único parámetro, 
// // podemos ahorrarnos colocar esos paréntesis.


  //    let cuadrado = numero => {
  //     return numero * numero;
  //    }

  //       cuadrado(3)
  //  console.log(cuadrado(4));



// // Ausencia de las llaves de la función

// // Existe otro caso especial, en el que podemos también ahorrarnos algún carácter extra, 
// // en este caso las 
// // llaves de apertura y cierre de la función. 
// // Sería cuando solamente tenemos una línea de código en nuestra función.


//  let saludo = (nombre, apellido) => alert('Hola ' + apellido + ' ' + nombre);



//    let cuadrado = numero => console.log(numero * numero);

//    cuadrado(3)


//    saludo("alberto" , "rodriguez")



//     saludo("jorge" , "Gomez")





// // Ausencia de la palabra return
// // Si tenemos una única línea de código y la función devuelve un valor 
// // también nos podríamos ahorrar la palabra return, además de las llaves como se dijo antes.

 let saludo = (nombre, tratamiento) => 'Hola ' + tratamiento + ' ' + nombre;



  console.log(saludo("jorge" , "Don."))





  let cuadrado = numero => numero * numero;

  console.log(cuadrado(4));


// // ejemplo de ECMASCRIPT5 del codigo anterior


   var cuadrado = function(numero) {
         return numero * numero;
      }

   console.log(cuadrado(4));



   // igual 


   function cuadrado(numero) {

    return numero * numero;
 }

console.log(cuadrado(4));


// reto hacer funciones de las dos formas de declarar funciones con ECMAScript5 y Arrow function 3 ejemplos 