# Arreglando el logo del header

En la clase anterior creamos múltiples páginas HTML (`index.html` y `empleos.html`) y copiamos el `<header>` en ambas. Ahora vamos a ver qué sucede cuando queremos hacer cambios en el header.

## El problema de duplicar código HTML

Cuando trabajamos con HTML puro y tenemos el mismo código en múltiples archivos, surge un problema importante: cualquier cambio debe replicarse manualmente en todos los archivos.

### Ejemplo del problema

Imagina que queremos añadir o modificar el logo en el header:

`index.html`

```html
<header>
   <img src="logo.svg" alt="Logo" width="40" height="40">
   <nav>
      <a href="index.html">Inicio</a>
      <a href="empleos.html">Empleos</a>
   </nav>
</header>
```

Si hacemos este cambio solo en `index.html`, tenemos que recordar hacer el mismo cambio exacto en `empleos.html`, `contacto.html`, y cualquier otra página que tengamos.

`empleos.html` (hay que actualizarlo manualmente)

```html
<header>
  <!-- Tenemos que copiar y pegar el mismo cambio aquí -->
  <img src="logo.svg" alt="Logo" width="40" height="40">
  <nav>
    <a href="index.html">Inicio</a>
    <a href="empleos.html">Empleos</a>
  </nav>
</header>
```

## Los riesgos de la duplicación

- Es fácil olvidar actualizar un archivo: Puedes cambiar el header en `index.html` pero olvidarte de `empleos.html`
- Inconsistencias en el sitio: Algunas páginas tendrán el logo nuevo y otras el viejo
- Más trabajo manual: Cada cambio requiere editar múltiples archivos
- Errores de copy-paste: Al copiar y pegar, es fácil cometer errores

```html
<!-- ❌ Problema: Headers inconsistentes -->

<!-- index.html - Logo actualizado -->
<header>
  <img src="logo-nuevo.svg" alt="Mi Sitio" width="50" height="50">
  <nav>...</nav>
</header>

<!-- empleos.html - Logo antiguo (olvidamos actualizarlo) -->
<header>
  <img src="logo-viejo.svg" alt="Logo" width="40" height="40">
  <nav>...</nav>
</header>
```

## La solución (por ahora)

Con HTML puro, la única solución es ser muy cuidadoso y:

- Hacer el cambio en el primer archivo
- Copiarlo exactamente
- Pegarlo en todos los demás archivos
- Verificar que todos los archivos estén actualizados


## ¿Por qué no podemos hacer esto mejor con HTML puro?

HTML por sí solo no tiene una forma nativa de reutilizar componentes. No podemos crear un “componente header” y usarlo en múltiples páginas.

En el futuro, aprenderemos React para resolver este problema, pero mientras tanto, aquí hay algunas alternativas que existen fuera de HTML puro:

- Frameworks como Astro, React, Vue: Permiten crear componentes reutilizables
- Plantillas de servidor: Como PHP, EJS, Handlebars
- Generadores de sitios estáticos: Como Astro, Eleventy, Jekyll…

Pero por ahora, con HTML puro, debemos aceptar esta limitación.

> Hay opciones como `<iframe>` o `<frame>` para incluir HTML externo, pero tiene sus limitaciones y problemas. Otra serían los Web Components, pero necesitamos JavaScript para eso.

## Usando SVG en el header

Los SVG (Scalable Vector Graphics) son perfectos para logos porque:

- Se ven nítidos en cualquier tamaño
- Pesan muy poco
- Se pueden modificar con CSS

### Insertar SVG como imagen

```html
<!-- SVG como archivo externo -->
<img src="logo.svg" alt="Logo" width="40" height="40">
```

### Insertar SVG directamente (inline)

```html
<!-- SVG inline en el HTML -->
<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" 
        fill="currentColor"/>
</svg>
```

### El atributo fill="currentColor" en SVG

Cuando un SVG usa `fill="currentColor"`, el color del SVG heredará el color del texto definido en CSS.

### ¿Qué es `currentColor`?

`currentColor` es una palabra clave especial de CSS que representa el valor actual de la propiedad color del elemento.

```css
.logo {
  color: blue; /* currentColor será blue */
}
``` 

### Ejemplo práctico

#### HTML

```html
<header>
  <svg class="logo" width="40" height="40" viewBox="0 0 24 24">
    <path
      d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12..." 
      fill="currentColor"/>
  </svg>

  <nav>
    <a href="index.html">Inicio</a>
    <a href="empleos.html">Empleos</a>
  </nav>
</header>
```

#### CSS

```css
/* El SVG será azul */
.logo {
  color: blue;
}

/* Al hacer hover, el SVG será rojo */
.logo:hover {
  color: red;
}
```

### Ventajas de usar `currentColor`

- Un solo lugar para cambiar el color: No necesitas editar el SVG
- Responde a hover y otros estados: Puedes cambiar el color con CSS
- Herencia de color: El SVG puede heredar el color de su contenedor

```html
<!-- El SVG heredará el color del header -->
<header style="color: green;">
  <svg width="40" height="40">
    <circle cx="20" cy="20" r="15" fill="currentColor"/>
  </svg>
</header>
```

### Recordatorio importante

Esta limitación de tener que copiar y pegar el mismo código es temporal. Es parte del proceso de aprendizaje con HTML puro. Más adelante, cuando aprendamos frameworks modernos como Astro o React, podremos crear componentes reutilizables y este problema desaparecerá.

Por ahora, es importante:

- Ser consciente del problema
- Ser cuidadoso al hacer cambios
- Verificar que todas las páginas estén sincronizadas
- Entender por qué necesitamos herramientas más avanzadas

¡Esta es una de las razones por las que existen los frameworks modernos!