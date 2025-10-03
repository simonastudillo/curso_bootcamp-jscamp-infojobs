# El Cuerpo del Documento: `<body>`

Después de la etiqueta `<head>`, viene la etiqueta `<body>`. Este es el cuerpo de tu documento HTML y es donde va todo el contenido visible de tu página web.

- Contenido visible: Textos, imágenes, videos, formularios, enlaces, botones, tablas… absolutamente todo lo que el usuario ve e interactúa directamente se coloca dentro de `<body>`.
- Construcción del marcado: Es en `<body>` donde empezaremos a construir todo el marcado de DevJobs, utilizando las diferentes etiquetas HTML para dar forma a nuestro contenido.

## Construyendo el contenido de DevJobs

Vamos a empezar a construir el header de DevJobs, donde está el logo y la navegación. Vamos a ir añadiendo poco a poco los elementos que necesitamos, describiendo el contenido usando diferentes etiquetas HTML.

```html
<body>
  <header>
    <h2>DevJobs</h2>

    <nav>
      <a href="#">Inicio</a>
      <a href="#">Empleos</a>
    </nav>

    <div>
      <a href="#">Publicar un empleo</a>
      <a href="#">Iniciar sesión</a>
    </div>
  </header>
</body>
```

Ahora mismo no nos preocupamos sobre cómo se ve, simplemente estamos describiendo el contenido de la página usando diferentes etiquetas HTML.

## Elementos HTML nuevos explicados:

`<header>`
- Elemento semántico (tiene significado)
- Le dice al navegador: “esto es el encabezado”
- Puede haber varios headers en una página (uno principal y otros en secciones)
- NO confundir con `<head>` (que es metadatos, el que vimos antes)

`<h2>`
- Heading 2 (Encabezado de nivel 2)
- Los headings van del `<h1>` al `<h6>` (como los títulos en Word)
- Jerarquía: `<h1>` > `<h2>` > `<h3>` > `<h4>` > `<h5>` > `<h6>`
- ¿Por qué `<h2>` y no `<h1>`? Reservamos `<h1>` para el título principal del contenido

`<nav>`
- Navigation (navegación)
- Elemento semántico para menús de navegación
- Google y lectores de pantalla lo reconocen como navegación principal

`<a href="...">`
- Anchor (ancla) - crea un enlace
- href = hypertext reference (referencia de hipertexto)
- Tipos de valores para href:
   - href="/" = página principal (home)
   - href="/empleos" = ruta relativa
   - href="https://google.com" = URL completa
   - href="#" = placeholder (no lleva a ningún lado, temporal)
   - href="#seccion" = ancla a una sección de la misma página

El elemento `<a>` es uno de los más importantes en HTML, porque nos permite crear enlaces a otras páginas o a secciones de la misma página. Es la base de la navegación en la web.

`<div>`
- Division (división)
- Es un contenedor genérico SIN significado semántico
- Se usa para agrupar elementos cuando no hay un elemento semántico apropiado
- Es como una caja invisible para organizar
El elemento `<div>` es un elemento muy popular, ya que nos permite agrupar elementos… sólo hay que tener cuidado de no usarlo cuando haya un mejor elemento semántico para el contenido que estamos creando.