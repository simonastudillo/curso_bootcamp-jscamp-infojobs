# Estilando cards

En este vídeo aprendemos cómo crear y aplicar estilos personalizados a tarjetas utilizando CSS.

## 1. Selección del elemento

Empezamos estilando el elemento `article`, que representa la tarjeta. Más adelante se recomienda refinar el selector para que no afecte a otros articles de la web.

## 2. Fondo y variables CSS

Se configura el color de fondo usando una variable CSS previamente definida, por ejemplo:

```css
article {
  background-color: var(--card-bg);
}
``` 

## 3. Espaciado con padding y unidades relativas

Utilizamos el padding para separar el contenido interno. Muestra las diferencias entre unidades absolutas como `px` y relativas como `rem`:

```css
article {
  background-color: var(--card-bg);
  padding: 2rem;
}
```

- px es fijo.
- rem es relativo al tamaño de la fuente raíz de la página (por ejemplo, 2rem = 32px si la fuente del documento es 16px).

## 4. Margen externo

Se añade separación entre tarjetas con `margin-bottom`:

```css
article {
  background-color: var(--card-bg);
  padding: 2rem;
  margin-bottom: 16px;
}
```

- El padding separa el contenido interior del borde.
- El margin separa el elemento de otros elementos externos.


## 5. Bordes redondeados

Aplicamos `border-radius` para hacer esquinas redondeadas, pudiendo ajustar cada esquina individualmente:

```css
article {
  background-color: var(--card-bg);
  padding: 2rem;
  margin-bottom: 16px;
  border-radius: 0.5rem; /* o valores mayores para más curvatura */
}
```

## 6. Sombra con box-shadow
Añadimos una sombra sutil para que la tarjeta resalte visualmente:

```css
article {
  background-color: var(--card-bg);
  padding: 2rem;
  margin-bottom: 16px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 var(--shadow);
}
```

Vamos a ver cada uno de los valores que acepta la propiedad `box-shadow`:

- El primer valor es desplazamiento horizontal.
- Segundo valor es vertical.
- Tercero es el difuminado.
- Cuarto es el spread (tamaño de la sombra).
- Y finalmente, el color de la sombra.

Mi recomendación es que uses un color sutil y con opacidad para que no quede “sucia”.

## 7. Estilos de contenido SVG dentro de la tarjeta

Para los SVG que están dentro de la tarjeta, se pueden seleccionar así:

```css
article svg {
  color: var(--primary-light);
  background: #0153;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  padding: 1rem;
}
```

El selector se lee como “selecciona todos los SVG que están dentro de un article”.

Ahora vamos a ver un poco las propiedades que hemos usado:

- El border-radius: 100% convierte un cuadrado en un círculo si ancho y alto son iguales.
- El padding: 1rem añade un espacio interno al SVG.
- El width: 64px y height: 64px definen el tamaño del SVG.
- El color: var(—primary-light) define el color del SVG.
- El background: #0153 define el fondo del SVG.


Y con todo esto, ya hemos estilizado nuestra tarjeta dándole un aspecto moderno y atractivo. ¡Para que veas el poder de CSS!

Es imposible que revisemos TODAS las propiedades de CSS. Estaríamos días. ¡Hay cientos! Lo mejor es que, si quieres, vayas a la documentación de MDN y explores todas las propiedades que necesitas: [https://developer.mozilla.org/en-US/docs/Web/CSS/Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Properties)