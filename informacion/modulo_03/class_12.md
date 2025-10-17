# ¿Qué son los atributos data-?

Los atributos `data-` son atributos que se utilizan para almacenar datos en los elementos HTML. Son útiles para almacenar datos que no se van a mostrar en la página pero que pueden ser útiles para nuestro código JavaScript.

```html
<div data-nombre="Miguel" data-edad="25"></div>
```

Ahora, para recuperar los datos, podemos usar el objeto dataset del elemento.

```javascript
const div = document.querySelector('div');
console.log(div.dataset.nombre); // "Miguel"
console.log(div.dataset.edad); // "25"
```

> El objeto `dataset` es un objeto que contiene todos los atributos `data-` del elemento, pero sin el prefijo `data-`.

También podemos recuperar los datos usando el método `getAttribute` del elemento.

```javascript
const div = document.querySelector('div');

console.log(div.getAttribute('data-nombre')); // "Miguel"
console.log(div.getAttribute('data-edad')); // "25"
```

> El método `getAttribute` devuelve el valor de cualquier atributo del elemento. Por eso, en este caso, debemos pasarle el nombre del atributo con el prefijo `data-`.

## Filtrando los resultados de la lista de empleos

Con todo lo que hemos aprendido hasta ahora, podemos filtrar los resultados de la lista de empleos usando los atributos `data-` para recuperar los datos de los elementos HTML.

Lo primero es que en nuestro HTML debemos añadir el atributo `data-modalidad` a cada uno de los elementos de la lista de empleos.

```html
<div class="jobs-listings">
  <article data-technology="react" data-modalidad="remoto" class="job-listing-card">
    ...
  </article>

  <article data-modalidad="cdmx" class="job-listing-card">
    ...
  </article>

  <article data-modalidad="guadalajara" class="job-listing-card">
    ...
  </article>

  <article data-modalidad="remoto" class="job-listing-card">
    ...
  </article>
</div>
```

Ahora que nuestro marcado está listo y nos indica la modalidad de cada uno de los empleos, podemos filtrar los resultados de la lista de empleos usando los atributos `data-` para recuperar los datos de los elementos HTML.

```javascript
const filter = document.querySelector('#filter-modalidad');
const jobs = document.querySelectorAll('.job-listing-card');

filter.addEventListener('change', function () {
  const selectedValue = filter.value

  jobs.forEach(job => {
    // recuperamos el valor de `data-modalidad` del elemento
    const modalidad = job.dataset.modalidad

    // si el valor seleccionado es vacío o es igual al valor de `data-modalidad` del elemento, mostramos el elemento
    if (selectedValue === '' || selectedValue === modalidad) {
      job.style.display = 'flex'
    } else {
      job.style.display = 'none'
    }
  })
})
```

> ¿Por qué usamos `selectedValue === ''`? Porque si el usuario no ha seleccionado ningún valor, entonces el valor de `selectedValue` será una cadena vacía.

> ¿Y por qué `job.style.display = 'flex'`? Porque antes de ocultarlo, ese elemento ya tiene el estilo `display: flex` aplicado. Así que si lo queremos mostrar, deberemos asegurarnos que sigue teniendo ese valor.

Ahora, vamos a terminar de estilar los selects para que se vean mejor.