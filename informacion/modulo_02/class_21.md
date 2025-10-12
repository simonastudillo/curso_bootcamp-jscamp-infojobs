# Creando una paginación desde cero

La paginación es un componente común en aplicaciones web que permite navegar entre múltiples páginas de contenido. En esta clase vamos a crear una paginación completa desde cero, aplicando todos los conceptos que hemos aprendido.

## ¿Qué es una paginación?

La paginación es un patrón de navegación que divide contenido extenso en múltiples páginas. Permite al usuario:

- Ver qué página está viendo actualmente
- Navegar a páginas específicas
- Ir a la página anterior o siguiente

## Paso 1: HTML básico

Empezamos con una estructura simple:

```html
<nav>
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">&raquo;</a>
</nav>
```

### Entidades HTML para flechas
- `&laquo;` → « (doble flecha izquierda)
- `&raquo;` → » (doble flecha derecha)

Estas entidades HTML son una forma de mostrar caracteres especiales, pero más adelante las reemplazaremos con iconos SVG.

## Paso 2: Añadiendo clases y estructura

Añadimos clases semánticas para poder estilizar el componente:

```html
<nav class="pagination">
  <a href="#">&laquo;</a>
  <a class="is-active" href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">&raquo;</a>
</nav>
```

- `.pagination`: Clase para el contenedor de navegación
- `.is-active`: Clase para indicar la página actual (convención común: `is-*` para estados)

## Paso 3: HTML final con iconos SVG

Reemplazamos las entidades HTML con iconos SVG para mayor control y mejor apariencia:

```html
<nav class="pagination">
  <a href="#">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 6l-6 6l6 6" />
    </svg>
  </a>
  <a class="is-active" href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  </a>
</nav>
```

> El símbolo que ves en SVG se le llama `chevron` (similar a una flecha pero sin cuerpo). Por si tienes que buscarlo en bibliotecas de iconos.

## Ventajas de usar SVG

- Escalables: Se ven bien en cualquier tamaño
- Personalizables: El color se adapta con `stroke="currentColor"`
- Accesibles: Mejor control sobre el diseño
- Livianos: Menor peso que imágenes

## Los estilos CSS

```css
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-block: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    text-decoration: none;
    color: var(--text-muted);
    border-radius: 0.375rem;
    transition: all .3s;

    &:hover, &:focus {
      background-color: #fff;
    }

    &:active {
      transform: scale(0.90);
    }

    &.is-active {
      background-color: var(--primary-light);
      color: white;
      pointer-events: none;
    }
  }
}
```

## Desglosando el CSS

1. Contenedor de paginación

```css
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-block: 2rem;
}
```

- `display: flex`: Los enlaces se colocan en fila
- `justify-content: center`: Centra la paginación horizontalmente
- `gap: 0.5rem`: Espacio entre cada botón (8px aproximadamente)
- `margin-block: 2rem`: Margen vertical arriba y abajo (equivale a `margin-top` y `margin-bottom`)

2. Enlaces individuales

```css
.pagination {
   a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      text-decoration: none;
      color: var(--text-muted);
      border-radius: 0.375rem;
      transition: all .3s;
   }
}
```

- `display: flex`: Permite centrar el contenido (número o icono)
- `align-items: center`: Centra verticalmente
- `justify-content: center`: Centra horizontalmente
- `width y height: 2.5rem`: Tamaño fijo cuadrado
- `text-decoration: none`: Sin subrayado
- `color: var(--text-muted)`: Color de texto usando variable CSS
- `border-radius: 0.375rem`: Esquinas redondeadas sutiles
- `transition: all .3s`: Animación suave para todos los cambios

3. Estados hover y focus

```css
.pagination {
   a {
      &:hover, &:focus {
         background-color: #fff;
      }
   }
}
```

- Al pasar el ratón (`:hover`) o al recibir el foco con teclado (`:focus`), el botón muestra un fondo blanco
- Mejora la accesibilidad y la experiencia de usuario

4. Estado active

```css
.pagination {
   a {
      &:active {
         transform: scale(0.90);
      }
   }
}
```

- Cuando se hace clic (`:active`), el botón se reduce ligeramente
- Efecto de “presionar” que da feedback táctil
- `scale(0.90)` reduce el tamaño al 90%

5. Página activa

```css
.pagination {
   a {
      &.is-active {
         background-color: var(--primary-light);
         color: white;
         pointer-events: none;
      }
   }
}
```

- `background-color: var(--primary-light)`: Fondo destacado con color primario
- `color: white`: Texto blanco para contraste
- `pointer-events: none`: Desactiva la interacción (no se puede hacer clic en la página actual)

## La propiedad margin-block

`margin-block` es una propiedad lógica moderna de CSS:

```css
/* Tradicional */
margin-top: 2rem;
margin-bottom: 2rem;

/* Moderno (equivalente) */
margin-block: 2rem;
```

## Otras propiedades lógicas similares

```css
/* Margen horizontal */
margin-inline: 1rem; /* margin-left y margin-right */

/* Padding vertical */
padding-block: 1rem; /* padding-top y padding-bottom */

/* Padding horizontal */
padding-inline: 1rem; /* padding-left y padding-right */
```

Ventaja: Se adaptan automáticamente a idiomas que se leen de derecha a izquierda (como árabe o hebreo).

## La clase `.is-active`

La convención `is-*` es común para indicar estados:

```css
.is-active { } /* Elemento activo */
.is-disabled { } /* Elemento deshabilitado */
.is-loading { } /* Elemento cargando */
.is-hidden { } /* Elemento oculto */
.is-visible { } /* Elemento visible */
```

## ¿Por qué `.is-active` y no `.active`?

```html
<!-- Más legible y claro -->
<a class="is-active" href="#">1</a>

<!-- Menos claro semánticamente -->
<a class="active" href="#">1</a>
```

El prefijo `is-` hace más clara la intención: describe un estado booleano (sí/no). 
 
## Ejercicio práctico

Crea tu propia paginación:

- Crea una paginación con 7 páginas
- La página 4 debe estar activa
- Añade botones de “Primera” y “Última” página
- Estiliza hover, focus y active
- Añade iconos SVG para las flechas
- Asegúrate de que sea accesible con teclado