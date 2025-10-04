# Responsive Design

El responsive design permite que tu web se adapte a diferentes tamaños de pantalla (móviles, tablets, desktops). Aquí aprenderás cómo lograrlo con CSS.

## El problema

Si tu diseño solo funciona bien en una resolución específica, se “romperá” cuando la ventana sea demasiado pequeña o grande. Por ejemplo, tener tres columnas en desktop pero solo una en móvil.

## Media Queries

Las media queries en CSS te permiten aplicar estilos condicionales según el ancho de la pantalla.

```css
main {
  grid-template-columns: 1fr;
}

/* Responsive: Cuando el ancho es mayor a 640px */
@media (width >= 640px) {
  main {
    grid-template-columns: 1fr 1fr 1fr; /* 3 columnas */
  }
}
```

Así tu diseño pasa de una columna a tres, dependiendo del espacio disponible.

## CSS Grid avanzado con repeat y autofit

¡No siempre necesitas media queries para hacer un diseño responsive!

Para hacer un grid aún más flexible, puedes usar la función `repeat` con `auto-fit` y un tamaño mínimo por columna.

```css
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

- auto-fit generará tantas columnas como sea posible, ajustando el contenido.
- minmax(200px, 1fr) asegura que cada columna tenga al menos 200px pero pueda crecer.

Esto lo que hace es que creará una nueva columna cada vez que consiga tener un espacio suficiente de 200px para la columna.

Por ejemplo, si tenemos un espacio de 300px, creará sólo una columna de 300px, ya que no tiene espacio para crear dos columnas de 200px.

Pero a partir de 400px, creará dos columnas de 200px, ya que tiene espacio para hacer que cada columna ocupe como mínimo 200px.

Cuando tengas 500px, creará dos columnas de 250px pero no creará tres, porque no tendrían el ancho mínimo de 200px.

Lo mejor es que pruebes el código y juegues con él para que veas la diferencia.