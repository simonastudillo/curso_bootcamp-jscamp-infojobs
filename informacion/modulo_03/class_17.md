# Entendiendo fetch desde cero

En esta clase vemos qué es `fetch`, cómo funciona y por qué es una herramienta fundamental cuando queremos pedir datos a una URL desde el navegador.

`fetch` es una función disponible que nos permite hacer solicitudes HTTP. Aunque solemos usarla para hablar con APIs, en realidad sirve para cualquier recurso disponible en la web: archivos estáticos, imágenes, JSON, HTML, etc.

> Una API es una interfaz de programación de aplicaciones que permite a los desarrolladores acceder a una fuente de datos o funcionalidades de un sistema.

## Primer contacto con fetch

La forma más básica de usar `fetch` es pasarle una URL. Cuando la petición termina, obtenemos una respuesta y decidimos cómo leerla.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
  console.log(response.ok) // true si la petición salió bien
  console.log(response.status) // código HTTP, por ejemplo 200
})
```

La llamada devuelve inmediatamente un objeto especial llamado promesa. Eso significa que no bloquea tu código: puedes seguir ejecutando otras instrucciones mientras la petición se resuelve.

## ¿Por qué decimos que fetch es asíncrono?

`fetch` funciona de manera asíncrona porque tarda un tiempo en recibir la respuesta del servidor. Imagina que llamas a una pizzería para pedir una pizza:

- Haces el pedido (llamas a `fetch`)
- La pizzería se pone manos a la obra, pero tú no te quedas cruzado de brazos; puedes seguir viendo una serie o haciendo deberes mientras esperas que llegue la pizza
- Cuando la pizza llega, te avisan (la promesa se resuelve) y entonces la comes

Ese “haz algo mientras esperas” es exactamente el comportamiento asíncrono. `fetch` te avisa más tarde cuando los datos están listos.

> ☝️ También existe la sintaxis `async/await` para trabajar con código asíncrono de una forma más legible. La veremos en profundidad más adelante.

## Leer diferentes tipos de respuesta

Una vez recibimos la respuesta, podemos decidir en qué formato queremos leerla. El objeto `Response` que devuelve fetch expone varios métodos útiles:

- `response.json()` → interpreta el cuerpo como JSON y devuelve otro objeto (es la opción más popular cuando consumimos APIs)
- `response.text()` → devuelve el contenido como una cadena de texto, útil para HTML, Markdown, etc.
- `response.blob()` → entrega un Blob, perfecto para trabajar con imágenes o archivos binarios
- `response.arrayBuffer()` o `response.formData()` → opciones más avanzadas para casos concretos

```javascript
fetch('/repo/content/00-initialize-repo/jobs.json')
  .then((response) => response.json())
  .then((jobs) => {
    console.log('Tenemos', jobs.length, 'ofertas disponibles')
  })
  .catch((error) => {
    console.error('No pudimos obtener los datos', error)
  })
```

El segundo `.then` recibe el resultado de `response.json()` ya convertido en un objeto de JavaScript. Si la petición falla (por ejemplo, porque no hay conexión), el `.catch` se ejecuta.

```javascript
fetch('/legal/terminos.html')
  .then((response) => response.text())
  .then((html) => {
    document.querySelector('#legal').innerHTML = html
  })
```

En este caso consumimos un archivo HTML local y lo insertamos en un elemento del DOM. Ninguna API, solo un recurso estático.

Ahora que sabemos todo esto, vamos a ver cómo podemos usar `fetch` para traer los datos de nuestro archivo `data.json` y mostrarlos en la página.