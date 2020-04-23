// Template Strings 



// En lugar de generar textos con comillas " y concatenar las variables, ahora podremos 
// utilizar una versión simplificada. Utilizaremos una comilla inclinada y dentro colocaremos nuestro texto 
// plano. Cuando necesitemos usar variables, funciones o algún tipo de ejecución Javascript, 
// podemos hacerlo utilizando la sintaxis${}`. Dentro de las llaves irían todas las sentencias.

var nombre="cecilio";
var plantilla= `hola que tal estas ${nombre}`;


console.log(plantilla);






const titulo = '<h1>Hola mundo</h1>'
const mensaje = `${titulo}`

document.getElementById('h1').innerHTML= mensaje;

const suma = `${3*3} es el resultado de 3 * 3`


console.log(suma);





//Template literal / String literal

const producto1 = "Pizaa",
      precio1  =   30,
      producto2 = "Hambuerguesa",
      precio2 =  40;


    let html ;
    
    
    html = '<ul>' +
            '<li>Orden :' + producto1 + '</li>' +
            '<li>Precio :' + precio1 + '</li>' +
            '<li>Orden :' + producto2 + '</li>' +
            '<li>Precio :' + precio2 + '</li>' +
            '<li>Total:' + (precio1 + precio2) + '</li>' +
            '</ul>';

            // console.log(html);
            // document.write(html)

            
    document.getElementById('app').innerHTML= html;



 let html2 ;


   html2 = `

       <ul>
          <li>Orden: ${producto1}</li> 
          <li>Precio: ${precio1}</li>
          <li>Orden: ${producto2}</li>
          <li>Precio: ${precio2} </li>
           <li>Total: ${total(precio1 , precio2)}</li>
        </ul>
   
       ` ;


function total(precio1,precio2){
   return precio1 + precio2
}

document.getElementById('app2').innerHTML= html2;



// Digamos que tenemos una API para consumir una lista de usuarios y 
// necesitamos renderear dicha 
// información en una página web usando JavaScript. 
// Para esto tenemos varias alternativas de cómo generar nuestro markup, 
// pero sin lugar a duda la más simple es a través de template strings.

// Los template strings fueron introducidos en la especificación de ES2015 
// y nos permiten interpolar valores dentro de un string. Lo que antes realizabamos 
// de esta forma:


// reto


const joaquin = {
       name: "Joaquin",
       age: 31,
       hobby: "play the guitar"

}



function introduceYourselfe(user){
return "hello , my name is " + 
        user.name + ",I am " +
        user.age  + " years old and I like " +
        user.hobby + ".";
}


introduceYourselfe(joaquin)

console.log(introduceYourselfe(joaquin))
document.write(introduceYourselfe(joaquin))

// Ahora podemos hacerlo de manera más sencilla a través de template strings:


function introduceYourselfe(user){
    return `hello , my name is   
            ${user.name} ,I am 
            ${user.age}    years old and I like  
            ${user.hobby} `
    }

    const alberto = {
        name: "Alberto",
        age: 32,
        hobby: "play the bass"
 
 }


introduceYourselfe(alberto)

console.log(introduceYourselfe(alberto))
document.write(introduceYourselfe(alberto))