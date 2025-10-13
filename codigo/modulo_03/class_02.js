// Tipos de datos

console.log("Simón"); // Cadena de texto (string)
// Template strings
console.log(`Hola, mi nombre es
Simón`);
// Números
console.log(1000); // Entero (integer)
console.log(3.14); // Decimal (float)
console.log(2.5e6); // Notación científica (2.5 * 10^6)
// Error de Javascript
console.log(20000000000000000999 + 1); // 20000000000000000000 => Error de precisión en números muy grandes
// Número más grande en JS
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(20000000000000000999n + 1); // 20000000000000001000n => BigInt (n al final)
// Booleanos
console.log(true); // Verdadero
console.log(false); // Falso
//  Listas
console.log(["Simón", "Ana", "Luis"]); // Array
// Objetos
console.log({ nombre: "Simón", edad: 33, casado: false }); // Object
// Nulo y indefinido
console.log(null); // Ausencia intencional de valor
console.log(undefined); // Valor no asignado
// Diferencia entre null y undefined
console.log(null == undefined); // true => Son iguales en valor (no en tipo)
console.log(null === undefined); // false => No son iguales en tipo

// Variables modificables
let nombre = "Simón"; // Variable que puede cambiar su valor
let edad = 33;

nombre = "Pedro"; // Reasignación de valor
edad = 34;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// Variables inmodificables
const pi = 3.14; // Variable que no puede cambiar su valor
// pi = 3.1416; // Error: Assignment to constant variable.
console.log(`El valor de pi es ${pi}.`);