# Aplicando clases CSS dinámicamente

Hasta ahora, si queríamos mostrar u ocultar elementos en JavaScript, podríamos haber usado la propiedad `style` para modificar directamente el CSS en línea:

```javascript
// ❌ No es la mejor forma
job.style.display = 'none'; // ocultar
job.style.display = 'flex'; // mostrar
```

Sin embargo, esto no es la mejor práctica porque mezcla el estilo con la lógica. Una mejor forma es usar clases CSS que definimos en nuestro archivo de estilos y aplicarlas o quitarlas desde JavaScript.

## Definiendo la clase CSS

Primero, creamos una clase CSS para ocultar elementos:

```css
.is-hidden {
  display: none;
}
```

Ahora podemos aplicar o quitar esta clase desde JavaScript para mostrar u ocultar elementos.

## Usando add() y remove() con condicionales

La propiedad `classList` nos permite manipular las clases de un elemento. Podemos usar los métodos `add()` y `remove()` junto con un condicional para aplicar o quitar la clase:

```javascript
jobs.forEach(job => {
  // Obtenemos el atributo data-modalidad del elemento
  const modalidad = job.getAttribute('data-modalidad')
  
  // Calculamos si el elemento debe mostrarse o no
  const isShown = selectedValue === '' || selectedValue === modalidad
  
  // Aplicamos o quitamos la clase según corresponda
  if (selectedValue === '' || selectedValue === modalidad) {
    job.classList.remove('is-hidden')
  } else {
    job.classList.add('is-hidden')
  }
})
```

Esta forma funciona perfectamente, pero podemos simplificarla aún más.

## El método `toggle()` - La forma más sencilla

JavaScript nos ofrece el método `toggle()` que automáticamente agrega o quita una clase dependiendo de si está presente o no. Además, podemos pasarle un segundo parámetro booleano para forzar que se agregue o quite:

```javascript
jobs.forEach(job => {
  const modalidad = job.getAttribute('data-modalidad')
  const isShown = selectedValue === '' || selectedValue === modalidad
  
  // toggle con un segundo parámetro booleano
  // Si isShown es false, añade la clase
  // Si isShown es true, quita la clase
  job.classList.toggle('is-hidden', !isShown)
})
```

¿Qué hace exactamente `toggle('is-hidden', !isShown)`?

- Si `!isShown` es `true`, añade la clase `is-hidden` al elemento
- Si `!isShown` es `false`, quita la clase `is-hidden` del elemento

Usamos `!isShown` (la negación) porque:

- Si el elemento debe mostrarse (`isShown` es `true`), queremos que `is-hidden` NO esté presente
- Si el elemento NO debe mostrarse (`isShown` es `false`), queremos que `is-hidden` SÍ esté presente

## Ventajas de usar clases en lugar de style

- Separación de responsabilidades: El CSS define los estilos, JavaScript define la lógica
- Más fácil de mantener: Si quieres cambiar cómo se ocultan los elementos, solo modificas el CSS
- Mejor rendimiento: Cambiar una clase es más eficiente que modificar múltiples propiedades de estilo
- Más limpio: No llenas el HTML con estilos en línea


## Otros métodos útiles de classList

Además de `add()`, `remove()` y `toggle()`, classList tiene otros métodos útiles:

```javascript
// Verificar si un elemento tiene una clase
if (job.classList.contains('is-hidden')) {
  console.log('El elemento está oculto')
}

// Reemplazar una clase por otra
job.classList.replace('is-hidden', 'is-visible')

// Agregar múltiples clases a la vez
job.classList.add('featured', 'highlighted', 'premium')

// Quitar múltiples clases a la vez
job.classList.remove('featured', 'highlighted', 'premium')
```

Con `classList` y sus métodos, tienes todo lo que necesitas para manipular las clases de tus elementos de forma eficiente y elegante.

> Ahora mismo estamos haciendo este “filtrado” en los estilos. Más adelante, filtraremos los resultados usando JavaScript para evitar que directamente se muestren y, en la sección de Backend, tendremos los filtros directamente en el servidor para ahorrar recursos.