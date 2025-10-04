# Formularios

## La etiqueta `<form>`

La etiqueta `<form>` es la etiqueta que se utiliza para crear un formulario. Un formulario es un conjunto de campos que el usuario puede rellenar y enviar a la página. Se usan otras etiquetas de forma interna para crear los campos del formulario, normalmente `<input>`.

### Ejemplo de uso

```html
<form>
  <input type="text" name="nombre" placeholder="Nombre" />
  <input type="email" name="email" placeholder="Email" />
  <button type="submit">Enviar</button>
</form>
/>
```

Primero, con `<form>` abrimos el formulario. Dentro de él, usamos `<input>` para crear los campos del formulario. Y finalmente, con `<button>` creamos el botón de envío.

## `<input>`

La etiqueta `<input>` es la etiqueta que se utiliza para crear un campo de formulario.

### Atributos de la etiqueta `<input>`

Algunos atributos importantes de la etiqueta `<input>` son:

- type: tipo de input. Puede ser text, email, password, number, date, etc.
- name: nombre del campo. Se usa para identificar el campo cuando se envía el formulario.
- placeholder: texto de ayuda que aparece en el campo cuando no se ha rellenado.
- required: indica si el campo es obligatorio.

### Ejemplo de uso

```html
<input type="text" name="nombre" placeholder="Nombre" />
```

> type="text" es el tipo de input por defecto y, por lo tanto, si no se especifica, se asume que es de tipo texto.

Como ves, la etiqueta `<input>` es una etiqueta autocerrante, como `<img>`. Esto quiere decir que no envuelve contenido interno como los elementos que vimos en la clase anterior.

## `<button>`

La etiqueta `<button>` es la etiqueta que se utiliza para crear un botón. Los botones son muy comunes en cualquier página web y sirven para que el usuario pueda realizar acciones en ella, como enviar el formulario, aplicar filtros, etc.

> ¡No uses un botón para crear enlaces! Para eso, usa la etiqueta `<a>` que hemos visto en clases anteriores.

### Atributos de la etiqueta `<button>`

Algunos atributos importantes de la etiqueta `<button>` son:

- type: tipo de botón. Puede ser submit, button, reset.
- disabled: indica si el botón está deshabilitado.

### Ejemplo de uso

```html
<button type="submit">Enviar</button>
```

> type="submit" es el tipo de botón por defecto si es el último o único botón del formulario.


## Sobre los `<svg>`

SVG (Scalable Vector Graphics) es un formato de imagen vectorial que se usa mucho en la web. Una de sus ventajas es que son imágenes que se pueden escalar sin perder calidad, a diferencia de los formatos de imagen tradicionales como JPG o PNG.

Lo mejor de los SVG es que son código, por lo que podemos incluirlos directamente en nuestro HTML.

Por ejemplo, el siguiente icono muestra un check verificado:

<svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path><path d="M9 12l2 2l4 -4"></path></svg>

El código es el siguiente:

```html
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
  <path d="M9 12l2 2l4 -4" />
</svg>
```

Para dar una explicación rápida de los atributos más importantes:

- width y height: ancho y alto del SVG.
- viewBox: define el sistema de coordenadas del SVG.
- stroke: color del borde de las formas.
- stroke-width: grosor del borde de las formas.
- stroke-linecap: define la forma de los extremos de las líneas (puede ser butt, round o square).
- stroke-linejoin: define la forma de las uniones entre líneas (puede ser arcs, bevel, miter, miter-clip o round).
- fill: color de relleno de las formas.
- Dentro tenemos más elementos HTML, como `<path>`, que define una forma a través de una serie de comandos en su atributo d.

Pero podríamos usar otros elementos como `<circle>`, `<rect>`, `<line>`, etc…

¡Podría estar horas hablando de SVG! Así que, si quieres aprender más sobre SVG, puedes echar un vistazo a la [documentación de MDN](https://developer.mozilla.org/es/docs/Web/SVG).