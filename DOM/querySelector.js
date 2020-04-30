//     querySelector()

// // // podemos usar querySelector para acceder a cualquier 
// // //  clase y id usando la misma sintaxis del css para los selectores 
// // //     . para clases y # para id
// // //  incluso podemos acceder a cualquier tag




//   ejemplo  de querySelector con el selector de clases

//           var encabezado;

//           encabezado = document.querySelector("#encabezado");

// // // // Estilos


//             encabezado.style.background = "black";
//             encabezado.style.color= "yellow";
//             encabezado.style.padding = "50px";
//             encabezado.textContent = "Bienvenido a mis cursos";


// // diferencia entre querySelector y getElementById


// ejemplo con las class .

        //  encabezado = document.querySelector(".encabezado"); // sintaxis del css

        //   encabezado.style.background = "blue";
        //   encabezado.style.color= "yellow";
        //   encabezado.style.padding = "50px";
        //   encabezado.textContent = "Bienvenido a mi divertidos  cursos";


        // // ejemplo con tag
        
        // encabezado= document.querySelector("h1"); // el elemento nombre del tag

        //  encabezado.style.background = "red";


// //  querySelestor te devuelve el primer elemento o/y clase que encuentre en caso de tener multiples elementos y clases


        //  encabezado= document.querySelector("img");
        //   encabezado= document.querySelectorAll("img");
        //  encabezado= document.querySelector(".enlace");
        //   encabezado= document.querySelectorAll(".enlace");


   

        //   console.log(encabezado);

      


//         //  sitaxis del css3  es === sintaxis de querySelector 


          //   var enlace;

          //  enlace = document.querySelector(".card img");
         
          //  enlace = document.querySelector("#principal a:first-child");
          //  enlace = document.querySelector("#principal a:last-child")
          //  enlace = document.querySelector("#principal a:nth-child(3)");
      


          //   console.log(enlace);



// //       //    querySelectorAll



          var All ;

          All = document.querySelectorAll("#principal a:nth-child(n)") //  odd even n 


      

            All.forEach(function(imapares) {

               imapares.style.backgroundColor= "red"


             });


        console.log(All);
