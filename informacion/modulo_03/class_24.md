# Despliegue a producción

En esta clase aprenderemos a subir nuestra página web a Internet para que cualquier persona pueda verla desde cualquier lugar del mundo.

## ¿Qué es un despliegue o deploy?

Un despliegue (o deploy en inglés) es el proceso de tomar tu código que funciona en tu ordenador local y publicarlo en un servidor para que esté disponible en Internet.

Cuando desarrollas una página web en tu ordenador, solo tú puedes verla abriendo los archivos HTML en tu navegador. Pero para que otras personas puedan acceder a tu web, necesitas:

- **Subir los archivos a un servidor** - Un ordenador que esté conectado a Internet 24/7
- **Obtener una URL pública** - Una dirección web que cualquiera pueda visitar
- **Servir los archivos** - El servidor entrega tu página cuando alguien visita la URL

Este proceso es lo que conocemos como despliegue a producción.

## Archivos estáticos vs contenido dinámico

Antes de hacer un despliegue, es importante entender la diferencia entre dos tipos de archivos web:

### Archivos estáticos

Son archivos que no cambian y se sirven tal cual están en el servidor:

- **HTML** - La estructura de tu página
- **CSS** - Los estilos
- **JavaScript** - El código que se ejecuta en el navegador
- **Imágenes** - JPG, PNG, SVG, etc.
- **Fuentes** - Archivos de tipografías
- **Videos y audios**

Los archivos estáticos son rápidos de servir y fáciles de desplegar porque el servidor simplemente los envía al navegador sin procesarlos.

```javascript
// Este archivo JavaScript es estático
// El servidor lo envía tal cual al navegador
const button = document.querySelector('button')
button.addEventListener('click', () => {
  alert('¡Hola!')
})
```

### Contenido dinámico

Son archivos que se generan o procesan en el servidor antes de enviarse al navegador:

- **Páginas que consultan una base de datos** - Para mostrar usuarios, productos, etc.
- **APIs** - Endpoints que devuelven datos en JSON
- **Autenticación** - Sistemas de login y sesiones
- **Contenido personalizado** - Páginas que cambian según el usuario

Para servir contenido dinámico necesitas un servidor backend con lenguajes como Node.js, Python, PHP, etc.

> ¡OJO! Que tengamos archivos estáticos no significa que no podamos tener contenido dinámico. Podemos tener archivos estáticos que hagan peticiones a servidores externos y obtengan datos dinámicos que podrán mostrar en la página. La diferencia clave es que eso pasará en el cliente, no en el servidor.

## ¿Cuál es la diferencia?

```markdown
🗂️ Archivos estáticos:
Cliente solicita → Servidor envía el archivo → Cliente recibe y muestra

🔄 Contenido dinámico:
Cliente solicita → Servidor procesa/consulta DB → Genera respuesta → Cliente recibe
```

> Para esta clase, trabajaremos con archivos estáticos**, que son perfectos para páginas web, landing pages, portfolios y aplicaciones que no necesitan un backend. Pero en clases siguientes usaremos Node.js, Bases de Datos y APIs para crear aplicaciones dinámicas.

## Desplegando con Netlify Drop

Netlify Drop es la forma más sencilla de desplegar una página web estática. No necesitas crear una cuenta, instalar nada ni usar la terminal.

### Cómo funciona Netlify Drop

- Arrastra tu carpeta con los archivos HTML, CSS y JavaScript
- Netlify sube los archivos automáticamente
- Obtienes una URL pública al instante

### Paso a paso para desplegar

- Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
- Prepara tu carpeta: Asegúrate de tener todos los archivos necesarios en una carpeta. En nuestro caso, la carpeta 02-javascript que contiene:
   - index.html - Tu página principal
   - styles.css - Los estilos
   - main.js - Tu código JavaScript
   - Cualquier otra imagen o recurso que uses
- Arrastra la carpeta directamente en el área de Netlify Drop
- Espera unos segundos mientras Netlify sube y procesa tus archivos
- ¡Listo! Netlify te da una URL pública como:

```markdown
https://random-name-12345.netlify.app
```

> Si no tienes cuenta, la URL durará una hora y tendrás que usar un password para poder acceder. Si te registras, que es gratis, la URL no tendrá limitación de tiempo y podrás acceder a ella siempre que quieras.

## Ventajas de usar Netlify Drop

✅ Sin configuración - No necesitas crear cuenta para probar ✅ Gratis - Perfecto para proyectos personales y aprendizaje ✅ Rápido - Tu sitio está online en segundos ✅ HTTPS automático - Tu sitio es seguro desde el primer momento ✅ CDN global - Tu web se carga rápido en todo el mundo

## ¿Qué pasa si hago cambios?

Si modificas tu código y quieres actualizar la web, simplemente:

- Haz los cambios en tus archivos locales
- Arrastra la carpeta nuevamente a Netlify Drop
- Netlify actualizará tu despliegue con los nuevos archivos

> 💡 Tip: ¡Si creas una cuenta en Netlify (gratis), puedes conectar tu repositorio de GitHub y los despliegues se harán automáticamente cada vez que hagas un commit!

## Verificando que todo funciona

Una vez desplegada tu página, verifica que:

- ✅ La página se carga correctamente
- ✅ Los estilos CSS se aplican
- ✅ El JavaScript funciona
- ✅ Las imágenes se ven
- ✅ Los enlaces funcionan

Si algo no funciona, revisa:

- 🔍 Las rutas de archivos - Asegúrate de usar rutas relativas en tu HTML
- 🔍 La consola del navegador - Busca errores de JavaScript
- 🔍 Los archivos subidos - Verifica que todos los archivos estén en la carpeta

## Lo que hemos aprendido…

- 🚀 Qué es un despliegue o deploy y por qué es importante
- 📄 La diferencia entre archivos estáticos y dinámicos
- 🌐 Cómo usar Netlify Drop para desplegar tu página web
- 🎉 A compartir tu trabajo con el mundo entero

¡Felicidades! Tu página web ya está en Internet y cualquier persona puede visitarla. Este es un paso fundamental en tu camino como desarrollador web.