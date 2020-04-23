// Spread Operator
// operador de propagacion



// Para poder unir arreglos u objetos bajo una misma variable, 
// puedes utilizar "Spread Operator". En arreglos, creas la variable, 
// abres un corchetes y dentro, en donde quieras colocar el otro arreglo, 
// lo insertas usando tres puntos suspensivos y el nombre de la variable que contiene el arreglo. 
// Observa el siguiente ejemplo:



const array = [1, 2];
const array2 = [...array, 3, 4];
console.log(array2) // [1, 2, 3, 4] 



const numeros = [1, 2, 3, 4, 5,];
const otrosnuermos = [ 6, 7, 8, 9, 10];
const string = ["brocoli", "papa ", "zanahoria", "manzana ", "peluches" ]

console.log(numeros.concat(otrosnuermos))

// console.log([...numeros, ...otrosnuermos, ...string]) 
// console.log([...numeros, ...otrosnuermos, 11, 12, ...string ," hola a todos"])




// Para lograr esta misma operación pero con objetos,
//  utiliza los 3 puntos suspensivos y ahora coloca el nombre de la variable que 
// contenta otro objeto. Observa el siguiente ejemplo.


// const obj1 = {a: 'a', b: 'b'};
// const obj2 = {c: 'c', ...obj1};

// console.log(obj2) 


// const user = {
//       name: "joaquin",
//       apellido: "chable"
// }


// const userContact = {

//   mail:"joaquin@gmail.com",
//   faceBook:"joako"


// }

// // const fullUser =  Object.assign({}, user, userContact)
// const fullUser =  {...user, ...userContact, mail:"otromail@outlook.com"}


// console.log(fullUser)





