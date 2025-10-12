## Eventos y JavaScript en el navegador

Hasta ahora hemos visto JavaScript de forma aislada, pero el verdadero poder de JavaScript viene cuando interactuamos con la página web y respondemos a las acciones del usuario.

## El atributo `id` en HTML

El atributo `id` sirve para identificar de forma única un elemento en la página. Solo puede haber un elemento con cada id en toda la página.

## Sintaxis básica

```html
<button id="boton-importante">Haz clic aquí</button>
```

- El `id` debe ser único en toda la página
- Se escribe sin espacios
- Por convención, usamos kebab-case: mi-boton, menu-principal, etc.


## Ejemplo con múltiples elementos

```html
<header id="cabecera-principal">
  <h1 id="titulo-pagina">Mi Sitio Web</h1>
  <nav id="navegacion-principal">
    <button id="boton-menu">Menú</button>
  </nav>
</header>

<main id="contenido-principal">
  <button id="boton-importante">Click aquí</button>
</main>
```

❌ Error común: IDs duplicados

```html
<!-- ❌ MAL: No puede haber dos elementos con el mismo id -->
<button id="boton">Botón 1</button>
<button id="boton">Botón 2</button>

<!-- ✅ BIEN: Cada elemento tiene un id único -->
<button id="boton-1">Botón 1</button>
<button id="boton-2">Botón 2</button>
```

## Acceder a elementos con id en CSS

En CSS, usamos el símbolo # para seleccionar elementos por su `id`:

```html
<button id="boton-importante">Haz clic</button>
```

```css
/* Seleccionar por ID con # */
#boton-importante {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darkblue;
  }
}
```

## Especificidad: ID vs Clase

Los IDs tienen mayor especificidad que las clases:

```html
<button id="mi-boton" class="btn">Click</button>
```

```css
/* Especificidad: 10 */
.btn {
  background: red;
}

/* Especificidad: 100 - GANA */
#mi-boton {
  background: blue; /* Este se aplica */
}
```

## Añadir JavaScript a una página HTML

Hay varias formas de incluir JavaScript en tu HTML. Veamos la primera:

- Usando la etiqueta `<script>` en el `<head>`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
  
  <script>
    // JavaScript aquí
    console.log("Hola desde JavaScript");
  </script>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
</body>
</html>
```

## Seleccionar elementos con `querySelector`

Para interactuar con elementos HTML desde JavaScript, primero debemos seleccionarlos:

```javascript
// Seleccionar por ID (con #)
const boton = document.querySelector('#boton-importante');
```

## Escuchar eventos con `addEventListener`

Para responder a las acciones del usuario, escuchamos eventos:

```javascript
const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  alert('¡Hiciste clic en el botón!');
});
```

### Desglosando el código

```markdown
boton.addEventListener('click', function() {
//     │                │        │
//     │                │        └── Función que se ejecuta
//     │                └─────────── Tipo de evento
//     └──────────────────────────── Método para escuchar eventos
  alert('¡Hiciste clic!');
});
```

## El problema: Script en el `<head>`

Intentemos este código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
  
  <script>
    const boton = document.querySelector('#boton-importante');
    
    boton.addEventListener('click', function() {
      alert('¡Hiciste clic!');
    });
  </script>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
</body>
</html>
```

### ❌ ¡Error!

```javascript
Uncaught TypeError: Cannot read property 'addEventListener' of null
```

### ¿Por qué falla?

El problema es el orden de ejecución:

- El navegador lee el HTML de arriba hacia abajo
- Encuentra el `<script>` en el `<head>`
- Ejecuta el JavaScript inmediatamente
- Intenta buscar `#boton-importante`
- ❌ No lo encuentra porque aún no llegó a leer el `<body>`
- `querySelector` devuelve `null`
- Intentamos hacer `null.addEventListener()` → Error

## Solución 1: Mover el `<script>` al final del `<body>`

La solución más simple es mover el script al final:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
  
  <!-- Script al final del body -->
  <script>
    const boton = document.querySelector('#boton-importante');
    
    boton.addEventListener('click', function() {
      alert('¡Hiciste clic!');
    });
  </script>
</body>
</html>
```

### ✅ Ahora funciona

Cuando el navegador llega al `<script>`, ya ha parseado todo el HTML, por lo que encuentra el botón sin problemas.

### ❌ Problema con esta solución

Aunque funciona, no es la mejor opción:

- Retrasa la descarga del JavaScript: El navegador no empieza a descargar el script hasta que termina de parsear todo el HTML
- Bloquea el renderizado final: El navegador debe esperar a ejecutar el JavaScript antes de considerar la página completa
- No es escalable: Si tienes múltiples scripts, todos se cargan y ejecutan al final
- JavaScript no es prioritario: El navegador no puede optimizar la descarga del JavaScript

## Solución 2: Usar type="module" (Moderno)

La forma moderna es usar type="module":

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
  
  <!-- type="module" espera automáticamente a que el DOM esté listo -->
  <script type="module">
    const boton = document.querySelector('#boton-importante');
    
    boton.addEventListener('click', function() {
      alert('¡Hiciste clic!');
    });
  </script>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
</body>
</html>
```

> ¿Qué es el DOM? El DOM (Document Object Model) es la representación estructurada del HTML en memoria. Cuando el navegador parsea el HTML, crea el DOM para que JavaScript pueda interactuar con él.

## ✅ Ventajas de type="module"

- Se ejecuta después de parsear el HTML: Automáticamente espera a que el DOM esté listo
- Es moderno: Usa el sistema de módulos de JavaScript (ES Modules)
- Permite usar import/export: Puedes importar código de otros archivos
- Strict mode por defecto: Previene errores comunes
- No contamina el scope global: Variables no se filtran al objeto window

## Solución 3: Archivo externo con type="module"
Lo más común es tener el JavaScript en un archivo separado:

### script.js

```javascript
const boton = document.querySelector('#boton-importante');

boton.addEventListener('click', function() {
  alert('¡Hiciste clic!');
});
```

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
  
  <!-- Cargar archivo externo con type="module" -->
  <script type="module" src="script.js"></script>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
</body>
</html>
```

### ✅ Ventajas del archivo externo
- Código organizado: HTML y JavaScript separados
- Reutilizable: El mismo script se puede usar en múltiples páginas
- Cacheable: El navegador puede cachear el archivo JavaScript
- Más fácil de mantener: Cambios en un solo lugar

## Solución 4: Atributo defer

Otra opción es usar el atributo defer:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi página</title>
  
  <!-- defer descarga en paralelo pero ejecuta después de parsear -->
  <script defer src="script.js"></script>
</head>
<body>
  <h1>Mi página web</h1>
  <button id="boton-importante">Haz clic aquí</button>
</body>
</html>
```

### ¿Qué hace defer?

- Descarga el script en paralelo: Mientras sigue parseando el HTML
- No bloquea el parseo: El HTML se procesa normalmente
- Ejecuta después del parseo: Espera a que el DOM esté listo
- Mantiene el orden: Si hay múltiples scripts con defer, se ejecutan en orden

### ✅ Ventajas de defer

- El script se mantiene en el `<head>`: Organización tradicional
- Descarga en paralelo: Mejor rendimiento
- Espera al DOM: No hay problemas con elementos que no existen aún
- Compatible: Funciona en navegadores más antiguos que type="module"

## Comparación: defer vs type="module"

| Característica | defer | type="module" |
|----------------|-------|----------------|
| Espera al DOM | ✅ Sí | ✅ Sí |
| Descarga en paralelo | ✅ Sí | ✅ Sí |
| ES Modules (import/export) | ❌ No | ✅ Sí |
| Strict mode | ❌ No | ✅ Sí |
| Scope aislado | ❌ No | ✅ Sí |
| Compatibilidad | ✅ Mayor | ⚠️ Navegadores modernos |

## ¿Cuál usar?

Usa type="module" si:

- Vas a usar `import/export`
- Quieres código moderno
- Solo soportas navegadores actuales

Usa defer si:

- Necesitas compatibilidad con navegadores antiguos
- No necesitas módulos ES6
- Código más simple


## ¡Todo lo que hemos visto!

### Atributo `id`:

- Identifica únicamente un elemento
- Debe ser único en la página
- En CSS se selecciona con `#`
- En JavaScript se selecciona con querySelector('#id')

### Cargar JavaScript:

- `type="module"`: Moderno, espera al DOM, permite import/export
- `defer`: Compatible, espera al DOM, sin módulos
- Al final del body: Funciona pero no es óptimo
- Sin atributos en head: ❌ No funciona con DOM

### Eventos:

- Usar `addEventListener` para escuchar eventos
- Usar `querySelector` para seleccionar elementos
- Verificar que el elemento existe antes de usarlo


🚀 Siguiente paso: Aprenderemos a manipular el DOM, cambiar contenido, estilos y crear elementos dinámicamente.