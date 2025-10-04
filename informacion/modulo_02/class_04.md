# El contenido principal de la página

La etiqueta `<main>` es la etiqueta que se utiliza para el contenido principal de la página. Es importante que solo haya un `<main>` por página y que no contenga contenido que se repita (como navegación, pie de página, cabecera de la página, etc).

```html
<header>
  La cabecera de la página
</header>

<main>
  Contenido principal de nuestra página...
</main>
```

## La etiqueta `<section>`

Dentro de nuestra página, tendremos siempre secciones con la información relacionada. Por ejemplo, en nuestra página de empleos, tendremos una sección con un formulario de búsqueda, otra sección con las características del servicio, etc.

```html
<main>
  <section>
    <h2>Sección de búsqueda</h2>
    Aquí irá el formulario de búsqueda
  </section>

  <section>
    <h2>Sección de características</h2>
    Aquí irán las características del servicio
  </section>

  <section>
    <h2>Sección de contacto</h2>
    Aquí irá el formulario de contacto
  </section>
</main>
```

Ahora que ya sabemos esto, vamos a empezar a crear la sección más importante de nuestra página principal: la sección hero. El hero normalmente es la primera sección de la página y es la que más destaca visualmente, además que suele tener un título y un botón de llamada a la acción o un formulario para que el usuario haga algo.

## Agregar imágenes a tu página web

### La etiqueta `<img>`

La etiqueta `<img>` es la etiqueta que se utiliza para agregar imágenes a tu página web.

### Atributos de la etiqueta `<img>`

Algunos atributos importantes de la etiqueta `<img>` son:

- src: de dónde viene la imagen. Puede ser una ruta local o una URL.
- alt: texto alternativo para accesibilidad, SEO y si la imagen no carga
- width/height: dimensiones en píxeles para que el navegador reserve espacio

### Ejemplo de uso 

```html
<img
  src="https://dominio.com/imagen.png"
  alt="Descripción de la imagen"
  width="200"
  height="200"
/>
```

Como ves, la etiqueta `<img>` es una etiqueta autocerrante. Esto quiere decir que no envuelve contenido interno como los elementos que vimos en la clase anterior.

No es la única etiqueta autocerrante. Hay otras como `<br>`, `<input>`, `<hr>`, etc. Y todas ellas no tienen contenido interno. Las iremos conociendo a lo largo del curso.

> ¡Ojo! En nuestra página ahora vamos a usar esta etiqueta `<img>` para agregar la imagen de fondo de la sección hero pero más adelante veremos que lo más recomendable es usar CSS. Más adelante entenderás cuándo usar cada una de ellas.