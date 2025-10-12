# Aplicar estilos con clases en HTML

Las clases son uno de los mecanismos más importantes para aplicar estilos en CSS. Nos permiten identificar y estilizar elementos específicos de manera reutilizable.

## ¿Qué es una clase?

Una clase es un atributo que podemos añadir a cualquier elemento HTML para identificarlo y poder aplicarle estilos específicos desde CSS.

```html
<!-- Elemento sin clase -->
<section>Contenido</section>

<!-- Elemento con clase -->
<section class="jobs-search">Contenido</section>
```

## El selector de clase en CSS: `.`

En CSS, usamos el punto `.` seguido del nombre de la clase para seleccionar elementos que tengan esa clase:

```css
/* El punto indica que estamos seleccionando una CLASE */
.jobs-search {
  background: white;
  padding: 20px;
}
```

El punto `.` es fundamental: indica que estamos seleccionando por clase. Más adelante veremos otros selectores como el # para IDs.

## Diferencia entre elemento y clase

```css
/* Selecciona TODOS los <section> */
section {
  background: gray;
}

/* Selecciona SOLO los elementos con class="jobs-search" */
.jobs-search {
  background: white;
}
```

## Ejemplo práctico: Sección de búsqueda de empleos

Vamos a ver un ejemplo completo de cómo usar clases para estilizar una sección de búsqueda.

### HTML

```html
<section class="jobs-search">
  <h1>Encuentra tu próximo trabajo</h1>
  <p>Explora miles de oportunidades en el sector tecnológico.</p>

  <form role="search">
    <div class="search-bar">
      <!-- svg -->

      <input required type="text" placeholder="Buscar trabajos, empresas o habilidades">
    </div>

    <div class="search-filters">
      <-- selección de filtros >
    </div>
  </form>
</section>
```

### CSS

```css
.jobs-search {
  margin: 0;
  padding: 0;
  height: auto !important;

  h1 {
    font-size: 2.5rem;
    margin-bottom: .25rem;
  }

  p {
    font-size: 1.125rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .search-bar {
    background: var(--input-bg);
    padding: .25rem .5rem;
  }

  .search-filters {
    display: flex;
    flex-wrap: wrap;
    margin-top: .5rem;
  }

  form {
    width: 100%;
    max-width: 1280px;
  }

  form div {
    background: none;
    box-shadow: none;
    padding: 0;
  }
}
```

## Analizando el código

1. Clase principal: .jobs-search

```css
.jobs-search {
  margin: 0;
  padding: 0;
  height: auto !important;
}
```

Esta clase se aplica a la sección completa. Todos los estilos dentro de este bloque afectarán a elementos dentro de .jobs-search.

2. CSS Nesting para elementos hijos

```css
.jobs-search {
  /* Estilos para la sección */

  h1 {
    /* Solo afecta a los h1 DENTRO de .jobs-search */
    font-size: 2.5rem;
    margin-bottom: .25rem;
  }

  p {
    /* Solo afecta a los p DENTRO de .jobs-search */
    font-size: 1.125rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }
}
```

Gracias al CSS Nesting, estos estilos solo se aplican a `<h1>` y `<p>` que estén dentro de .jobs-search, no a todos los de la página.

3. Clases específicas para componentes

```css
.jobs-search {
  .search-bar {
    /* Estilos para el contenedor del input de búsqueda */
    background: var(--input-bg);
    padding: .25rem .5rem;
  }

  .search-filters {
    /* Estilos para el contenedor de filtros */
    display: flex;
    flex-wrap: wrap;
    margin-top: .5rem;
  }
}
```

Las clases `.search-bar` y `.search-filters` nos permiten aplicar estilos específicos a partes concretas de nuestra sección.

## Ventajas de usar clases

1. Reutilización

Puedes aplicar la misma clase a múltiples elementos para asegurar la consistencia en el diseño:

```html
<button class="btn-primary">Enviar</button>
<button class="btn-primary">Guardar</button>
<button class="btn-primary">Continuar</button>
```

```css
.btn-primary {
  background: blue;
  color: white;
  padding: 10px 20px;
}
```

2. Especificidad controlada

Las clases te dan control sobre qué elementos estilizar sin afectar todos los elementos de ese tipo:

```html
<p>Este párrafo es normal</p>
<p class="highlight">Este párrafo está destacado</p>
<p>Este párrafo es normal</p>
```

```css
.highlight {
  background: yellow;
  font-weight: bold;
}
```

3. Múltiples clases en un elemento

Un elemento puede tener múltiples clases separadas por espacios:

```html
<!-- Elemento con tres clases -->
<button class="btn btn-primary btn-large">
  Comprar ahora
</button>
```

```css
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: blue;
  color: white;
}

.btn-large {
  font-size: 1.2rem;
  padding: 15px 30px;
}
```

Y usando CSS Nesting, podemos organizar mejor los estilos:

```css
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &.btn-primary {
    background: blue;
    color: white;
  }

  &.btn-large {
    font-size: 1.2rem;
    padding: 15px 30px;
  }
}
```

## Consejos para nombrar clases

Más adelante veremos que existen nomenclaturas de clases, como `BEM`, para mantener los selectores organizados y evitar conflictos.

### Nombres descriptivos

```css
/* ❌ Mal: nombres poco descriptivos */
.box1 { }
.rojo { }
.grande { }

/* ✅ Bien: nombres descriptivos */
.card { }
.btn-primary { }
.search-bar { }
```

### Selectores de clase con CSS Nesting

El CSS Nesting hace el código más legible y organizado:

```css
/* Sin nesting */
.jobs-search { }
.jobs-search h1 { }
.jobs-search p { }
.jobs-search .search-bar { }
.jobs-search .search-filters { }

/* Con nesting (más organizado) */
.jobs-search {
  /* Estilos de la sección */

  h1 {
    /* Estilos del título */
  }

  p {
    /* Estilos del párrafo */
  }

  .search-bar {
    /* Estilos de la barra de búsqueda */
  }

  .search-filters {
    /* Estilos de los filtros */
  }
}
```

### Variables CSS en el ejemplo

Observa cómo en el ejemplo usamos variables CSS:

```css
.jobs-search {
  p {
    color: var(--text-muted); /* Variable CSS */
  }

  .search-bar {
    background: var(--input-bg); /* Variable CSS */
  }
}
Copiar
Las variables CSS (custom properties) se definen con -- y se usan con var():

:root {
  --text-muted: #666;
  --input-bg: #f5f5f5;
}

.jobs-search {
  p {
    color: var(--text-muted); /* Usa la variable */
  }
}
```

## Para terminar con las clases

- Las clases se definen en HTML con class="nombre-clase"
- En CSS, las clases se seleccionan con el punto .nombre-clase
- Puedes aplicar múltiples clases a un elemento separadas por espacios
- Las clases son reutilizables y pueden aplicarse a muchos elementos
- CSS Nesting hace el código más organizado y legible
- Usa nombres descriptivos en inglés y con guiones (kebab-case)


Las clases son la herramienta fundamental para aplicar estilos en CSS. ¡Dominarlas es esencial para crear sitios web profesionales!