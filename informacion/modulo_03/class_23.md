# Ejercicios prácticos

Es momento de poner en práctica todo lo que hemos aprendido hasta ahora. En esta clase te propongo una serie de ejercicios que te ayudarán a consolidar los conocimientos sobre eventos, manipulación del DOM, filtrado de datos y generación dinámica de contenido.

Todos estos ejercicios se basan en el proyecto del buscador de empleos que hemos estado construyendo. Recuerda que puedes consultar las clases anteriores si necesitas repasar algún concepto.

## Ejercicio 1: Implementar el buscador por título

Objetivo

Hacer funcionar el input de búsqueda para que filtre las ofertas de empleo en tiempo real mientras el usuario escribe.

### Descripción

Actualmente tenemos un input de búsqueda en nuestro proyecto, pero no está conectado a ninguna funcionalidad. El objetivo es que cuando el usuario escriba en ese campo, se filtren automáticamente las ofertas mostrando solo aquellas cuyo título contenga el texto buscado.

Por ejemplo:

- Si escribo “analista”, solo debería mostrar ofertas que incluyan esa palabra en el título
- Si escribo “desarrollador”, solo las que tengan esa palabra
- Si borro el texto, deberían aparecer todas las ofertas de nuevo

### Pistas para resolverlo

- Captura el evento correcto: Necesitas escuchar el evento `input` en el campo de búsqueda (no `click` o `submit`)
- Obtén el valor del input: Usa `.value` para obtener lo que el usuario ha escrito
- Compara cadenas de texto: Investiga el método `.includes()` de los strings para verificar si una cadena contiene otra:

```javascript
const titulo = 'Desarrollador Frontend'
titulo.includes('Desarrollador') // true
titulo.includes('Backend') // false
```

- Ten en cuenta mayúsculas/minúsculas: El método `.includes()` distingue entre mayúsculas y minúsculas. Puedes convertir ambas cadenas a minúsculas con `.toLowerCase()`:

```javascript
const titulo = 'Desarrollador Frontend'
const busqueda = 'desarrollador'
titulo.toLowerCase().includes(busqueda.toLowerCase()) // true
```

- Filtra el array: Usa `.filter()` para crear un nuevo array solo con las ofertas que coincidan

- Re-renderiza los resultados: Una vez tengas el array filtrado, vuelve a renderizar las tarjetas en el DOM

### Desafío adicional

Añade un indicador visual que muestre cuántos resultados se encontraron. Por ejemplo: “Mostrando 5 de 20 ofertas”.

## Ejercicio 2: Añadir más filtros

### Objetivo

Implementar filtros adicionales para nivel de experiencia y tecnologías.

### 2.1 Filtro por nivel de experiencia

Ya hemos visto cómo funciona el filtro de ubicación. El filtro por nivel de experiencia es muy similar:

- Añade un `<select>` con opciones como: “Junior”, “Mid”, “Senior”
- Captura el cambio con el evento change
- Filtra las ofertas por el campo data.nivel

Este ejercicio es más sencillo porque es prácticamente igual al filtro de ubicación que ya implementamos.

### 2.2 Filtro por tecnología (nivel básico)

Primero, implementa el filtro de forma que funcione con una sola tecnología:

- Añade un `<select>` con opciones: “React”, “Node”, “JavaScript”, “Python”, etc.
- Filtra las ofertas que tengan esa tecnología en su array `data.technology`

> Pista: Recuerda que `data.technology` es un array, así que necesitarás comprobar si ese array incluye la tecnología seleccionada:

```javascript
const job = {
  data: {
    technology: ['react', 'node', 'javascript'],
  },
}

job.data.technology.includes('react') // true
job.data.technology.includes('python') // false
```

### 2.3 Filtro por tecnología (nivel avanzado) 🔥

Aquí viene el desafío real: ¿Cómo harías si el usuario pudiera seleccionar múltiples tecnologías?

Piensa en esto:

- ¿Mostrarías ofertas que tengan al menos una de las tecnologías seleccionadas?
- ¿O solo ofertas que tengan todas las tecnologías seleccionadas?
- ¿Cómo permitirías al usuario seleccionar múltiples tecnologías? (checkboxes, select múltiple, botones…)

Este ejercicio requiere pensar más allá de lo que hemos visto, pero con los conceptos que ya conoces, puedes resolverlo. Te doy una pista:

```javascript
// Array de tecnologías seleccionadas por el usuario
const tecnologiasSeleccionadas = ['react', 'node']

// Comprobar si una oferta tiene AL MENOS una de esas tecnologías
const tieneAlgunaTech = tecnologiasSeleccionadas.some((tech) => job.data.technology.includes(tech))

// Comprobar si una oferta tiene TODAS esas tecnologías
const tieneTodas = tecnologiasSeleccionadas.every((tech) => job.data.technology.includes(tech))
```

### Desafío adicional

Combina todos los filtros: que el usuario pueda filtrar por ubicación, nivel Y tecnologías al mismo tiempo.

## Ejercicio 3: Paginación dinámica

### Objetivo

Generar la paginación de forma dinámica basándote en el número total de ofertas y los resultados por página.

### Descripción

En lugar de tener los números de página escritos a mano en el HTML, vamos a generarlos dinámicamente con JavaScript.

### Requisitos

- Define una constante con el número de resultados por página:

```javascript
const RESULTS_PER_PAGE = 3
```

- Calcula cuántas páginas necesitas:

```javascript
const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)
// Si tienes 20 ofertas y 3 por página: Math.ceil(20/3) = 7 páginas
```

- Genera los botones de paginación dinámicamente:
   - Crea un botón por cada página
   - El botón activo debe tener una clase especial (por ejemplo, active)
- Muestra solo los resultados de la página actual:
   - Si estamos en la página 1, muestra las ofertas 0-2
   - Si estamos en la página 2, muestra las ofertas 3-5
   - Y así sucesivamente

### Pistas para resolverlo

Para generar los botones:

```javascript
const paginationContainer = document.querySelector('.pagination')

// Limpiar la paginación existente
paginationContainer.innerHTML = ''

// Crear un botón por cada página
for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button')
  button.textContent = i
  button.className = 'page-button'

  // Si es la página actual, añadir clase activa
  if (i === currentPage) {
    button.classList.add('active')
  }

  paginationContainer.appendChild(button)
}
```

Para mostrar solo los resultados de una página:

```javascript
const currentPage = 1
const RESULTS_PER_PAGE = 3

const startIndex = (currentPage - 1) * RESULTS_PER_PAGE
const endIndex = startIndex + RESULTS_PER_PAGE

const jobsToShow = jobs.slice(startIndex, endIndex)
// Página 1: slice(0, 3) → ofertas 0, 1, 2
// Página 2: slice(3, 6) → ofertas 3, 4, 5
```

### No hace falta implementar los clicks (todavía)

Para este ejercicio, no es necesario que hagas funcionar los clics en los botones de paginación. Eso lo veremos en clases futuras cuando profundicemos más en eventos y estado de la aplicación.

Por ahora, el objetivo es que:

- La paginación se genere de forma dinámica
- Solo se muestren los resultados de la primera página inicialmente

### Desafío adicional

Si ya quieres ir más allá, puedes intentar:

- Añadir botones “Anterior” y “Siguiente”
- Ocultar el botón “Anterior” si estás en la primera página
- Ocultar el botón “Siguiente” si estás en la última página
- Hacer que funcionen los clicks para cambiar de página

## Resumen de ejercicios

| Ejercicio | Dificultad | Conceptos que practicas |
|-----------|------------|-------------------------|
| 1. Buscador por título | ⭐⭐ Media | Eventos input, .filter(), .includes(), .toLowerCase() |
| 2.1. Filtro nivel de experiencia | ⭐ Fácil | Eventos change, .filter(), selects |
| 2.2. Filtro tecnología simple | ⭐⭐ Media | Arrays, .includes(), .filter() |
| 2.3. Filtro tecnología múltiple | ⭐⭐⭐ Difícil | .some(), .every(), lógica compleja |
| 3. Paginación dinámica | ⭐⭐⭐ Difícil | .slice(), bucles, cálculos matemáticos, generación dinámica |

## Consejos generales

- Empieza por lo más sencillo: No intentes hacer todo a la vez. Empieza con el ejercicio 1, pruébalo, y cuando funcione, pasa al siguiente.

- Usa `console.log()`: Es tu mejor amigo para depurar. Si algo no funciona, imprime los valores en la consola para ver qué está pasando.

- Prueba cada parte por separado: Si estás haciendo el filtro, primero asegúrate de que capturas bien el evento, luego que obtienes el valor correcto, luego que el filtro funciona, etc.

- No te frustres: Estos ejercicios requieren práctica. Si te atascas, repasa las clases anteriores, busca en la documentación, o simplemente tómate un descanso y vuelve después.

- Experimenta: No hay una única forma correcta de resolver estos ejercicios. Prueba diferentes enfoques y aprende de los errores.

> 💡 En la siguiente clase resolveremos algunos de estos ejercicios juntos y veremos diferentes formas de abordar los problemas más complejos.

¡Mucha suerte con los ejercicios! 🚀