# La Estructura Básica de HTML

Al finalizar esta clase serás capaz de:

- ✅ Entender la estructura fundamental de un documento HTML
- ✅ Conocer la función de las etiquetas `<head>` y `<body>`
- ✅ Implementar metadatos esenciales para tu página web
- ✅ Crear una base sólida para tu primera página web

## 🧠 La Cabeza del Documento: `<head>`

La etiqueta `<head>` es como el cerebro de tu documento HTML. Contiene información crucial que no es visible para el usuario, pero que es fundamental para el funcionamiento de la página.

> 💡 Dato importante: Si pones texto directamente en `<head>`, no aparecerá en la página. Su función es describir el documento, no mostrarlo.

## 📋 Elementos esenciales del `<head>`

1. Codificación de caracteres

```html
<meta charset="UTF-8">
```

¿Para qué sirve?

- Permite mostrar correctamente tildes, eñes, símbolos y emojis
- Sin esto verías caracteres extraños como Ã± en lugar de ñ

2. Viewport para dispositivos móviles

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

¿Para qué sirve?

- Hace que tu página se vea bien en móviles y tablets
- Es fundamental para el diseño responsive
- Le dice al navegador cómo escalar la página en diferentes pantallas

3. Título de la página

```html
<title>DevJobs - Inicio</title>
```

¿Para qué sirve?

- Aparece en la pestaña del navegador
- Se muestra en los resultados de Google
- Debe ser descriptivo y único para cada página

4. Descripción para buscadores

```html
<meta name="description" content="Encuentra las mejores ofertas de trabajo para desarrolladores en DevJobs.">
```

¿Para qué sirve?

- SEO: Google la usa en los resultados de búsqueda
- Aparece como el texto descriptivo debajo del título
- Debe ser atractiva y resumir el contenido de la página

## 👁️ El Cuerpo del Documento: `<body>`

La etiqueta <body> es donde vive todo el contenido visible de tu página web. Es lo que los usuarios realmente ven e interactúan.

## 🎨 ¿Qué va dentro de `<body>`?

| Tipo de contenido | Ejemplos |
|---|---|
| Texto | Párrafos, títulos, listas |
| Multimedia | Imágenes, videos, audio |
| Interactivos | Formularios, botones, enlaces |
| Estructura | Navegación, secciones, artículos |

## 🏗️ Construcción del marcado

En `<body>` es donde construiremos toda la estructura de DevJobs:

- Header con navegación
- Secciones de contenido
- Formularios de búsqueda
- Listado de trabajos
- Footer

## 📝 Estructura completa básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>DevJobs - Inicio</title>
    <meta name="description" content="Encuentra las mejores ofertas de trabajo para desarrolladores en DevJobs.">
</head>
<body>
    <!-- Aquí va todo el contenido visible -->
    <h1>¡Hola mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
</body>
</html>
```