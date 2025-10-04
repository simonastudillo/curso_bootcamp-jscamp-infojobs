# CSS

CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada) y es el lenguaje que se utiliza para dar estilo a las páginas web. Con CSS podemos cambiar el color, la tipografía, el tamaño, el espaciado, la disposición y muchos otros aspectos visuales de una página web.

## ¿Cómo se aplica CSS a una página web?

Hay varias formas de aplicar CSS a una página web:

- CSS en línea: Se aplica directamente en el atributo style de un elemento HTML. Por ejemplo:

```html
<h1 style="color: blue; font-size: 24px;">Hola, mundo!</h1>
```

- CSS interno: Se incluye dentro de una etiqueta `<style>` en el `<head>` del documento HTML. Por ejemplo:

```html
<head>
  <style>
    h1 {
      color: blue;
      font-size: 24px;
    }
  </style>
</head>
```

- CSS externo: Se crea un archivo .css separado y se enlaza al documento HTML mediante una etiqueta `<link>` en el `<head>`. Por ejemplo:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```


## El lenguaje CSS

En nuestro proyecto yo ya tengo preparado un archivo `style.css` que aplica un montón de estilos a nuestra página web y voy a usarlo como si fuese un CSS externo para que nuestra web cobre vida.

Veamos un ejemplo para estilar la etiqueta `<body>`:

```css
body {
  font-family: system-ui, sans-serif;
  background-color: var(--background);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}
```

Como vemos, la sintaxis es la siguiente:

```css
selector {
  propiedad1: valor;
  propiedad2: valor;
}
```

Donde el `selector` es el elemento HTML al que queremos aplicar los estilos (en este caso, el `<body>`), y dentro de las llaves `{}` van las propiedades y sus valores separados por punto y coma `;`.

Cada propiedad define un aspecto visual del elemento, como el color, la tipografía, el tamaño, el espaciado, etc. Y cada valor es el valor que queremos asignar a esa propiedad.

## Variables CSS

CSS permite definir variables reutilizables (“custom properties”):

```css
:root {
  --background: #101922;
  --text-primary: #fff;
}
```

Estas variables se definen dentro del selector `:root`, que representa el elemento raíz del documento (el `<html>`), y se nombran con un prefijo `--` para diferenciarlas de las propiedades normales.

Luego, para usar una variable, se utiliza la función `var()`, pasando el nombre de la variable como argumento:

```css
h1 {
  color: var(--text-primary);
  background-color: var(--background);
}
```

## Formatos de color

CSS soporta varios formatos de color, entre los más comunes están:

- Hexadecimal: Un formato que usa un símbolo `#` seguido de seis dígitos hexadecimales (0-9, A-F). Por ejemplo: `#ff0000` (rojo), `#00ff00` (verde), `#0000ff` (azul).
- RGB: Un formato que usa la función `rgb()` con tres valores numéricos (0-255) que representan la cantidad de rojo, verde y azul. Por ejemplo: `rgb(255, 0, 0)` (rojo), `rgb(0, 255, 0)` (verde), `rgb(0, 0, 255)` (azul).
- RGBA: Similar a RGB, pero con un cuarto valor que representa la opacidad (0-1). Por ejemplo: `rgba(255, 0, 0, 0.5)` (rojo semi-transparente).

Por supuesto, hay muchos más formatos de color en CSS, pero estos son los más comunes y los que más se usan.

## Selectores avanzados

CSS tiene muchos selectores avanzados que permiten seleccionar elementos de forma más específica y compleja. El más sencillo y potente es `*`, que selecciona todos los elementos del documento:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Este selector es muy útil para resetear los márgenes y paddings por defecto de los elementos y para aplicar el modelo de caja `border-box`, que hace que el ancho y alto de un elemento incluyan el padding y el borde.