# Introducción a Web Components

Los Web Components son una tecnología nativa del navegador que nos permite crear elementos HTML personalizados y reutilizables. Sin necesidad de frameworks, podemos encapsular HTML, CSS y JavaScript en componentes propios.

En esta clase vamos a crear un componente de avatar paso a paso, entendiendo cada parte del proceso.

## ¿Qué son los Web Components?

Los Web Components son elementos HTML personalizados que puedes crear con JavaScript puro. Una vez definidos, los usas como cualquier etiqueta HTML:

```html
<!-- En lugar de escribir esto cada vez -->
<img src="https://avatars.githubusercontent.com/u/1561955" alt="Avatar" />

<!-- Creamos nuestro propio elemento -->
<devjobs-avatar></devjobs-avatar>
```

Los Web Components se basan en tecnologías estándar del navegador:

- Custom Elements: API para definir nuevas etiquetas HTML
- Shadow DOM: Encapsulación de estilos y estructura (lo veremos al final)
- HTML Templates: Plantillas reutilizables (opcional)

## Creando nuestro primer componente

Vamos a construir un componente `<devjobs-avatar>` que muestre un avatar desde GitHub.

### 1. Definir la clase del componente

Todo Web Component es una clase que extiende de HTMLElement:

```javascript
class DevJobsAvatar extends HTMLElement {
  // aquí irá la lógica del componente
}
```

Al extender `HTMLElement`, nuestra clase hereda todas las características de un elemento HTML normal: propiedades, métodos, eventos, etc.

> 📌 Importante: El nombre del componente custom debe contener al menos un guion (-) para distinguirlo de las etiquetas HTML nativas. Por ejemplo: `devjobs-avatar`, `mi-boton`, `card-usuario`. NO puedes usar nombres de una sola palabra como `avatar`, `button`, `card`.

### 2. El constructor y super()

El constructor se ejecuta cuando se crea una instancia del componente:

```javascript
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super() // llamar al constructor de HTMLElement
  }
}
```

`super()` es obligatorio y debe ser lo primero que llamemos. Ejecuta el constructor de la clase padre (`HTMLElement`), inicializando todas las propiedades y métodos heredados.

> 💡 ¿Qué es `this`? En JavaScript, `this` es una referencia al objeto actual. En nuestro Web Component, `this` se refiere a la instancia del elemento HTML que estamos creando. Por ejemplo, si escribes `<devjobs-avatar>` en el HTML, cuando se crea ese elemento, `this` dentro de la clase apunta a ese elemento específico. Por eso podemos hacer `this.innerHTML` o `this.render()` - estamos accediendo a propiedades y métodos del propio elemento.

### 3. El método render

Ahora creamos un método render() que define el contenido de nuestro componente:

```javascript
render() {
  this.innerHTML = `
    <img
      src="https://avatars.githubusercontent.com/u/1561955?v=4"
      alt="Avatar de midudev"
      class="avatar"
    />
  `
}
```

¿Qué hace este código?

- this.innerHTML: Establece el contenido HTML del elemento. Recuerda que this es nuestro elemento `<devjobs-avatar>`
- Usamos template strings (backticks) para escribir HTML de forma cómoda
- Insertamos una imagen con la URL del avatar de GitHub

Si inspeccionas el elemento en el navegador, verías:

```html
<devjobs-avatar>
  <img
    src="https://avatars.githubusercontent.com/u/1561955?v=4"
    alt="Avatar de midudev"
    class="avatar"
  />
</devjobs-avatar>
```

### 4. El ciclo de vida: connectedCallback

Los Web Components tienen métodos de ciclo de vida que se ejecutan en momentos específicos:

```javascript
connectedCallback() {
  this.render()
}
```

`connectedCallback()` se ejecuta automáticamente cuando el elemento se añade al DOM. Es el momento perfecto para renderizar el contenido inicial.

Otros métodos del ciclo de vida que existen:

- `disconnectedCallback()`: Se ejecuta cuando el elemento se elimina del DOM
- `attributeChangedCallback()`: Se ejecuta cuando cambia un atributo observado
- `adoptedCallback()`: Se ejecuta cuando el elemento se mueve a un nuevo documento

### 5. Registrar el componente

El último paso es registrar nuestro componente para que el navegador lo reconozca:

```javascript
customElements.define('devjobs-avatar', DevJobsAvatar)
```

`customElements.define()` recibe:

- Primer argumento: El nombre de la etiqueta HTML (debe tener al menos un guion)
- Segundo argumento: La clase del componente

A partir de este momento, podemos usar `<devjobs-avatar>` en cualquier parte de nuestro HTML.

## El código completo hasta ahora

```javascript
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super() // llamar al constructor de HTMLElement
  }

  render() {
    this.innerHTML = `
      <img
        src="https://avatars.githubusercontent.com/u/60507236?v=4"
        alt="Avatar de midudev"
        class="avatar"
      />
    `
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar)
```

## Usando nuestro componente

Una vez definido, podemos usarlo en el HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Web Component</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <devjobs-avatar></devjobs-avatar>

    <script src="avatar.js"></script>
  </body>
</html>
```

Y también desde JavaScript:

```javascript
const avatar = document.createElement('devjobs-avatar')
document.body.appendChild(avatar)
```

## Mejorando con Shadow DOM

Hasta ahora hemos usado `this.innerHTML` que funciona, pero tiene una limitación importante: si añadimos estilos CSS a nuestro componente, esos estilos pueden verse afectados por los estilos globales de la página (y viceversa).

Para solucionar esto, podemos usar Shadow DOM, que crea un árbol DOM encapsulado:

```javascript
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }) // Creamos Shadow DOM
  }

  render() {
    // Ahora usamos shadowRoot en lugar de innerHTML
    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
        }
      </style>

      <img
        src="https://avatars.githubusercontent.com/u/60507236?v=4"
        alt="Avatar de midudev"
        class="avatar"
      />
    `
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar)
```

Con Shadow DOM:

- Los estilos dentro del componente no afectan al resto de la página
- Los estilos de la página no afectan al componente
- Cada instancia del componente tiene su propio árbol DOM encapsulado

Esto es perfecto para crear componentes verdaderamente reutilizables y aislados.

> 📌 En la siguiente clase veremos cómo hacer este componente más dinámico, aceptando diferentes usuarios y servicios a través de atributos HTML.

## Resumiendo lo aprendido en esta clase

- Los Web Components permiten crear elementos HTML personalizados con JavaScript puro
- Se crean extendiendo la clase `HTMLElement`
- El nombre del componente debe contener al menos un guion (-)
- `super()` debe llamarse primero en el constructor
- `this` se refiere a la instancia del elemento que estamos creando
- `connectedCallback()` se ejecuta cuando el elemento se añade al DOM
- `customElements.define()` registra el componente para poder usarlo
- Shadow DOM permite encapsular estilos y evitar conflictos con el CSS global

Con Web Components podemos crear componentes reutilizables sin necesidad de frameworks externos.