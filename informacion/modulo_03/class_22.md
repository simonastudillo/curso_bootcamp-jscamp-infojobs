# Haciendo nuestro Web Component dinámico

En la clase anterior creamos un Web Component básico que mostraba un avatar fijo. Ahora vamos a mejorarlo para que sea dinámico, permitiendo configurar qué usuario y de qué servicio queremos mostrar el avatar.

## El problema con nuestro componente actual

Nuestro componente actual siempre muestra el mismo avatar:

```javascript
render() {
  this.shadowRoot.innerHTML = `
    <img src="https://avatars.githubusercontent.com/u/60507236?v=4" />
  `
}
```

Esto no es muy útil. Lo ideal sería poder usarlo así:

```html
<!-- Avatar de diferentes usuarios -->
<devjobs-avatar username="midudev"></devjobs-avatar>
<devjobs-avatar username="pepe"></devjobs-avatar>

<!-- Avatares de diferentes servicios -->
<devjobs-avatar service="twitter" username="midudev"></devjobs-avatar>
<devjobs-avatar service="youtube" username="midudev"></devjobs-avatar>

<!-- Con diferentes tamaños -->
<devjobs-avatar username="midudev" size="80"></devjobs-avatar>
```

Vamos a implementar esto paso a paso.

## Leyendo atributos HTML con getAttribute

Los elementos HTML pueden tener atributos, y podemos leerlos con el método `getAttribute()`:

```javascript
render() {
  const username = this.getAttribute('username')
  console.log(username) // 'midudev' si usamos <devjobs-avatar username="midudev">
}
```

Si el atributo no existe, `getAttribute()` devuelve `null`. Podemos usar el operador de fusión nula `(??)` para establecer valores por defecto:

```javascript
const username = this.getAttribute('username') ?? 'midudev'
const service = this.getAttribute('service') ?? 'github'
const size = this.getAttribute('size') ?? '40'
```

Ahora:

- Si usamos `<devjobs-avatar username="pepe">`, `username` será `'pepe'`
- Si usamos `<devjobs-avatar>` sin atributos, `username` será `'midudev'` (el valor por defecto)

## Creando un método auxiliar para las URLs

En lugar de construir la URL directamente en el método `render()`, vamos a crear un método auxiliar que se encargue de esto:

createUrl(service, username) {
  return `https://unavatar.io/${service}/${username}`
}
Copiar
Este método recibe el servicio y el usuario, y devuelve la URL completa:

```javascript
createUrl('github', 'midudev')
// → 'https://unavatar.io/github/midudev'

createUrl('twitter', 'midudev')
// → 'https://unavatar.io/twitter/midudev'

createUrl('youtube', 'midudev')
// → 'https://unavatar.io/youtube/midudev'
```

> 💡 unavatar.io es un servicio gratuito que proporciona avatares de múltiples plataformas de forma unificada. Funciona con GitHub, Twitter, YouTube, Instagram, y muchas más.

## Haciendo el render dinámico

Ahora juntamos todo en el método render():

```javascript
render() {
  // 1. Leemos los atributos con valores por defecto
  const service = this.getAttribute('service') ?? 'github'
  const username = this.getAttribute('username') ?? 'midudev'
  const size = this.getAttribute('size') ?? '40'

  // 2. Generamos la URL usando nuestro método auxiliar
  const url = this.createUrl(service, username)

  // 3. Renderizamos con los valores dinámicos
  this.shadowRoot.innerHTML = `
    <style>
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
      }
    </style>

    <img
      src="${url}"
      alt="Avatar de ${username}"
      class="avatar"
    />
  `
}
```

## Desglosando el código:

### Paso 1: Lectura de atributos

```javascript
const service = this.getAttribute('service') ?? 'github'
const username = this.getAttribute('username') ?? 'midudev'
const size = this.getAttribute('size') ?? '40'
```

- Leemos cada atributo del elemento HTML
- Si no existe, usamos un valor por defecto con el operador `??`
- Ahora estos valores son variables que podemos usar en nuestro template

## Paso 2: Generar la URL

```javascript
const url = this.createUrl(service, username)
```

Llamamos a nuestro método auxiliar que construye la URL completa según el servicio.

## Paso 3: Template con valores dinámicos

```javascript
this.shadowRoot.innerHTML = `
  <style>
    img {
      width: ${size}px;
      height: ${size}px;
      border-radius: 9999px;
    }
  </style>

  <img
    src="${url}"
    alt="Avatar de ${username}"
    class="avatar"
  />
`
```

Usamos template strings para insertar los valores dinámicos:

- `${size}px`: El ancho y alto vienen del atributo `size`
- `${url}`: La URL generada por nuestro método
- `${username}`: El nombre de usuario para el texto alternativo
- `border-radius: 9999px`: Hace la imagen completamente circular

## El código completo

```javascript
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super() // llamar al constructor de HTMLElement

    this.attachShadow({ mode: 'open' })
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`
  }

  render() {
    const service = this.getAttribute('service') ?? 'github'
    const username = this.getAttribute('username') ?? 'midudev'
    const size = this.getAttribute('size') ?? '40'

    const url = this.createUrl(service, username)

    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          height: ${size}px;
          border-radius: 9999px;
        }
      </style>

      <img
        src="${url}"
        alt="Avatar de ${username}"
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

## Usando nuestro componente mejorado

Ahora podemos usar el componente de múltiples formas:

```html
<!-- Avatar por defecto (GitHub, midudev, 40px) -->
<devjobs-avatar></devjobs-avatar>

<!-- Personalizar el usuario -->
<devjobs-avatar username="pepe"></devjobs-avatar>

<!-- Personalizar el tamaño -->
<devjobs-avatar username="midudev" size="80"></devjobs-avatar>

<!-- Avatar de Twitter -->
<devjobs-avatar service="twitter" username="midudev"></devjobs-avatar>

<!-- Avatar de YouTube con tamaño custom -->
<devjobs-avatar service="youtube" username="midudev" size="100"> </devjobs-avatar>

<!-- Múltiples avatares en la misma página -->
<devjobs-avatar username="midudev" size="50"></devjobs-avatar>
<devjobs-avatar username="pepe" size="50"></devjobs-avatar>
<devjobs-avatar username="juan" size="50"></devjobs-avatar>
```

Cada instancia del componente es independiente y puede tener sus propios valores.

## Ventajas de este enfoque

### Reutilización

El mismo componente se puede usar de muchas formas diferentes simplemente cambiando los atributos HTML.

### Encapsulación

Gracias al Shadow DOM:

- Los estilos del componente no afectan al resto de la página
- Los estilos globales no afectan al componente
- Cada instancia tiene su propio árbol DOM aislado

### Simplicidad de uso

Una vez definido el componente, usarlo es tan simple como escribir HTML:

```html
<devjobs-avatar username="midudev"></devjobs-avatar>
```

No necesitas llamar funciones, pasar parámetros complejos ni configurar nada. Todo funciona de forma declarativa.

## Sin dependencias

Todo esto funciona con JavaScript puro, sin necesidad de React, Vue, Angular ni ningún framework.

## Creando instancias desde JavaScript

También podemos crear y configurar componentes desde JavaScript:

```javascript
// Crear el elemento
const avatar = document.createElement('devjobs-avatar')

// Configurar atributos
avatar.setAttribute('username', 'pepe')
avatar.setAttribute('size', '60')
avatar.setAttribute('service', 'github')

// Añadir al DOM
document.body.appendChild(avatar)
```

O de forma más directa:

```javascript
const avatar = document.createElement('devjobs-avatar')
avatar.username = 'pepe' // También podemos asignar propiedades
document.querySelector('#avatars').appendChild(avatar)
```

## ¡Lo que hemos aprendido!

- Usamos `getAttribute()` para leer atributos HTML del componente
- El operador `??` nos permite establecer valores por defecto cuando los atributos no existen
- Podemos crear métodos auxiliares como `createUrl()` para organizar mejor el código
- Los template strings permiten insertar valores dinámicos en el HTML y CSS
- El Shadow DOM garantiza que los estilos estén encapsulados
- Un mismo componente puede usarse múltiples veces con diferentes configuraciones
- Los Web Components funcionan de forma declarativa, como cualquier elemento HTML

Con estas técnicas puedes crear componentes reutilizables y configurables que funcionen en cualquier proyecto web, sin depender de frameworks externos.