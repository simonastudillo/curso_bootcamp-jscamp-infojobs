# Optional Chaining

Cuando trabajamos con el DOM, a veces un elemento puede no existir. Si intentamos acceder a métodos o propiedades de un elemento que es `null`, obtenemos un error. El optional chaining (`?.`) nos ayuda a evitar estos errores.

## El problema: Elementos que no existen

Imagina que intentamos seleccionar un botón que no está en la página:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <script type="module">
    const button = document.querySelector('#boton-importante');
    
    button.addEventListener('click', function() {
      console.log('Click');
    });
  </script>
</head>
<body>
  <h1>Mi página</h1>
  <!-- ❌ No hay ningún botón con id="boton-importante" -->
</body>
</html>
```

## ❌ Error:

```javascript
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
```

## ¿Por qué falla?

```javascript
const button = document.querySelector('#boton-importante');
console.log(button); // null

// Intentamos hacer null.addEventListener()
button.addEventListener('click', function() { /* ... */ });
// ❌ Error: No puedes llamar métodos en null
```

## Solución tradicional: Verificar con if

La forma tradicional es verificar si el elemento existe antes de usarlo:

```javascript
const button = document.querySelector('#boton-importante');

if (button) {
  button.addEventListener('click', function() {
    console.log('Click en el botón');
  });
}
```

### ✅ Ahora funciona:
- Si `button` existe → Se añade el evento
- Si `button` es `null` → No hace nada (no hay error)

## Ejemplo con múltiples verificaciones:

```javascript
const button = document.querySelector('#boton-importante');

if (button) {
  button.addEventListener('click', function() {
    console.log('Click');
  });
}

const input = document.querySelector('#mi-input');

if (input) {
  input.addEventListener('input', function() {
    console.log('Escribiendo...');
  });
}

const form = document.querySelector('#mi-formulario');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
}
```

Problema: Mucho código repetitivo con los if.

## Optional Chaining: La solución moderna

El optional chaining (`?.`) es un operador que verifica automáticamente si algo existe antes de acceder a sus propiedades o métodos.

### Sintaxis:

```javascript
objeto?.propiedad
objeto?.metodo()
```

### ¿Cómo funciona?

```javascript
const button = document.querySelector('#boton-importante');

// Con optional chaining
button?.addEventListener('click', function() {
  console.log('Click');
});
```
### Comportamiento:

- Si button existe (no es `null` ni `undefined`) → Ejecuta `addEventListener`
- Si button es `null` o `undefined` → No hace nada (no hay error)


## Comparación: Con y sin optional chaining

### Sin optional chaining:

```javascript
const button = document.querySelector('#boton-importante');

if (button) {
  button.addEventListener('click', function() {
    console.log('Click');
  });
}
```

### Con optional chaining:

```javascript
const button = document.querySelector('#boton-importante');

button?.addEventListener('click', function() {
  console.log('Click');
});
```

Resultado: Exactamente el mismo comportamiento, pero con menos código.

## Optional chaining con propiedades

No solo funciona con métodos, también con propiedades:

```javascript
const button = document.querySelector('#boton-importante');

// Acceder a propiedades
console.log(button?.textContent); // undefined si no existe
console.log(button?.id);          // undefined si no existe
console.log(button?.disabled);    // undefined si no existe

// Cambiar propiedades
button?.classList.add('activo');
button?.setAttribute('data-applied', 'true');
```

## Optional chaining encadenado

Puedes usar ?. múltiples veces en cadena:

```javascript
const container = document.querySelector('#container');

// Acceder a propiedades anidadas de forma segura
const width = container?.firstChild?.getBoundingClientRect()?.width;

console.log(width); // undefined si cualquier parte es null
```

## Sin optional chaining:

```javascript
let width;

if (container) {
  if (container.firstChild) {
    const rect = container.firstChild.getBoundingClientRect();
    if (rect) {
      width = rect.width;
    }
  }
}

console.log(width);
```