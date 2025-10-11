# Comentarios en HTML

Los comentarios son anotaciones que puedes hacer en tu código HTML y que el navegador ignorará completamente. Son muy útiles para documentar tu código, dejar notas para otros desarrolladores (o para ti mismo en el futuro) y temporalmente desactivar código sin eliminarlo.

## Sintaxis de los comentarios en HTML

Los comentarios en HTML se escriben entre <!-- y -->:

```html
<!-- Este es un comentario -->
```

Todo lo que esté entre estos símbolos será ignorado por el navegador al renderizar la página.

## Ejemplo básico

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <!-- Este es el encabezado principal de la página -->
    <h1>Bienvenido a mi sitio web</h1>
    
    <p>Este párrafo se mostrará normalmente</p>
    
    <!-- <p>Este párrafo NO se mostrará porque está comentado</p> -->
  </body>
</html>
```

## Comentarios multilínea

Los comentarios pueden abarcar varias líneas:

```html
<!--
  Este es un comentario
  que abarca múltiples líneas.
  Puedes escribir todo lo que necesites aquí.
-->

<section>
  <h2>Contenido</h2>
</section>
```

## Desactivar temporalmente código

```html
<header>
  <h1>Mi sitio web</h1>
  
  <!-- Desactivado temporalmente hasta que el diseño esté listo
  <nav>
    <a href="/productos">Productos</a>
    <a href="/servicios">Servicios</a>
  </nav>
  -->
</header>
```

## ⚠️ Importante: Los comentarios son visibles en el código fuente

Aunque el navegador ignora los comentarios al renderizar la página, los comentarios siguen estando visibles en el código fuente HTML. Cualquier persona puede ver los comentarios si inspecciona el código de la página.

Ejemplo de lo que NO debes hacer:

```html
<!-- ❌ MAL: Nunca pongas información sensible en comentarios -->

<!-- Usuario: admin, Contraseña: 123456 -->

<!-- API Key: sk_live_123456789abcdef -->

<!-- TODO: Eliminar este bug de seguridad antes de producción -->
```

## Diferencia entre comentar y eliminar código

Comentar código es útil cuando:

- Estás probando diferentes versiones de algo
- Quieres desactivar temporalmente una funcionalidad
- Necesitas conservar código antiguo como referencia

```html
<!-- Versión antigua del botón
<button class="btn-old">Comprar</button>
-->

<!-- Versión nueva del botón -->
<button class="btn-new">Comprar ahora</button>
```

Sin embargo, en proyectos profesionales con control de versiones (como Git), generalmente es mejor eliminar el código que ya no se usa y confiar en el historial de versiones si necesitas recuperarlo.

Recuerda: los comentarios son una herramienta poderosa para hacer tu código más mantenible, pero úsalos con sabiduría y nunca incluyas información sensible en ellos.