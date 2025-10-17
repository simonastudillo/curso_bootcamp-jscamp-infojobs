# Renderizando datos con fetch

En la clase anterior aprendimos qué es `fetch` y cómo funciona de forma asíncrona. Ahora lo aplicamos a nuestro proyecto para traer el archivo `data.json` y pintar los empleos en la página.

## Cargar un JSON local

`fetch` no solo sirve para APIs remotas: también podemos pedir archivos que tengamos en nuestro propio proyecto. En este caso, `data.json` vive junto a nuestro HTML y contiene la lista de trabajos.

```javascript
fetch('./data.json')
  .then((response) => response.json())
  .then((jobs) => {
    console.log('Empleos obtenidos:', jobs.length)
  })
```

Una vez convertimos la respuesta a JSON, tenemos un array de objetos listo para usar.

## Crear elementos dinámicamente

El siguiente paso es recorrer cada empleo y crear un `article` con toda la información.

```javascript
const container = document.querySelector('.jobs-listings')

fetch('./data.json') // obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json()
  })
  .then((jobs) => {
    // recorremos los datos y los mostramos en el DOM
    jobs.forEach((job) => {
      // creamos un elemento HTML <article> para cada trabajo
      const article = document.createElement('article')
      // añadimos la clase job-listing-card al elemento
      article.className = 'job-listing-card'
      // añadimos los datos al elemento
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      // añadimos el contenido HTML al elemento
      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`

      // añadimos el elemento al contenedor
      container.appendChild(article)
    })
  })
```

## ¿Qué hacemos con cada empleo?

- Creamos un `article` para mantener la estructura HTML que ya teníamos
- Añadimos clases y atributos `data-*` para que los filtros sigan funcionando
- Inyectamos el contenido con `innerHTML`
- Agregamos el `article` al contenedor principal

## Mostrando un mensaje mientras cargamos

Podemos mejorar la experiencia del usuario mostrando un estado de carga y removiéndolo cuando terminamos.

```javascript
const loading = document.querySelector('#jobs-loading')

fetch('./data.json')
  .then((response) => response.json())
  .then((jobs) => {
    if (loading) loading.remove()

    if (jobs.length === 0) {
      container.innerHTML = '<p>No hay empleos disponibles por ahora.</p>'
      return
    }

    jobs.forEach((job) => {
      // ... mismo código anterior
    })
  })
  .catch((error) => {
    if (loading) loading.textContent = 'No se pudieron cargar los empleos'
    console.error(error)
  })
```

> ¡Esto no lo hacemos en la clase en vídeo! Pero te animo a que lo hagas tu mismo para practicar.

## ¡Los puntos clave!

- `fetch` también funciona con archivos alojados en tu proyecto
- Podemos convertir la respuesta a JSON y usar los datos como un array normal
- Crear elementos dinamicamente nos permite reutilizar los filtros que ya construimos
- Añadir estados de carga y manejo de errores mejora la experiencia del usuario

Esto nos deja la base para seguir enriqueciendo la aplicación: podremos combinar `fetch` con filtros, paginación o incluso guardar los datos en un backend en clases futuras.