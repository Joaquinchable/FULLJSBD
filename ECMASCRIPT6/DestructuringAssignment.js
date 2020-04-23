// DestructuringAssignment


// La sintaxis de asignación desestructurante (destructuring assignment) 
// es una expresión que posibilita la extracción de datos, 
// tanto de arreglos como de propiedades de objetos, en variables distintas.

// La destructuración en arreglos permite, a través de colocar de lado de
//  la sintaxis de variable un par de corchetes, generar variables rápidamente 
//  sin tener que hacerlas una por una.


const direccion = [221, 'Roma Norte', 'Mexico'];

const [ numeroCasa, , ciudad ] = direccion;

console.log(numeroCasa, ciudad)  //  221 'Mexico'


// la destructuración en objetos es muy simliar, sólo que el nombre de la
//  variable es la propiedad (key) de cada elemento del objeto.


const estudiante = {
   nombre: 'Joaquin',
   apellido: 'Chable',
   pais: 'Mexico' };

const { nombre, apellido, pais } = estudiante;

console.log(nombre, apellido, pais); 