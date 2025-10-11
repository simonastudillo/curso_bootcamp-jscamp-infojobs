# Pseudo-clases en CSS

Las pseudo-clases son selectores especiales en CSS que nos permiten aplicar estilos a elementos según su `estado` o `posición`. Son fundamentales para crear interfaces interactivas y accesibles.

## ¿Qué es una pseudo-clase?

Una pseudo-clase se escribe con dos puntos `:` seguido del nombre de la pseudo-clase:

```css
selector:pseudo-clase {
  /* estilos */
}
```

Las pseudo-clases más comunes relacionadas con la interacción del usuario son:

- `:hover` - cuando el usuario pasa el ratón sobre el elemento
- `:focus` - cuando el elemento tiene el foco (seleccionado)
- `:active` - cuando el elemento está siendo activado/clicado
- `:disabled` - cuando el elemento está deshabilitado


### `:hover` - Al pasar el ratón

La pseudo-clase `:hover` se activa cuando el usuario pasa el cursor del ratón sobre un elemento.

#### ¿Por qué es importante?

- Feedback visual: El usuario sabe que el elemento es interactivo
- Mejora la UX: Indica claramente los elementos clicables
- Guía al usuario: Muestra qué elementos responden a la interacción


### `:focus` - Cuando tiene el foco

La pseudo-clase `:focus` se activa cuando un elemento recibe el foco, generalmente al hacer clic en él o al navegar con el teclado (usando la tecla Tab).

#### ¿Por qué es importante?

- Accesibilidad: Los usuarios que navegan con teclado necesitan ver qué elemento está seleccionado
- Formularios: Indica qué campo está activo para escribir
- Navegación por teclado: Esencial para usuarios con discapacidades motoras
- :focus en botones
- Importante: Nunca elimines completamente los estilos de focus sin proporcionar una alternativa visual. Los usuarios que navegan con teclado los necesitan.

### `:active` - Al hacer clic

La pseudo-clase `:active` se activa en el momento exacto en que el usuario está presionando un elemento (mientras mantiene el botón del ratón presionado).

#### ¿Por qué es importante?

- Feedback inmediato: El usuario sabe que su clic fue registrado
- Sensación táctil: Simula la sensación de presionar un botón físico
- Mejora la experiencia: Hace la interfaz más responsive y natural

#### Ejemplo completo con todas las pseudo-clases

```css
.btn {
  background: #0066cc;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  /* Al pasar el ratón */
  &:hover {
    background: #0052a3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Al recibir el foco (con teclado) */
  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  /* Al hacer clic */
  &:active {
    background: #003d7a;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}
```

### `:disabled` - Cuando está deshabilitado

La pseudo-clase `:disabled` se aplica a elementos de formulario que tienen el atributo `disabled`.

#### ¿Por qué es importante?

- Indica que no está disponible: El usuario sabe que no puede interactuar con el elemento
- Previene acciones: Visualmente muestra que el elemento no responderá
- Mejora la UX: Evita confusión sobre qué elementos son interactivos

#### Ejemplo básico

```html
<button>Botón activo</button>
<button disabled>Botón deshabilitado</button>

<input type="text" placeholder="Campo activo">
<input type="text" disabled placeholder="Campo deshabilitado">
```

```css
button {
  &:hover {
    background: darkblue;
  }

  &:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Importante: hover NO debe aplicarse si está disabled */
  &:disabled:hover {
    background: #ccc; /* Se mantiene igual */
  }
}

input {
  border: 2px solid #ccc;
  padding: 10px;

  &:disabled {
    background: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
}
```

## La propiedad `pointer-events: none`

Cuando un elemento está deshabilitado, además de cambiar su apariencia visual, a veces queremos desactivar completamente todas las interacciones con ese elemento. Para esto usamos `pointer-events: none`.

### ¿Qué hace `pointer-events: none`?

La propiedad `pointer-events` controla si un elemento puede ser el objetivo de eventos del ratón o del puntero. Cuando se establece en `none`:

- Ignora todos los clics: El elemento no responde a clics del ratón
- Ignora hover: No se activará la pseudo-clase `:hover`
- No captura eventos: Los eventos del ratón “atraviesan” el elemento
- El cursor no cambia: No se mostrará el cursor definido en el elemento

### Ejemplo práctico

```html
<div class="container">
  <button class="disabled-with-pointer-events">
    No puedes hacer clic aquí
  </button>
</div>
```

```css
.disabled-with-pointer-events {
  background: #ccc;
  color: #666;
  opacity: 0.6;
  cursor: not-allowed;
  
  /* Desactiva completamente las interacciones */
  pointer-events: none;

  /* Este hover nunca se aplicará gracias a pointer-events: none */
  &:hover {
    background: darkblue; /* No funcionará */
  }
}
```

### ¿Cuándo usar pointer-events: none?

```css
/* Opción 1: Solo estilos visuales */
button {
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
    
    /* Necesitas sobrescribir el hover manualmente */
    &:hover {
      background: #ccc;
    }
  }
}
```

```css
/* Opción 2: Con pointer-events (más simple) */
button {
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none; /* Ya no necesitas sobrescribir hover */
  }
}
```

### Ventajas de pointer-events: none

- Más simple: No necesitas sobrescribir :hover, :active, etc.
- Más seguro: Garantiza que no habrá interacciones accidentales
- Mejor rendimiento: El navegador no procesa eventos en ese elemento


### Consideraciones importantes

```css
/* ⚠️ Cuidado: pointer-events afecta también a los elementos hijos */
.parent {
  pointer-events: none;

  /* Los hijos tampoco recibirán eventos */
  button {
    /* Este botón no responderá a clics */
  }
}

/* ✅ Solución: Reactiva eventos en hijos específicos */
.parent {
  pointer-events: none;

  .active-child {
    pointer-events: auto; /* Reactiva los eventos */
  }
}
```

### Ejemplo completo: Botón con loading

```html
<button class="btn-submit" disabled>
  <span class="spinner"></span>
  Enviando...
</button>
```

```css
.btn-submit {
  background: #0066cc;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0052a3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    pointer-events: none; /* Desactiva toda interacción */
    
    /* Ya no necesitamos esto gracias a pointer-events: none */
    /* &:hover {
      background: #ccc;
    } */
  }
}
```

En resumen: `pointer-events: none` es una forma más robusta de asegurar que un elemento deshabilitado no responda a ninguna interacción del usuario.

## Orden de las pseudo-clases

Cuando usas múltiples pseudo-clases en enlaces, el orden importa. La regla nemotécnica es LVHA (Love Hate):

```css
a {
  color: blue;

  /* L - Link (estado normal del enlace) */
  &:link {
    color: blue;
  }

  /* V - Visited (enlace visitado) */
  &:visited {
    color: purple;
  }

  /* H - Hover (al pasar el ratón) */
  &:hover {
    color: darkblue;
  }

  /* A - Active (al hacer clic) */
  &:active {
    color: red;
  }
}
```

Si no sigues este orden, algunos estilos pueden no funcionar como esperas.

## Otras pseudo-clases útiles

Además de las que hemos visto, hay otras pseudo-clases muy útiles:

```css
/* Primer hijo */
li:first-child {
  font-weight: bold;
}

/* Último hijo */
li:last-child {
  border-bottom: none;
}

/* Elemento enésimo */
li:nth-child(odd) {
  background: #f5f5f5;
}

/* No (negación) */
button:not(.primary) {
  background: gray;
}

/* Válido/inválido (formularios) */
input:valid {
  border-color: green;

  &:invalid {
    border-color: red;
  }
}
```