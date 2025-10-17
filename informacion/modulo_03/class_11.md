# Más eventos en JavaScript

Por ahora hemos visto los eventos `click` y `change` pero existen muchos más eventos que podemos usar para interactuar con el usuario. No vamos a poder verlos todos, pero vamos a ver algunos importantes y vamos a explicar el concepto de `preventDefault`.

## input

El evento `input` se ejecuta cuando el usuario escribe en un input.

```html
<input type="text" id="input-nombre" />
```

```javascript
const inputNombre = document.getElementById('input-nombre');
inputNombre.addEventListener('input', function() {
  console.log('Escribiendo...');
});
```

Ten en cuenta que por escribir también se entiende que el usuario está borrando el texto.

## blur

```html
<input type="text" id="input-nombre" />
```

```javascript
const inputNombre = document.getElementById('input-nombre');
inputNombre.addEventListener('blur', function() {
  console.log('Perdió el foco');
});
```

> El evento `blur` es `focus`, que se ejecuta cuando el input recibe el foco del usuario.

## submit

El evento `submit` se ejecuta cuando el usuario envía el formulario.

```html
<form id="formulario">
  <input name="nombre type="text" id="input-nombre" />
  <button type="submit">Enviar</button>
</form>
```

```javascript
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
  console.log('Formulario enviado');
});
```

¿Cómo se hace submit de un formulario? Hay principalmente dos formas:

- Pulsando el botón de tipo `submit` que esté dentro del formulario.
- Pulsando la tecla `Enter` mientras un `input` dentro del formulario tiene el foco.

Eso sí, si pruebas el código que te acabo de dar, te encontrarás que al hacer submit entonces la página se recarga y añade en la URL el valor del input `nombre`.

Este es el comportamiento por defecto del navegador y, aunque en JavaScript hemos escuchado el evento `submit`, el navegador sigue recargando la página.

Para evitar eso, podemos usar el método `preventDefault` del evento.

```javascript
event.preventDefault();
```

Que deberemos hacer dentro del evento `submit`.

```javascript
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Formulario enviado');
});
```

Esto quiere decir que queremos prevenir el comportamiento por defecto del evento. Esto no es único de los formularios, por ejemplo, los enlaces por defecto al hacer click sobre ellos hacen que el navegador se dirija a la URL del enlace pero también podemos prevenir ese comportamiento.

## keydown

El evento `keydown` se ejecuta cuando el usuario presiona una tecla.

```html
<input type="text" id="input-nombre" />
```

```javascript
// Al escuchar directamente en el documento, podemos escuchar todas las teclas
// que se pulsen independientemente de dónde esté el foco
document.addEventListener('keydown', function(event) {
  console.log('Tecla presionada:', event.key);
});
```

> El evento contrario a `keydown` es `keyup`, que se ejecuta cuando el usuario suelta una tecla.

El evento nos trae información importante sobre la tecla:

- `event.key`: La tecla presionada.
- `event.code`: El código de la tecla.
- `event.shiftKey`: Si la tecla se está presionando con la tecla Shift.
- `event.ctrlKey`: Si la tecla se está presionando con la tecla Ctrl.
- `event.altKey`: Si la tecla se está presionando con la tecla Alt.
- `event.metaKey`: Si la tecla se está presionando con la tecla Meta.