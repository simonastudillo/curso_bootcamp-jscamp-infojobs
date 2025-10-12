# Tipos de datos y variables

En JavaScript, necesitamos almacenar información para trabajar con ella. Para esto usamos variables y entendemos los diferentes tipos de datos que podemos guardar.

## Tipos de datos en JavaScript

JavaScript tiene varios tipos de datos primitivos. Veamos los más comunes:

1. Number (Número)
Representa tanto números enteros como decimales:

```javascript
let edad = 25;
let precio = 19.99;
let temperatura = -5;
let resultado = 10 / 3; // 3.3333...

console.log(edad); // 25
console.log(precio); // 19.99
```

2. String (Cadena de texto)

Representa texto. Puede usar comillas simples, dobles o backticks:

```javascript
let nombre = 'Miguel';
let apellido = "Ángel";
let mensaje = `Hola, soy ${nombre}`; // Template string

console.log(nombre); // Miguel
console.log(mensaje); // Hola, soy Miguel
```

3. Boolean (Booleano)

Solo puede ser true (verdadero) o false (falso):

```javascript
let esMayorDeEdad = true;
let tieneLicencia = false;
let estaLogueado = true;

console.log(esMayorDeEdad); // true
console.log(tieneLicencia); // false
```

4. Undefined (Indefinido)

Una variable que ha sido declarada pero no tiene valor:

```javascript
let usuario;
console.log(usuario); // undefined

let direccion;
console.log(direccion); // undefined
```

5. Null (Nulo)

Representa la ausencia intencional de un valor:

```javascript
let respuesta = null; // Intencionalmente sin valor
console.log(respuesta); // null
```

### Diferencia entre undefined y null

```javascript
let sinDefinir; // undefined = no se ha asignado valor
let sinValor = null; // null = intencionalmente vacío

console.log(sinDefinir); // undefined
console.log(sinValor); // null
``` 
- `undefined`: JavaScript lo asigna automáticamente cuando no hay valor
- `null`: Tú lo asignas intencionalmente para indicar “sin valor”

Es raro pero también puedes asignar `undefined` manualmente, aunque no es recomendable.

6. BigInt (Entero grande)

Para números enteros muy grandes que exceden el límite de Number:

```javascript
let numeroNormal = 9007199254740991; // Límite máximo seguro
let numeroGrande = 9007199254740992n; // BigInt (nota la 'n' al final)

console.log(numeroNormal); // 9007199254740991
console.log(numeroGrande); // 9007199254740992n
```

## ¿Por qué es necesario BigInt?

JavaScript tiene un límite para los números que puede representar con precisión. El número máximo seguro es:

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

Si intentas usar números más grandes, pierdes precisión:

```javascript
// Sin BigInt - pierde precisión
let grande1 = 9007199254740992;
let grande2 = 9007199254740993;
console.log(grande1 === grande2); // true (¡ERROR! deberían ser diferentes)

// Con BigInt - mantiene precisión
let grandeBI1 = 9007199254740992n;
let grandeBI2 = 9007199254740993n;
console.log(grandeBI1 === grandeBI2); // false (correcto)
```

## ¿Cuándo usar BigInt?

- Operaciones con números muy grandes (IDs de base de datos, criptografía)
- Cálculos financieros que requieren alta precisión
- Trabajar con timestamps en nanosegundos

```javascript
// Ejemplo práctico: ID de Twitter
let tweetId = 1234567890123456789n;
console.log(tweetId); // 1234567890123456789n
```

## Verificar el tipo de dato

Usa `typeof` para saber el tipo de un valor:

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hola"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (esto es un bug histórico)
console.log(typeof 123n); // "bigint"
```

> Nota: `typeof null` devuelve "object" por un error histórico de JavaScript que no se puede corregir por compatibilidad.

## Variables: let y const

Para almacenar datos en JavaScript, usamos variables. Hay dos formas principales de declararlas: `let` y `const`.

### `let` - Variable que se puede reasignar

`let` permite declarar una variable cuyo valor puede cambiar:

```javascript
let edad = 25;
console.log(edad); // 25

// Puedes reasignar el valor
edad = 26;
console.log(edad); // 26

edad = 27;
console.log(edad); // 27
```

### Ejemplo práctico con let

```javascript
let contador = 0;
console.log(contador); // 0

contador = contador + 1; // Incrementar
console.log(contador); // 1

contador = contador + 1;
console.log(contador); // 2
```

### `const` - Variable que NO se puede reasignar

- `const` declara una variable cuyo valor no puede cambiar (es constante):

```javascript
const PI = 3.14159;
console.log(PI); // 3.14159

// ❌ Esto causará un error
PI = 3.14; // TypeError: Assignment to constant variable
```

### Ejemplo práctico con const

```javascript
const nombre = "Miguel";
const apellido = "Ángel";

console.log(nombre); // Miguel
console.log(apellido); // Ángel

// ❌ Esto causará un error
nombre = "Juan"; // TypeError: Assignment to constant variable
```

## ¿Cuándo usar `let` y cuándo `const`?

Usa const cuando:

- El valor no va a cambiar
- Es un valor constante (PI, configuración, etc.)
- Quieres evitar reasignaciones accidentales

```javascript
const MAX_USUARIOS = 100;
const API_URL = "https://api.ejemplo.com";
const NOMBRE_APP = "MiApp";
```

Usa let cuando:

- El valor va a cambiar
- Necesitas reasignar la variable
- Es un contador, acumulador, etc.

```javascript
let contador = 0;
let suma = 0;
let usuarioActual = null;
```

## Regla práctica

Usa const por defecto. Solo cambia a let si descubres que necesitas reasignar el valor.

```javascript
// ✅ Buena práctica: empieza con const
const nombre = "Miguel";
const edad = 25;

// Si necesitas cambiar el valor, usa let
let contador = 0;
contador = contador + 1;
```

## Nombres de variables

Reglas para nombrar variables

✅ Permitido:

```javascript
let nombre;
let nombreCompleto;
let edad2;
let _privado;
let $precio;
```

❌ No permitido:

```javascript
let 2edad; // No puede empezar con número
let nombre-completo; // No puede tener guiones
let let; // No puede ser palabra reservada
let class; // No puede ser palabra reservada
```

### Convenciones de nombres (camelCase)

En JavaScript, usamos camelCase para nombres de variables:

```javascript
// ✅ Bien (camelCase)
let nombreCompleto = "Miguel Ángel";
let edadUsuario = 25;
let precioTotal = 99.99;

// ❌ Evitar (otras convenciones)
let nombre_completo = "Miguel"; // snake_case
let NombreCompleto = "Miguel"; // PascalCase
```

### Nombres descriptivos

Usa nombres que describan claramente qué contiene la variable:

```javascript
// ❌ Mal: nombres poco descriptivos
let x = "Miguel";
let a = 25;
let temp = 99.99;

// ✅ Bien: nombres descriptivos
let nombre = "Miguel";
let edad = 25;
let precioProducto = 99.99;
```

### Constantes en mayúsculas

Por convención, las constantes que no cambiarán nunca se escriben en MAYÚSCULAS:

```javascript
const PI = 3.14159;
const MAX_INTENTOS = 3;
const API_URL = "https://api.ejemplo.com";
const DIAS_SEMANA = 7;
```