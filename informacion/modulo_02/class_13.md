# Enlaces en HTML

Los enlaces son uno de los elementos más importantes de la web. Son los que permiten navegar entre diferentes páginas y recursos, creando la experiencia de navegación que conocemos.

## La etiqueta <a>

La etiqueta <a> (de anchor, ancla en inglés) es la etiqueta que se utiliza para crear enlaces en HTML.

### Atributos de la etiqueta <a>
Los atributos más importantes de la etiqueta <a> son:

- href: la URL o destino del enlace (obligatorio)
- target: dónde se abrirá el enlace
- rel: relación entre la página actual y la página enlazada

Ejemplo básico

```html
<a href="https://www.google.com">Ir a Google</a>
```

Este es el uso más básico de un enlace. Al hacer clic en el texto “Ir a Google”, el navegador navegará a la URL especificada en el atributo href.

### El atributo target

El atributo target indica dónde se abrirá el enlace. Los valores más comunes son:

- _self: abre el enlace en la misma pestaña (valor por defecto)
- _blank: abre el enlace en una nueva pestaña o ventana

```html
<a href="https://www.google.com" target="_blank">
  Abrir Google en nueva pestaña
</a>
```

> Importante: Cuando uses target="_blank", es recomendable usar también rel="noopener noreferrer" por razones de seguridad y rendimiento.

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Abrir Google en nueva pestaña
</a>
```

- noopener: previene que la nueva página tenga acceso al objeto window.opener, mejorando la seguridad.
- noreferrer: previene que se envíe la información del referente (la URL de la página actual) a la nueva página.

## Enlaces relativos y absolutos

### Enlaces absolutos

Un enlace absoluto incluye la URL completa, con el protocolo y el dominio:

```html
<a href="https://www.ejemplo.com/pagina.html">Enlace absoluto</a>
```

### Enlaces relativos

Un enlace relativo es relativo a la ubicación actual de la página:

```html
<!-- Enlace a una página en el mismo directorio -->
<a href="contacto.html">Contacto</a>

<!-- Enlace a una página en un subdirectorio -->
<a href="blog/articulo.html">Artículo</a>

<!-- Enlace a una página en el directorio padre -->
<a href="../index.html">Volver al inicio</a>
```

### Enlaces a secciones de la misma página

Puedes crear enlaces que lleven a secciones específicas de la misma página usando el atributo id:

```html
<!-- Definir la sección con un id -->
<section id="sobre-nosotros">
  <h2>Sobre nosotros</h2>
  <p>Contenido...</p>
</section>

<!-- Enlace a esa sección -->
<a href="#sobre-nosotros">Ir a Sobre nosotros</a>
```

> El símbolo # indica que es un enlace a un elemento con ese id en la página actual.

### Enlaces de correo electrónico

Puedes crear enlaces que abran el cliente de correo del usuario:

```html
<a href="mailto:contacto@ejemplo.com">Enviar email</a>
```

> También puedes pre-rellenar el asunto y el cuerpo del mensaje:

```html
<a href="mailto:contacto@ejemplo.com?subject=Consulta&body=Hola, tengo una pregunta">
  Enviar email con asunto
</a>
```

### Enlaces de teléfono

Para dispositivos móviles, puedes crear enlaces que permitan llamar directamente:

```html
<a href="tel:+34123456789">Llamar al teléfono</a>
```

### Enlaces para descargar archivos

El atributo download indica que el enlace es para descargar un archivo en lugar de navegar a él:

```html
<a href="documento.pdf" download>Descargar PDF</a>
```

> Puedes especificar un nombre diferente para el archivo descargado:

```html
<a href="documento.pdf" download="mi-documento.pdf">Descargar PDF</a>
```

## Estilizando enlaces con CSS

Los enlaces tienen diferentes estados que puedes estilizar:

```css
/* Enlace normal */
a {
  color: blue;
  text-decoration: none;
}

/* Enlace visitado */
a:visited {
  color: purple;
}

/* Enlace al pasar el mouse */
a:hover {
  color: darkblue;
  text-decoration: underline;
}

/* Enlace activo (mientras se hace clic) */
a:active {
  color: red;
}
```

### Buenas prácticas

- Texto descriptivo: El texto del enlace debe describir claramente hacia dónde lleva

```html
<!-- ❌ Mal -->
<a href="articulo.html">Haz clic aquí</a>

<!-- ✅ Bien -->
<a href="articulo.html">Leer más sobre desarrollo web</a>
```

- Accesibilidad: Asegúrate de que los enlaces sean accesibles para todos los usuarios

```html
<a href="documento.pdf" aria-label="Descargar documento en formato PDF">
  Descargar documento
</a>
```

- Enlaces externos: Indica visualmente cuando un enlace lleva a un sitio externo

```html
<a href="https://sitio-externo.com" target="_blank" rel="noopener noreferrer">
  Sitio externo ↗
</a>
```

> Los enlaces son fundamentales para crear una buena experiencia de navegación. ¡Practica creando diferentes tipos de enlaces en tu proyecto!