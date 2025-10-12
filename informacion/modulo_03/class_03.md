# Funciones en JavaScript

Las funciones son bloques de código reutilizables que realizan una tarea específica. Son fundamentales en JavaScript y nos permiten organizar nuestro código de forma eficiente.

## ¿Qué es una función?

Una función es un conjunto de instrucciones que:

- Realizan una tarea específica
- Pueden recibir datos de entrada (parámetros)
- Pueden devolver un resultado
- Se pueden reutilizar múltiples veces

## Crear tu primera función

Vamos a crear una función simple que suma dos números:

```javascript
function sumar(a, b) {
  return a + b;
}
```

### Desglosando la función
```markdown
function sumar(a, b) {
//       │     │  │
//       │     │  └── Segundo parámetro
//       │     └───── Primer parámetro
//       └─────────── Nombre de la función

  return a + b;
  //     └──┴──── Operación que se realiza
}
```

## Usar (llamar) la función

```javascript
function sumar(a, b) {
  return a + b;
}

// Llamar a la función
let resultado = sumar(5, 3);
console.log(resultado); // 8

// Llamar con otros valores
console.log(sumar(10, 20)); // 30
console.log(sumar(100, 50)); // 150
```

## Función sin parámetros

Algunas funciones no necesitan recibir datos:

```javascript
function saludar() {
  console.log("¡Hola, mundo!");
}

// Llamar a la función
saludar(); // ¡Hola, mundo!
saludar(); // ¡Hola, mundo!
saludar(); // ¡Hola, mundo!
```

## Función con parámetros

Las funciones pueden recibir uno o más parámetros:

```javascript
function saludarPersona(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludarPersona("Miguel"); // ¡Hola, Miguel!
saludarPersona("Ana"); // ¡Hola, Ana!
saludarPersona("Carlos"); // ¡Hola, Carlos!
```

## Múltiples parámetros

```javascript
function presentarse(nombre, edad) {
  console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}

presentarse("Miguel", 25); // Hola, soy Miguel y tengo 25 años
presentarse("Ana", 30); // Hola, soy Ana y tengo 30 años
```

## La palabra clave return

`return` devuelve un valor desde la función y termina su ejecución:

```javascript
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 5);
console.log(resultado); // 20
```

## Función sin return

Si una función no tiene return, devuelve undefined:

```javascript
function mostrarMensaje(mensaje) {
  console.log(mensaje);
  // No hay return
}

let resultado = mostrarMensaje("Hola");
console.log(resultado); // undefined
```

## return termina la función

El código después de return no se ejecuta:

```javascript
function ejemplo() {
  console.log("Esto se ejecuta");
  return "Fin";
  console.log("Esto NO se ejecuta"); // Nunca llega aquí
}

ejemplo();
// Imprime: "Esto se ejecuta"
```

## Funciones que ya existen

JavaScript tiene muchas funciones incorporadas que podemos usar sin necesidad de crearlas. No debemos crear funciones con estos nombres porque ya existen.

### console.log()

Imprime mensajes en la consola:

```javascript
console.log("Hola mundo");
console.log("El resultado es:", 42);
console.log("Nombre:", "Miguel", "Edad:", 25);
```

### console.error()

Imprime mensajes de error en la consola:

```javascript
console.error("¡Algo salió mal!");
console.error("Error:", "No se encontró el archivo");
```

### console.warn()

Imprime advertencias en la consola:

```javascript
console.warn("Advertencia: Esta función está obsoleta");
console.warn("Cuidado: El valor es muy alto");
```

### console.table()

Muestra datos en formato de tabla:

```javascript
const usuarios = [
  { nombre: "Miguel", edad: 25 },
  { nombre: "Ana", edad: 30 }
];

console.table(usuarios);
```

### alert()

Muestra una ventana emergente con un mensaje:

```javascript
alert("¡Bienvenido a mi sitio web!");
alert("El resultado es: " + (5 + 3));
```

> Nota: alert() bloquea la ejecución del código hasta que el usuario cierre la ventana.

### prompt()

Pide al usuario que ingrese un valor:

```javascript
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre);

let edad = prompt("¿Cuántos años tienes?");
console.log("Tienes " + edad + " años");
```

> Nota: prompt() siempre devuelve un string (texto), incluso si el usuario ingresa un número.

### confirm()

Pide al usuario que confirme algo (devuelve true o false):

```javascript
let respuesta = confirm("¿Estás seguro de eliminar este elemento?");

if (respuesta) {
  console.log("Elemento eliminado");
} else {
  console.log("Cancelado");
}
```

## Practicar en GoJS.app

Abre GoJS.app y prueba estos ejercicios:

- Ejercicio 1: Función básica

```javascript
function saludar() {
  console.log("¡Hola desde mi función!");
}

saludar();
```

- Ejercicio 2: Función con parámetros

```javascript
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3));
console.log(sumar(10, 20));
console.log(sumar(100, 200));
```

- Ejercicio 3: Calculadora

```javascript
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
```

- Ejercicio 4: Con prompt (solo funciona en el navegador)

```javascript
function pedirNombre() {
  let nombre = prompt("¿Cuál es tu nombre?");
  alert("¡Hola, " + nombre + "!");
}

// Descomentar para probar en navegador
// pedirNombre();
```