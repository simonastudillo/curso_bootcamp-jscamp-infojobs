# El problema de inyectar HTML sin control

Después de usar `innerHTML` para renderizar la lista de empleos, en esta clase analizamos por qué esa solución puede ser peligrosa si los datos que pintamos no están bajo nuestro control.

## ¿Qué puede salir mal?

Cuando concatenamos cadenas para componer HTML, cualquier dato malicioso puede terminar ejecutándose en el navegador del usuario. Este tipo de ataque se conoce como Cross-Site Scripting (XSS).

```javascript
const job = {
  titulo: 'Oferta increíble',
  empresa: '???',
  descripcion: '<img src=x onerror="alert(\'Robé tus cookies\')">',
}

article.innerHTML = `
  <h3>${job.titulo}</h3>
  <small>${job.empresa}</small>
  <p>${job.descripcion}</p>
`
```

El campo `descripcion` contiene JavaScript que se ejecutará en cuanto el navegador lo procese. Con la misma técnica también podrían inyectar CSS malicioso o redirigir al usuario a otro sitio.

Lo mismo podrías hacer para inyectar incluso estilos CSS. Puede ser menos peligroso pero igual de molesto para el usuario.

```javascript
const job = {
  titulo: 'Oferta increíble',
  empresa: '???',
  descripcion: '<style>body { background-color: red; }</style>',
}
```

## Estrategias para protegernos

- Asignar texto con `textContent`: evita que el navegador interprete el contenido como HTML.

```javascript
const title = document.createElement('h3')
title.textContent = job.titulo

const description = document.createElement('p')
description.textContent = job.descripcion
```

- Crear los nodos necesarios y añadir atributos con `setAttribute` o `dataset` en lugar de concatenar cadenas.

```javascript
const article = document.createElement('article')
article.className = 'job-listing-card'
article.dataset.modalidad = job.data.modalidad

const company = document.createElement('small')
company.textContent = `${job.empresa} | ${job.ubicacion}`
```

- Sanear el contenido si por alguna razón necesitas mostrar HTML enriquecido. Puedes apoyarte en librerías como DOMPurify o en un backend que filtre etiquetas peligrosas antes de enviarlas.

> Desde luego, por más que en frontend debas prevenir estos ataques, siempre es mejor que el backend también haga este trabajo para evitar que los datos lleguen maliciosos.

## Patrón recomendado para la clase

```javascript
const article = document.createElement('article')
article.className = 'job-listing-card'

const wrapper = document.createElement('div')

const title = document.createElement('h3')
title.textContent = job.titulo

const meta = document.createElement('small')
meta.textContent = `${job.empresa} | ${job.ubicacion}`

const description = document.createElement('p')
description.textContent = job.descripcion

const button = document.createElement('button')
button.className = 'button-apply-job'
button.textContent = 'Aplicar'

wrapper.append(title, meta, description)
article.append(wrapper, button)
container.appendChild(article)
```

Con este enfoque nunca interpretamos cadenas como HTML. Todo lo que viene de la red se trata como texto plano, eliminando la superficie de ataque.

## Resumen

- Las inyecciones XSS ocurren cuando datos externos terminan ejecutando código en el navegador
- `innerHTML` facilita el problema porque interpreta la cadena como HTML real
- Usa `textContent`, nodos creados con `createElement` y atributos con `setAttribute`
- Solo permite HTML predefinido o sanitizado cuando realmente lo necesitas

Así mantenemos la aplicación segura incluso cuando consumimos datos que vienen de fuentes externas o que pueden ser manipulados por otras personas.

> Más adelante veremos que bibliotecas como React ya te protegen de este tipo de ataques y por eso no tendrás que preocuparte por esto.