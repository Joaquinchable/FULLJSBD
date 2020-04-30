// Bucles 


// Introducción
// Un bucle es la repetición de uno o varios enunciados
// un número determinado de veces.

// Bucle For

// El bucle for es una estructura de control en programación en la que se puede indicar de 
// antemano el número mínimo de iteraciones. 
// ​
// Te permite repetir un bloque de código un número determinado de veces. 
// Se utiliza una variable en forma de contador, cada vez que se ejecuta el bucle, 
// el contador se incrementa o decrementara . Así podemos llevar la cuenta de cuantas veces se ha ejecutado, 
// y salir del bucle cuando se llegue a un determinado valor del contador (condicion)



// La sintaxis de for es la siguiente:


    //       for (contador de inicio ;condición;variación_del_contador){
    // // //       …enunciados a ejecutar…
    //         }



        //      var i ;
        //     for (i=10 ; i <=100 ;i++) {     // con que numero empieza mi interacion o vueltas;  hasta cuando quiero que deje de dar vueltas o deje de repetir; que incremente o decremente hasta cumpla la condicion que incremente o decremente cada vez que de una vuela o se repita
        //          document.write(i)        
        //        document.write("<br>") 
        //    }

    
            // for ( let i = 50; i >= 10; --i ){

            //      console.log(i)
            // }

       

          //Bucle WHILE


    // El Bucle WHILE se utiliza cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, 
   //  siempre que se cumpla una condición. Es más sencillo de comprender que el bucle FOR
   //  pues no incorpora en la misma línea la inicialización de las variables su condición para seguir 
   // ejecutándose y su actualización





         //  Sintaxis de la sentencia while.

        //     while (condición) {
        //       // bloque a ejecutar mientras la condición sea verdadera

        //       // incremento o decremento
        //    }




        

    //        var contador = 3;
        
    //        while (contador <= 10) {

    //          console.log('La variable contador es igual a: ' + contador);

    //        contador++;
        
    //    }


    


    // Bucle DO...WHILE

    //  es una variación del bucle while Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, 
    //  igual que el bucle WHILE, 
    //  con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.
       
      
    // sintaxis
      
    //    do { 
    // //     //sentencias del bucle 
    //   } while (condición)


    // Creamos una variable con valor 1. 
    // Se ejecuta lo que hay dentro del do { ... }, y luego entra en la condición del While,
    //  o sea que este programa nos muestra por pantalla los numeros del 1 al 9. 



    //   var numero = 5 ;


    //   do {
        
        
    //       console.log(numero)
    //        numero = numero + 1
       

    //    }  while( numero <= 20);

      





///



    //    var numero = 10 ;


    //    do {
        
        
    //        console.log(numero)
    //         numero = numero + 1
       

    //   }  while( numero <= 9);




    // De esta forma, se ejecuta el do (siempre se ejecuta al menos una vez),
    // y luego la condición no se cumple, o sea que ya saldría del bucle. 
    // El resultado del programa sería mostrar el número 10 por pantalla.
 
    // ve como aunque no se cumpla la condición, se ejecutan las instrucciones 
    // que contiene el do . Esto es porque la condición se comprueba después, 
    // y no antes como en el caso del bucle While visto en la lección anterior. 