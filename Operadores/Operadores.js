//      OPERADORES ARTIMETICOS

// Los operadores aritmeticos toman los valores numericos 
// (literales o variables) como sus operando y devuelve un solo valor numerico.

// Operador	    Nombre  	          Ejemplo	          Descripcion

//  +	        Suma	              5 + 6	              Suma dos numeros

//  -	        Substraccion	      7 - 9	              Resta dos numeros

//  *	        Multiplicacion	      6 * 3	              Multiplica dos numeros

//  /	        Division	          4 / 8	              Divide dos numeros

//  %	        Modulo: 	          6 % 2	              Devuelve el resto de dividir ambos numeros, 

//                                                        en este ejemplo el resultado es 1

//  ++	        Incremento	          a++	              Suma 1 al contenido de una variable.

//  --	        Decremento	          a--	              Resta 1 al contenido de una variable.

//  -	                               -a	              Invierte el signo de un operando.



    // var a = 1;
    // var b = 10;
    // var nombre = "joaquin"
    // var apeliido = "chable"

    //   console.log(a);
    //   console.log(b);
    //   console.log(a + b);
    //   console.log( nombre  + "  " + apeliido);
    //   console.log(a - b)
    //   console.log(apeliido -  nombre);
    //   console.log( a * b);
    //   console.log(a / b);
    //   console.log(a % b)
    //   console.log( -a) // invierte el operador del valor de mi variable



// OPERADORES DE COMPARACION

// Un operador de la comparacion compara sus operando 
// y devuelve un valor logico basado en si la comparacion es verdad o no.

//      Operador	           Descripcion

//       =                   " Igual a"

//       ==	                 " Igual a"  devuelve true si los operandos son iguales

//       ===                  Estrictamente "igual a"   

//       !=	                 "No igual a" devuelve true si los operandos no son iguales

//       !==                 Estrictamente " No igual a" 

//        >	                 " Mayor que" devuelve true si el operador de la izquierda es mayor que el de la derecha.

//       >=	                 " Mayor o igual que " devuelve true si el operador de la izquierda es mayor o igual que el de la derecha.

//       <	                 " Menor que" devuelve true si el operador de la izquierda es menor que el de la derecha.

//       <=	                 "Menor o igual que" devuelve true si el operador de la izquierda es menor o igual que el de la derecha.
  
  
   
   var a = 8;
   var b = 3;
   var c = 3;

  console.log(a)
  console.log(a == b);
  console.log(3 == "3");
  console.log(3 === "3");

   console.log(a != b);
   console.log( 3 != "3" )
   console.log( 3 !== "3" )

   console.log(a < b);
   console.log(a > b);
   console.log(a >= c); 
   console.log(b <= c);




// OPERADORES  LOGICOS

// Los operadores Logicos se utilizan para combinar multiples comparaciones 
// en una expresion condicional. Un operador logico toma dos operandos 
// cada uno de los cuales es un valor true o false y devuelve un valor true o false.


// Operador	    Descripcion

//   &&	      " Y "       Devuelve true si ambos operadores son true.
//   ||       " O "       Devuelve true si uno de los operadores es true.
//    !	      " No "      Devuelve true si la negaci�n del operando es true.

   
var a = 8;
var b = 5;
var c = 3;

document.write( (a != b) && (c < b) );document.write("<br>");
document.write( (a == b) || (b != c) );document.write("<br>");
document.write( !(b <= c) );document.write("<br>");






