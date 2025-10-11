# Estilizando la página de empleos

Ahora que hemos aprendido sobre clases, pseudo-clases, especificidad y selectores, es momento de poner todo en práctica estilizando nuestra página de empleos (empleos.html).

## El objetivo

Vamos a crear una sección de listado de empleos con:

- Un contenedor con borde redondeado
- Artículos (ofertas de empleo) separados por bordes
- Layout flexible con información organizada
- El último artículo sin borde inferior (usando :last-child)

## La estructura HTML

```html
<div class="jobs-listings">
  <article class="job-listing-card">
    <div>
      <h3>Ingeniero de Software</h3>
      <small>Tech Solutions Inc. | Remoto</small>
      <p>Buscamos un ingeniero de software con experiencia en desarrollo web y conocimientos en JavaScript, React
        y Node.js. El candidato ideal debe ser capaz de trabajar en equipo y tener buenas habilidades de
        comunicación.</p>
    </div>
    <button class="button-apply-job" id="boton-importante">Aplicar</button>
  </article>

  <article class="job-listing-card">
    <div>
      <h3>Analista de Datos</h3>
      <small>Data Driven Co. | Ciudad de México</small>
      <p>Estamos buscando un analista de datos con experiencia en el manejo de grandes conjuntos de datos y
        herramientas de visualización. Se requiere conocimiento en SQL, Python y R.</p>
    </div>
    <button class="button-apply-job">Aplicar</button>
  </article>

  <article class="job-listing-card">
    <div>
      <h3>Desarrollador de Aplicaciones Móviles</h3>
      <small>Mobile Apps Ltd. | Guadalajara</small>
      <p>Buscamos un desarrollador de aplicaciones móviles con experiencia en iOS y/o Android. El candidato debe
        tener conocimientos en Swift, Kotlin y el desarrollo de interfaces de usuario.</p>
    </div>
    <button class="button-apply-job">Aplicar</button>
  </article>

  <article class="job-listing-card">
    <div>
      <h3>Ingeniero de DevOps</h3>
      <small>Cloud Services SA | Remoto</small>
      <p>Estamos buscando un ingeniero de DevOps con experiencia en la gestión de infraestructuras en la nube,
        automatización de procesos y herramientas de integración continua. Se requiere conocimiento en AWS, Azure
        o GCP.</p>
    </div>
    <button class="button-apply-job">Aplicar</button>
  </article>
</div>
```

## Los estilos CSS
```css
.jobs-listings {
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 1rem;

  article {
    background: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    margin: 0;

    display: flex;
    align-items: start;
    gap: 1rem;

    small {
      font-size: .875rem;
      opacity: .75;
    }

    p {
      margin-top: 0.5rem;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
```

## Desglosando el CSS

1. El contenedor principal

```css
.jobs-listings {
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 1rem;
}
```

- `border`: Borde sutil usando color blanco con transparencia (.3 = 30% de opacidad)
- `border-radius: 1rem`: Esquinas redondeadas (1rem = 16px aproximadamente)

2. Los artículos individuales (.job-listing-card)

```css
.jobs-listings {
  article {
    background: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    margin: 0;
  }
}
```

Estos estilos sobrescriben posibles estilos previos que pudieran tener los `<article>`:

- `background: none`: Sin fondo
- `box-shadow: none`: Sin sombra
- `border-radius: 0`: Sin esquinas redondeadas
- `border-bottom`: Línea separadora entre empleos
- `margin: 0`: Sin margen exterior

3. Layout flexible

```css
.jobs-listings {
  article {
    display: flex;
    align-items: start;
    gap: 1rem;
  }
}
```

- `display: flex`: Convierte el artículo en contenedor flexible
- `align-items: start`: Alinea los elementos al inicio (arriba)
- `gap: 1rem`: Espacio entre los elementos (contenido y botón)

Esto coloca el contenido de la oferta a la izquierda y el botón “Aplicar” a la derecha.

4. Estilizando elementos internos

```css
.jobs-listings {
  article {
    small {
      font-size: .875rem;
      opacity: .75;
    }

    p {
      margin-top: 0.5rem;
    }
  }
}
```

- small: Texto más pequeño (0.875rem ≈ 14px) y con transparencia (75% opaco)
- p: Añade separación superior para el párrafo de descripción

## La pseudo-clase :last-child

La parte más interesante es esta:

```css
.jobs-listings {
  article {
    &:last-child {
      border-bottom: none;
    }
  }
}
```

## ¿Qué hace :last-child?

La pseudo-clase :last-child selecciona un elemento solo si es el último hijo de su contenedor padre.

## Problema sin :last-child

Sin usar :last-child, todos los artículos tendrían el borde inferior:

```markdown
┌─────────────────────────────┐
│ Artículo 1                  │
├─────────────────────────────┤ ← Borde
│ Artículo 2                  │
├─────────────────────────────┤ ← Borde
│ Artículo 3                  │
├─────────────────────────────┤ ← Borde innecesario
└─────────────────────────────┘
```

## Solución con :last-child

Con :last-child, el último artículo no tiene borde inferior:

```markdown
┌─────────────────────────────┐
│ Artículo 1                  │
├─────────────────────────────┤ ← Borde
│ Artículo 2                  │
├─────────────────────────────┤ ← Borde
│ Artículo 3                  │ ← Sin borde
└─────────────────────────────┘
```

## Pseudo-clases relacionadas

CSS tiene otras pseudo-clases similares a :last-child:

- `:first-child`
Selecciona el primer hijo:

```css
article {
  &:first-child {
    border-top: 3px solid blue; /* Borde especial en el primero */
  }
}
```

- `:nth-child()`
Selecciona elementos según su posición:

```css
/* Elementos pares */
article:nth-child(even) {
  background: #f5f5f5;
}

/* Elementos impares */
article:nth-child(odd) {
  background: white;
}

/* Tercer elemento */
article:nth-child(3) {
  font-weight: bold;
}

/* Cada 3 elementos */
article:nth-child(3n) {
  border-left: 3px solid blue;
}
```

- `:only-child`
Selecciona un elemento solo si es el único hijo:

```css
article:only-child {
  /* Se aplica si hay un solo artículo */
  border: 2px solid gold;
}
```

## El repaso final para mover las manitas
- `:last-child`: Selecciona el último hijo de un contenedor
- Útil para: Eliminar bordes, márgenes o estilos innecesarios en el último elemento
- Familia de pseudo-clases: `:first-child`, `:nth-child()`, `:only-child`
- CSS Nesting: Permite organizar estilos de forma jerárquica
- Flexbox: Ideal para crear layouts de listados