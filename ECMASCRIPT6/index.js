//  Default Parameters 

// parametros por defectos



let hello = (name = "pedro") => `hello ${name}`;


// hello("joaquin");
 console.log(hello("joaquin"));
  console.log(hello())


   let hello2 = (name = "joaquin", años = 3) => {
   for(let i = 0 ; i<años; i+=1){

    console.log( `hello ${name} ${i} `)

    }
   }


   hello2("jorge" , 10)

// RETOS
// crea un parametros por defecto con un funcion de flecha sencilla












// convertirla a funcion de flecha 



function add (a=3, b=5) {
    return a + b; 
}

add(4,2) // 6
add(4) // 9
add() // 8

console.log(add())