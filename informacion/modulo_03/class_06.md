# Manipulación del DOM

Ya sabemos escuchar eventos, pero ahora vamos a aprender a manipular elementos: cambiar su contenido, estilos, propiedades y trabajar con múltiples elementos a la vez.

## Los callbacks se ejecutan cuando ocurre el evento

Es importante entender que el código dentro del `addEventListener` no se ejecuta inmediatamente. Solo se ejecuta cuando ocurre el evento:

```javascript
console.log('1. Inicio del script');

const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  console.log('3. ¡Click en el botón!');
});

console.log('2. Fin del script');
```

## Orden de ejecución:

```markdown
1. Inicio del script
2. Fin del script
(esperando...)
3. ¡Click en el botón!  ← Solo cuando hagas click
```

## ¿Qué es un callback?

Un callback es una función que se pasa como parámetro a otra función y se ejecuta más tarde:

```javascript
// La función anónima es el callback
boton.addEventListener('click', function() {
  console.log('Este código solo se ejecuta al hacer click');
});

// El resto del código se ejecuta normalmente
console.log('Este código se ejecuta inmediatamente');
```

## Ejemplo completo:

```html
<button id="boton-importante">Haz clic</button>
```

```javascript
console.log('Inicio: Cargando el script');

const boton = document.querySelector('#boton-importante');
console.log('Botón encontrado:', boton);

boton.addEventListener('click', function() {
  console.log('¡Hiciste click!');
});

console.log('Fin: Script cargado, esperando eventos');
```

## Salida en consola:

```markdown
Inicio: Cargando el script
Botón encontrado: <button id="boton-importante">
Fin: Script cargado, esperando eventos
(usuario hace click)
¡Hiciste click!
```

## Propiedades y métodos de los elementos

Cuando recuperamos un elemento con querySelector, obtenemos acceso a muchas propiedades y métodos útiles:

```javascript
const boton = document.querySelector('#boton-importante');

// ¿Qué es boton?
console.log(boton); // <button id="boton-importante">Haz clic</button>
```

- `textContent` - Obtener o cambiar el texto

```javascript
const boton = document.querySelector('#boton-importante');

// Leer el contenido de texto
console.log(boton.textContent); // "Haz clic"

// Cambiar el contenido de texto
boton.textContent = 'Nuevo texto';
```

- `getBoundingClientRect()` - Obtener posición y tamaño

```javascript
const boton = document.querySelector('#boton-importante');

const rect = boton.getBoundingClientRect();

console.log(rect)

/* Salida: {
  width: 120,
  height: 40,
  x: 100,
  y: 200,
  top: 200,
  left: 100,
  right: 220,
  bottom: 240
} */
```

## Otras propiedades útiles:

```javascript
const boton = document.querySelector('#boton-importante');

// innerHTML - Contenido HTML interno
console.log(boton.innerHTML);

// id - El identificador
console.log(boton.id); // "boton-importante"

// className - Las clases CSS
console.log(boton.className);

// classList - Manipular clases (más adelante)
console.log(boton.classList);

// disabled - Si está deshabilitado
console.log(boton.disabled); // false

// value - Valor (para inputs)
const input = document.querySelector('#mi-input');
console.log(input.value);
```

## Cambiar el contenido de texto con textContent

Vamos a cambiar el texto del botón cuando hacemos click:

```html
<button class="button-apply-job">Aplicar a empleo</button>
```

```javascript
const boton = document.querySelector('.button-apply-job');

boton.addEventListener('click', function() {
  // Cambiar el texto del botón
  boton.textContent = '¡Aplicado!';
});
```

Resultado:

- Antes del click: Aplicar a empleo
- Después del click: ¡Aplicado!

## Ejemplo más completo:

```javascript
const boton = document.querySelector('#boton-importante');

let aplicado = false;

boton.addEventListener('click', function() {
  if (aplicado) {
    boton.textContent = 'Aplicar a empleo';
    aplicado = false;
  } else {
    boton.textContent = '¡Aplicado!';
    aplicado = true;
  }
});
```

## Cambiar estilos con la propiedad `style`

Podemos cambiar los estilos CSS directamente desde JavaScript:

```javascript
const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  boton.textContent = '¡Aplicado!';
  
  // Cambiar el color de fondo
  boton.style.backgroundColor = '#22c55e'; // Verde
});
```

## ⚠️ Importante: Nombres de propiedades CSS

En JavaScript, las propiedades CSS con guiones se escriben en camelCase:

|CSS | JavaScript |
|----|------|
|background-color | backgroundColor |
|font-size|	fontSize|
|border-radius|	borderRadius |
|margin-top|	marginTop |
|padding-left|	paddingLeft |

## Ejemplo con múltiples estilos:

```javascript
const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  boton.textContent = '¡Aplicado!';
  boton.style.backgroundColor = '#22c55e';
  boton.style.color = 'white';
  boton.style.border = 'none';
  boton.style.cursor = 'not-allowed';
});
```

## Cambiar propiedades: `disabled`
Podemos cambiar propiedades del elemento, como `disabled`:

```javascript
const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  boton.textContent = '¡Aplicado!';
  boton.style.backgroundColor = '#22c55e';
  
  // Deshabilitar el botón para que no se pueda volver a hacer click
  boton.disabled = true;
});
```

## ¿Qué hace disabled?

Cuando un botón tiene `disabled = true`:

- ❌ No se puede hacer click
- ❌ No recibe eventos del teclado
- 🎨 Cambia la apariencia (suele verse más opaco)
- 🖱️ El cursor cambia (generalmente a not-allowed)

## Trabajar con múltiples elementos: Classes

Hasta ahora hemos trabajado con un solo botón usando `id`. Pero, ¿qué pasa si tenemos varios botones?

### El problema con IDs:

```html
<!-- ❌ No podemos tener múltiples elementos con el mismo ID -->
<button id="boton-aplicar">Aplicar</button>
<button id="boton-aplicar">Aplicar</button>
<button id="boton-aplicar">Aplicar</button>
```

### La solución: Usar clases

```html
<!-- ✅ Podemos tener múltiples elementos con la misma clase -->
<button class="button-apply-job">Aplicar</button>
<button class="button-apply-job">Aplicar</button>
<button class="button-apply-job">Aplicar</button>
```

## querySelector vs querySelectorAll

- `querySelector` - Solo el primero

```javascript
// Selecciona solo el PRIMER botón que encuentre
const boton = document.querySelector('.button-apply-job');

console.log(boton); // <button class="button-apply-job">Aplicar</button>
```

Si hay múltiples elementos con esa clase, solo devuelve el primero.

- `querySelectorAll` - Todos los elementos

```javascript
// Selecciona TODOS los botones con esa clase
const botones = document.querySelectorAll('.button-apply-job');

console.log(botones); // NodeList(3) [button, button, button]
console.log(botones.length); // 3
```

Devuelve un NodeList con todos los elementos que coinciden.

## ¿Qué es un NodeList?

Un NodeList es una colección de elementos del DOM. Es similar a un array, pero no es exactamente lo mismo:

```javascript
const botones = document.querySelectorAll('.button-apply-job');

// Tiene .length como los arrays
console.log(botones.length); // 3

// Podemos acceder por índice
console.log(botones[0]); // Primer botón
console.log(botones[1]); // Segundo botón
console.log(botones[2]); // Tercer botón

// Tiene forEach (pero no map, filter, reduce, etc.)
botones.forEach(function(boton) {
  console.log(boton);
});
```

## Usar forEach con el NodeList

Para añadir eventos a todos los botones, usamos `forEach`:

```html
<button class="button-apply-job">Aplicar - Frontend</button>
<button class="button-apply-job">Aplicar - Backend</button>
<button class="button-apply-job">Aplicar - Fullstack</button>
```

```javascript
// Seleccionar todos los botones
const botones = document.querySelectorAll('.button-apply-job');

// Añadir evento a cada uno
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    console.log('Click en:', boton.textContent);
    
    // Cambiar este botón específico
    boton.textContent = '¡Aplicado!';
    boton.style.backgroundColor = '#22c55e';
    boton.disabled = true;
  });
});
```

## ¿Cómo funciona?

- `querySelectorAll` devuelve un NodeList con todos los botones
- `forEach` itera sobre cada botón
- Para cada botón, añadimos un `addEventListener`
- Cuando hacemos click en cualquier botón, solo ese botón cambia

## Diferencias clave: querySelector vs `querySelectorAll`

|`querySelector` | `querySelectorAll` |
|-----------------|--------------------|
| Devuelve un solo elemento | Devuelve un NodeList |
| Si hay múltiples, devuelve el primero | Devuelve todos los elementos |
| Si no encuentra, devuelve `null` | Si no encuentra, devuelve `NodeList` vacío |
| Puedes usar `.addEventListener` directamente | Necesitas `forEach` para cada elemento |

## Ejemplos:

```javascript
// querySelector - Solo el primero
const primerBoton = document.querySelector('.button-apply-job');
primerBoton.addEventListener('click', function() {
  console.log('Solo funciona en el primer botón');
});

// querySelectorAll - Todos
const todosLosBotones = document.querySelectorAll('.button-apply-job');
todosLosBotones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    console.log('Funciona en todos los botones');
  });
});
```

## Arrow functions en forEach

Podemos usar arrow functions para código más limpio:

```javascript
// Función tradicional
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    boton.textContent = '¡Aplicado!';
  });
});

// Arrow function
botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    boton.textContent = '¡Aplicado!';
  });
});
```

## Errores comunes

1. Intentar usar `addEventListener` en un NodeList

```javascript
// ❌ MAL: No puedes añadir eventos directamente al NodeList
const botones = document.querySelectorAll('.button-apply-job');
botones.addEventListener('click', function() { /* ... */ });
// Error: botones.addEventListener is not a function

// ✅ BIEN: Usa forEach
botones.forEach(function(boton) {
  boton.addEventListener('click', function() { /* ... */ });
});
```

2. Olvidar el punto en el selector de clase

```javascript
// ❌ MAL: Busca una etiqueta <button-apply-job>
const botones = document.querySelectorAll('button-apply-job');

// ✅ BIEN: Busca elementos con class="button-apply-job"
const botones = document.querySelectorAll('.button-apply-job');
```

Siguiente paso: Vamos a entender el concepto de event bubbling y cómo manejar eventos en elementos padres para simplificar nuestro código.