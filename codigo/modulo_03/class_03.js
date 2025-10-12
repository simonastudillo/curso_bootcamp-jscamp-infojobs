// Funciones
// function saludar(){
//    // Cuerpo de la función
// }

function sumar(a, b){
   return a + b;
}

const result = sumar(1, 3); // 4
console.log(result);

function saludar(nombre){
   console.log("¡Hola, " + nombre + "!");
}

// Console.log
// Es una función ya existe en JavaScript y en los navegadores
// console.log("Hola Mundo");

let username = 'Midu';
console.log(username);

//  Diferentes logs
console.log("Log normal");
console.info("Log de información");
console.warn("Log de advertencia");
console.time("Tiempo de ejecución");
console.timeEnd("Tiempo de ejecución");
console.error("Log de error");
console.table({a: 1, b: 2, c: 3});
console.count("Contador");

// Funciones especiales
alert("Hola Mundo");
confirm("¿Estás seguro?");
const age = prompt("¿Cuántos años tienes?");
console.log(`Tienes ${age} años`);