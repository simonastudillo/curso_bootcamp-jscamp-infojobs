# Filtrado de Resultados con Eventos

Cuando creas una página web con una lista de resultados, como una lista de empleos, es útil permitir que los usuarios filtren esos resultados. Ahora te toca a ti usar los elementos `select` y `option` para crear un filtro que filtre los resultados de la lista de empleos.

```html
<form class="search-filters">
  <label for="filter-technology">Tecnología</label>
  <select id="filter-technology">
    <option value="">Todas</option>
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
    <option value="react">React</option>
  </select>
</form>
```

Ya hemos visto que podemos escuchar el evento `click` para ver cuando el usuario hace `click` en un botón, pero ahora vamos a escuchar el evento `change` para ver cuando el usuario cambia el valor de un `select`.

```javascript
const filterTechnology = document.getElementById('filter-technology');

filterTechnology.addEventListener('change', function() {
  console.log('Tecnología seleccionada:', filterTechnology.value);
});
```

Con esto, y un poco de trabajo por tu parte, puedes crear un filtro que filtre los resultados de la lista de empleos.

Si te queda tiempo, estaría bien que también crees y maquetes la página de `detalles.html` que usaremos más adelante en el curso, y así practicas HTML y CSS.