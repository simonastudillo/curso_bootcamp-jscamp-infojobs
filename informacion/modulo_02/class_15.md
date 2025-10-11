# Creando múltiples páginas HTML

Hasta ahora hemos trabajado con una sola página HTML, pero la mayoría de sitios web tienen múltiples páginas. En esta clase aprenderemos a crear y conectar diferentes páginas HTML.

## Estructura de un sitio web con múltiples páginas

Un sitio web típico puede tener la siguiente estructura de archivos:

```markdown
proyecto/
  ├── index.html        (página principal)
  ├── empleos.html      (página de empleos)
  ├── contacto.html     (página de contacto)
  ├── about.html        (página acerca de)
  └── styles.css
```

## Creando una nueva página: empleos.html

Vamos a crear una nueva página empleos.html partiendo de nuestro index.html. Lo primero que debemos entender es qué partes del HTML se mantienen igual en todas las páginas y qué partes cambian.

## Elementos que se repiten en todas las páginas

Los siguientes elementos normalmente son iguales en todas las páginas de un sitio web:

- `<head>`: Los metadatos, título base, enlaces a CSS, etc.
- `<header>`: La cabecera con el logo y la navegación
- `<footer>`: El pie de página con información de contacto, enlaces, etc.

Obviamente, dentro de los metadatos, vamos a cambiar el `<title>` y la descripción para que cada página tenga un título único.

## Elemento que cambia en cada página

`<main>`: Esta es la etiqueta que contiene el contenido principal que cambia en cada página. Es el contenido único de cada página.

## La etiqueta `<main>`: El contenido principal

La etiqueta `<main>` es fundamental porque:

- Identifica el contenido principal de la página
- Es el contenido que cambia de una página a otra
- Solo debe haber una etiqueta `<main>` por página
- No debe contener contenido que se repita (como navegación, logos, footer, etc.)

```html
<!-- ❌ MAL: El footer no debe estar dentro de main -->
<main>
  <h2>Contenido de la página</h2>
  <footer>Pie de página</footer>
</main>

<!-- ✅ BIEN: Main solo contiene el contenido único de esta página -->
<main>
  <h2>Contenido de la página</h2>
  <p>Este contenido es específico de esta página.</p>
</main>
<footer>Pie de página</footer>
```

## Enlaces relativos entre páginas

Cuando las páginas están en la misma carpeta, los enlaces son simples:

```html
<!-- Ambos archivos están en la misma carpeta -->
<nav>
  <a href="index.html">Inicio</a>
  <a href="empleos.html">Empleos</a>
  <a href="contacto.html">Contacto</a>
</nav>
```

## Rutas relativas en diferentes estructuras

Páginas en la misma carpeta

```markdown
proyecto/
  ├── index.html
  └── empleos.html
```

Desde index.html a empleos.html:

```html
<a href="empleos.html">Empleos</a>
```

## Páginas en subcarpetas

```markdown
proyecto/
  ├── index.html
  └── pages/
      └── empleos.html
```

Desde index.html a empleos.html:

```html
<a href="pages/empleos.html">Empleos</a>
```

Desde empleos.html a index.html:

```html
<a href="../index.html">Inicio</a>
```

> ".. significa “subir un nivel” en la estructura de carpetas."

## Estructura más compleja

```markdown
proyecto/
  ├── index.html
  ├── pages/
  │   ├── empleos.html
  │   └── contacto.html
  └── blog/
      └── articulo.html
```

Desde empleos.html a articulo.html:

```html
<a href="../blog/articulo.html">Artículo</a>
```

Desde articulo.html a empleos.html:

```html
<a href="../pages/empleos.html">Empleos</a>
```

## Ruta absoluta vs relativa

### Ruta relativa

```html
<!-- Relativa a la ubicación actual del archivo -->
<a href="empleos.html">Empleos</a>
<a href="../index.html">Inicio</a>
<a href="pages/contacto.html">Contacto</a>
```

### Ruta absoluta desde la raíz del sitio

```html
<!-- Comienza con / = desde la raíz del sitio -->
<a href="/index.html">Inicio</a>
<a href="/pages/empleos.html">Empleos</a>
<a href="/blog/articulo.html">Artículo</a>
```

### Ruta absoluta completa (URL externa)

```html
<!-- URL completa con dominio -->
<a href="https://www.ejemplo.com/empleos.html">Empleos</a>
```

## Buenas prácticas

1. Consistencia en la navegación

Asegúrate de que la navegación sea idéntica en todas las páginas:

```html
<!-- Esta navegación debe ser IGUAL en todas las páginas -->
<nav>
  <a href="index.html">Inicio</a>
  <a href="empleos.html">Empleos</a>
  <a href="contacto.html">Contacto</a>
</nav>
```

2. Indicar la página actual

Es buena práctica indicar visualmente en qué página está el usuario:

```html
<!-- En index.html -->
<nav>
  <a href="index.html" class="active">Inicio</a>
  <a href="empleos.html">Empleos</a>
  <a href="contacto.html">Contacto</a>
</nav>

<!-- En empleos.html -->
<nav>
  <a href="index.html">Inicio</a>
  <a href="empleos.html" class="active">Empleos</a>
  <a href="contacto.html">Contacto</a>
</nav>
```

3. Títulos descriptivos

Cada página debe tener un título único y descriptivo:

```html
<!-- index.html -->
<title>Mi Sitio Web - Inicio</title>

<!-- empleos.html -->
<title>Mi Sitio Web - Ofertas de Empleo</title>

<!-- contacto.html -->
<title>Mi Sitio Web - Contacto</title>
```

4. Reutilizar estilos

Todas las páginas deben enlazar al mismo archivo CSS:

```html
<!-- En todas las páginas -->
<link rel="stylesheet" href="styles.css">
Copiar
Si las páginas están en subcarpetas, ajusta la ruta:

<!-- En pages/empleos.html -->
<link rel="stylesheet" href="../styles.css">
```

## El problema de la repetición

Como has notado, estamos copiando y pegando el `<head>`, `<header>` y `<footer>` en cada página. Esto tiene un problema: si queremos cambiar algo en la navegación, tenemos que editarlo en todas las páginas.

En el futuro, aprenderemos a usar:

- Frameworks como Astro, Next.js o similares que permiten crear componentes reutilizables
- Server Side Includes (SSI) en servidores
- JavaScript para cargar contenido dinámicamente

Pero por ahora, trabajando con HTML puro, la repetición es necesaria.

¡Con esto ya puedes crear sitios web con múltiples páginas conectadas entre sí!