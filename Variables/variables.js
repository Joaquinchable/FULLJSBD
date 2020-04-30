
// // // Variables 

// // // Es un espacio de memoria en nuestro sistema 

// // //  var 

// // ECMAScript6
// // //  let 
// // //  const 



// // //     TIPOS DE DATOS

// // // Primitivos

// // // Tipo String  == cadena de texto su sintaxis son con comillas "t-e-x-t-o"  's-t-r-i-n-g'

            // var Ciudad = "CDMX";

            // var Nombre = prompt("Tu primer nombre");
            // var Apellido = prompt("Tu primer apellido");
            // var NombreCompleto = Nombre + " " + Apellido;  // concatenacion
    
            // document.write(NombreCompleto)


         

            //  console.log(Ciudad)
            //  console.log(typeof(Ciudad)) // Salida Tipo string
    

// // // // Tipo Number


            //   var Numero1 = 1;
            //   var Numero2 = 2;
            //   var Numero3 = 10;
            //   var Suma = Numero2 * Numero3 + Numero1;

            //  console.log(Suma)
            //  console.log(typeof(Numero1))





// // // Tipo Boolean true / false 


    //    var numero1 = 30;
    //    var numero2 = 4;

    //    var comparacion = numero1 > numero2;

    //   console.log(comparacion)
    //   console.log(typeof(comparacion))





// // // // Tipo Undefined   casos particulares 

     
        //    var Nombre ;        // una variable se define por su valor no por su nombre y ese valor puede ser cualquier tipo dato y puede ser re-asignado

        //    var Apellido = "chable";

        //    var NombreCompleto = Nombre + " " + Apellido;

        //    console.log(NombreCompleto);
    
        //    console.log(typeof(Nombre));




// // // // // Tipo Null

//        var Nombre5 = null ;

//        console.log(Nombre5)


//          var myVar2;

//          alert(myVar2); // undefined 


//          var myVar = null;

//          alert(myVar); // null 


// // // undefined te va decir  que algo falta,
// // //  mientras que null te dice que un valor 
// // // es esperado, puede que no esté disponible aún, pero se espera.


// // // Tipo NaN    // not a number


    //   var Nombre = "joaquin"
    //   var numero4 = "8"
    //   var suma =  numero4 * Nombre;

    //  console.log(suma)
    //  console.log(typeof(suma))  // la salida es debilmente tipada con el typeof javascript por que el tipo de dato es un dato especifico y es NaN



// // //  Tipo Objeto 


     // object


      var persona = {
     
    
        PrimerNOmbre: "James",   // propiedad y valor 
        Apellido: "Bond",
        edad: 25,
      
        }

       console.log(persona);
       console.log(typeof(persona))



// //    Array 

           var Animalitos = ["gatito", "perrito", "tortuga", "pez"];

           var numericArray = [1, 2, 3, 4];

           var decimalArray = [1.1, 1.2, 1.3];

           var booleanArray = [true, false, false, true];

           var mixedArray = [1, "gatito", "perrito", 4, true];


         console.log(mixedArray)
         console.log(typeof(Animalitos))



//         var Frutas = [  ] // reto 


          // Date

        //   var hoy = new Date();  // me dice la fecha de hoy
        //   var cumpleaños = new Date("December 17, 1995 03:24:00"); // valores de tipo de dado string
        //   var aniversario = new Date(1995,11,17);     // valores de tipo de dato de number
        //   var efemerides = new Date(1995,11,17,3,24,0);  // le puedo pasar la hora igual de tipo number de esta forma
 
        //   console.log(efemerides)
        //   console.log(typeof(hoy))


//        // Function   tipo de dato objeto

          function ShowMessage() {    // palabra reservada function // nombre de la funcion 
        
              alert("Hello World!");    // linea de ejecucion funcioonal motor tu funcion 
           }
    
         ShowMessage();         // sin este paso nuestra funcion  no podra ser vista 


       