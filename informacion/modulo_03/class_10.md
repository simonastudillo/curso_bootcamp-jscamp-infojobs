# Manejar evento change en JavaScript

En la clase anterior, vimos cómo escuchar el evento `click` para ver cuando el usuario hace `click` en un botón. Ahora vamos a escuchar el evento `change` para ver cuando el usuario cambia el valor de un `select`.

Con un HTML como este:

```html
<form class="search-filters">
  <label for="filter-location">Ubicación</label>
  <select id="filter-location">
    <option value="">Todas</option>
    <option value="remoto">Remoto</option>
    <option value="cdmx">Ciudad de México</option>
    <option value="guadalajara">Guadalajara</option>
  </select>
</form>
```

Podemos escuchar el evento `change` para ver cuando el usuario cambia el valor de un select.

```javascript
const filterLocation = document.getElementById('filter-location');

filterLocation.addEventListener('change', function() {
  console.log('Ubicación seleccionada:', filterLocation.value);
});
```

Ten en cuenta que el valor del `select` es el valor del `option` seleccionado… ¡no el nombre de la opción!

Por lo que si el usuario selecciona “Ciudad de México” el valor de la variable `filterLocation.value` será “cdmx”. Así que no confundas el valor del option con el nombre que ve el usuario.

En la próxima clase vamos a ver cómo podemos usarlo para filtrar los resultados de la lista de empleos.