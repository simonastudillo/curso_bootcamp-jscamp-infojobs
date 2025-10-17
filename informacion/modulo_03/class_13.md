# Estilando el elemento select

Vamos a estilizar el elemento `select` para que se vean mejor. Vamos a ver por partes todo lo que ofrece este código CSS:

> Usamos la etiqueta global `select` para estilizar todos los selects de la página… aunque más adelante, cuando creemos nuestros componentes, evitaremos hacer esto.

```css
select {
  padding: 0.625rem 1.25rem;
  background-color: #242d3a;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #ddd;
  cursor: pointer;
  transition: all 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  padding-right: 2.5rem;

  &:hover {
    background-color: var(--primary-hover);
    color: white;
  }

  &:focus {
    outline: 2px solid #1173d4;
    outline-offset: 2px;
  }
}
```

Algunas propiedades ya las conoces, pero vamos a comentar algunas que son nuevas y te pueden sorprender.

- `appearance: none;`: Esta propiedad es muy útil para eliminar el estilo por defecto del elemento `select`, así podemos estilizarlo como queramos.
- `background-image:`: Esta propiedad sirve para cargar una imagen como fondo del elemento. Sin embargo, en este caso, estamos cargando un SVG en línea y lo estamos usando para mostrar como un icono. Para eso es clave las siguientes propiedades.
- `background-repeat: no-repeat;`: Con esto le decimos que no se repita la imagen de fondo y sólo se muestre una vez.
- `background-position: right 0.5rem center;`: Posicionamos el icono en la derecha del elemento `select` y centrado verticalmente.

Ahora veamos algunas posibilidades que nos ofrecen las etiquetas `select` y `option` en HTML para agrupar y mejorar la experiencia del usuario.