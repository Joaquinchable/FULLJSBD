// RestParameter


// En algunos casos, necesitarás conocer todos los argumentos que se 
// colocan dentro de una función, sin saber la cantidad exacta. Para poder extraer 
// todos los argumentos puedes utilizar el parámetro "Rest", el cual implica colocar como 
// parámetro en la declaración 
// de la función tres puntos suspensivos y luego la palabra "args" (...args).





// const mostraDatos = (nombre ,edad, correo, pais) =>{

// return nombre + " " + edad + " " + correo + " " + pais


// }


// mostraDatos("carlos",43, "correo@correo" , "Mexico")

// console.log( mostraDatos("carlos",43, "correo@correo" , "Mexico"))







const mostraDatos = (...args) =>{

    return args
    
    
    }
    
    
    mostraDatos("carlos",43, "correo@correo" , "Mexico")
    
    console.log( mostraDatos("carlos",43, "correo@correo" , "Mexico"))



    // Reto crear un RestParameter