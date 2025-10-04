# Selectores CSS

Los **selectores CSS** permiten decidir a qué elementos HTML se aplican los estilos. Elegir bien un selector es clave para mantener el código limpio y las reglas controladas.

## Tipos de selectores más básicos

Por ahora vamos a ver los tipos de selectores más básicos y más adelante descubriremos otras formas de seleccionar elementos en CSS.

- Selector de elemento Selecciona todos los elementos de un tipo dado.

```html
<h1>Hola</h1>
<h1>Adiós</h1>
```

Ahora, si queremos que todos los `<h1>` sean azules, podemos hacer esto:

```css
h1 {
  color: blue;
}
```

Todos los `<h1>` de la página web se verán afectados por este estilo.

- Selector combinado o descendiente
Selecciona todos los elementos de un tipo que estén dentro de otro elemento. En este ejemplo tenemos dos `<h1>` pero uno está fuera de un `<article>` y el otro está dentro.

```html
<h1>Artículo</h1>

<article>
  <h1>Hola</h1>
  <p>Adiós</p>
</article>
```

Podemos usar el selector combinado para que sólo los `<h1>` que están dentro de un `<article>` se vean afectados por este estilo.

```css
article h1 {
  color: blue;
}

article p {
  color: red;
}
```

También podemos usar otra sintaxis mucho más sencilla para agrupar estos estilos:

```css
article {
  h1 {
    color: blue;
  }

  p {
    color: red;
  }
}
```

- Selector hijo directo

El operador `>` selecciona sólo los elementos hijos directos. Fíjate en este HTML que tiene elementos `<h1>` y `<p>` justo debajo de `<article>` pero también dentro de un `<div>`, que a su vez está dentro de un `<article>`:

```html
<article>
  <h1>Hola</h1>
  <p>Adiós</p>

  <div>
    <h1>Otro Hola</h1>
    <p>Otro Adiós</p>
  </div>
</article>
```

Ahora si usamos el operador `>` y hacemos esto:

```css
article > h1 {
  color: blue;
}

article > p {
  color: red;
}
```

Esto hará que sólo los `<h1>` y `<p>` que son hijos directos de `<article>` se vean afectados por los estilos. Los que están dentro del `<div>` no se verán afectados.

- Pseudo-clases

Los elementos no siempre tienen el mismo estado. A veces un botón puede estar desactivado, otras veces puede ser que el usuario tenga el cursor encima de un enlace, etc. Para estos casos existen las pseudoclases.

Una pseudoclase en CSS es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado.

También nos ayuda a seleccionar elementos que no se pueden seleccionar de otra forma, como el primer hijo de un elemento, el último hijo, etc.

Más adelante veremos mejor las pseudoclases, pero por ahora vamos a ver un ejemplo compuesto con todo lo que hemos visto hasta ahora con la pseudoclase `:nth-child()` que selecciona el hijo número `n` de un elemento padre.

```html
<main>
  <article>
    <h2>Artículo 1</h2>
  </article>

  <article>
    <h2>Artículo 2</h2>
  </article>

  <article>
    <h2>Artículo 3</h2>
  </article>
</main>
```

Ahora, vamos a seleccionar el segundo `<article>` dentro de la etiqueta `<main>`. Para ello, usamos la pseudoclase `:nth-child(2)`.

```css
main article:nth-child(2) {
  color: blue;
}
```
Esto hará que sólo el segundo `<article>` se vea afectado por este estilo. Si quisieramos además asegurarnos que sólo sean el segundo `<article>` que es hijo directo de `<main>`, podemos usar el selector combinado `main > article:nth-child(2)`.

```css
main > article:nth-child(2) {
  color: blue;
}
```
Esto hará que sólo el segundo `<article>` que es hijo directo de `<main>` se vea afectado por este estilo.

> No te preocupes si te cuestan los selectores. Hay muchos y es cuestión de practica y experiencia. Ya verás como poco a poco se te harán más fáciles.