# Delegación de Eventos

En la clase anterior vimos cómo añadir eventos a múltiples botones usando `querySelectorAll` y `forEach`. Pero hay una forma más eficiente: la delegación de eventos.

## Repaso: El método anterior

Hasta ahora, añadíamos un evento a cada botón:

```javascript
const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    boton.textContent = '¡Aplicado!';
    boton.disabled = true;
  });
});
```

## Problemas con este enfoque:

- 🐌 Rendimiento: Si tenemos 100 botones, creamos 100 event listeners
- 🔄 Elementos dinámicos: Si añadimos botones después, no tendrán el evento
- 💾 Memoria: Cada listener consume memoria

```javascript
// Si añadimos un botón después...
const nuevoBoton = document.createElement('button');
nuevoBoton.className = 'button-apply-job';
nuevoBoton.textContent = 'Aplicar';
document.body.appendChild(nuevoBoton);

// ❌ Este botón NO tendrá el evento!
```

## ¿Qué es el Event Bubbling?

El Event Bubbling (burbujeo de eventos) es un mecanismo del navegador donde los eventos se propagan desde el elemento más específico hacia los elementos padre.

Visualización:

```html
<body>                    ← 3. Luego sube al body
  <div class="container"> ← 2. Luego sube al div
    <button>Click</button> ← 1. Click aquí primero
  </div>
</body>
```

Cuando haces `click` en el button, el evento ocurre en este orden:

- ✅ En el button (donde hiciste click)
- ⬆️ En el div.container (padre)
- ⬆️ En el body (abuelo)
- ⬆️ En el html (bisabuelo)
- ⬆️ En el document (raíz)

El evento “burbujea” hacia arriba como las burbujas en el agua.

## Ejemplo de Event Bubbling

```html
<div id="container">
  <button id="boton">Click aquí</button>
</div>
```

```javascript
const container = document.querySelector('#container');
const boton = document.querySelector('#boton');

// Evento en el contenedor
container.addEventListener('click', function() {
  console.log('2. Click en el container');
});

// Evento en el botón
boton.addEventListener('click', function() {
  console.log('1. Click en el botón');
});
```

Al hacer click en el botón, la consola muestra:

```markdown
1. Click en el botón
2. Click en el container
```

El evento primero ocurre en el botón y luego “burbujea” al contenedor.

## Delegación de Eventos: La solución

La delegación de eventos aprovecha el event bubbling para añadir un solo evento al elemento padre, en lugar de muchos eventos en los hijos.

- Después (un solo evento):

```javascript
// ✅ Un solo evento en el padre
const container = document.querySelector('#jobs-list');

container.addEventListener('click', function(event) {
  // Detectamos si el click fue en un botón
  if (event.target.classList.contains('button-apply-job')) {
    // Código aquí
  }
});
```

## `event.target`: El elemento donde se hizo click

Cuando ocurre un evento, podemos saber exactamente dónde se hizo click usando event.target:

```javascript
container.addEventListener('click', function(event) {
  console.log('Hiciste click en:', event.target);
});
```

## `event.target` vs `event.currentTarget`

```javascript
const container = document.querySelector('#container');

container.addEventListener('click', function(event) {
  console.log('target:', event.target);           // Donde hiciste click
  console.log('currentTarget:', event.currentTarget); // Donde está el listener
});
```

- `event.target`: El elemento exacto donde hiciste click
- `event.currentTarget`: El elemento donde añadiste el addEventListener

## Desglosando el código

En el vídeo verás que usamos este patrón:

```javascript
const jobsList = document.querySelector('.jobs-list');

jobsList.addEventListener('click', function(event) {
  //                                         │
  //                                         └── El evento contiene información
  
  if (event.target.classList.contains('button-apply-job')) {
  //     │        │          │
  //     │        │          └── ¿Tiene esta clase?
  //     │        └───────────── Lista de clases del elemento
  //     └────────────────────── Elemento donde se hizo click
    
    const boton = event.target; // El botón específico
    
    boton.textContent = '¡Aplicado!';
    boton.disabled = true;
  }
});
```

## ¿Cómo funciona?

- Añadimos un evento al contenedor padre (`.jobs-list`)
- Cuando hacemos click en cualquier lugar del contenedor, se ejecuta el callback
- Usamos `event.target` para saber dónde hicimos click exactamente
- Con `classList.contains()` verificamos si es un botón de aplicar
- Si lo es, aplicamos los cambios solo a ese botón

## Prevenir el bubbling: `stopPropagation()`

A veces queremos que el evento no burbujee hacia arriba:

```javascript
const container = document.querySelector('#container');
const boton = document.querySelector('#boton');

container.addEventListener('click', function() {
  console.log('Click en container');
});

boton.addEventListener('click', function(event) {
  console.log('Click en botón');
  
  // Detener el bubbling
  event.stopPropagation();
});
```

#### Sin stopPropagation():

```markdown
Click en botón
Click en container  ← El evento sube
```

### Con stopPropagation():

```markdown
Click en botón  ← El evento se detiene aquí
```

## ⚠️ Cuidado con `stopPropagation()`

Usar `stopPropagation()` puede causar problemas:

```javascript
// Evento en el documento (para cerrar menús, por ejemplo)
document.addEventListener('click', function() {
  console.log('Cerrar menú');
});

// Si detienes la propagación aquí...
boton.addEventListener('click', function(event) {
  event.stopPropagation(); // ❌ El evento del document no se ejecuta
});
```

Mejor práctica: Usa delegación de eventos en lugar de stopPropagation().

## ¿Cuándo usar cada método?

### Usa forEach + addEventListener cuando:

- 👶 Estás aprendiendo
- 🎯 Son muy pocos elementos (2-3)
- 📌 Los elementos nunca cambian
- 🏃 Necesitas algo rápido y simple

###  Usa Delegación de eventos cuando:

- 📊 Tienes muchos elementos (>10)
- 🔄 Los elementos se añaden/eliminan dinámicamente
- ⚡ Necesitas mejor rendimiento
- 🏗️ Estás construyendo algo escalable


🚀 Siguiente paso: Aprenderemos a trabajar con formularios, validar datos y prevenir el envío por defecto.