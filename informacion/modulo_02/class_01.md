# 👨‍💻 HTML: Los Primeros Pasos para Crear tu Web

Vamos a adentrarnos en el mundo de HTML, la columna vertebral de cualquier página web. Entender HTML es fundamental porque es el lenguaje que utilizamos para estructurar el contenido que vemos en internet.

## 🤔 ¿Qué es HTML?

HTML, o HyperText Markup Language, no es un lenguaje de programación como JavaScript. Es un lenguaje de marcado que te permite organizar y describir los diferentes elementos de una página web, como textos, imágenes, enlaces, listas y tablas. Piensa en él como el esqueleto de tu sitio web.

## 🧱 Estructura Básica de un Documento HTML

Todo documento HTML sigue una estructura básica. Aquí te explico los dos primeros elementos principales:

- `<!DOCTYPE html>`: Esta declaración le dice al navegador que estás usando la versión más reciente de HTML (HTML5). Siempre va al principio de tu documento.
- `<html lang="es">`: Es el elemento raíz que engloba todo el contenido de tu página. El atributo lang="es" indica que el idioma principal del contenido es el español.

> "¡Ten en cuenta que la declaración `<!DOCTYPE html>` no es una etiqueta HTML! Es una declaración que le dice al navegador que estás usando la versión más reciente de HTML (HTML5)."

## 📝 Nuestro Primer Documento HTML

Vamos a crear un archivo index.html con esta estructura para nuestro proyecto DevJobs. Aquí te dejo un ejemplo de cómo se vería una página básica. ¡Intenta replicarlo!

```html
<!DOCTYPE html>
<html lang="es">

</html>
```

Ahora vamos a ver más elementos para estructurar nuestra página.

## ¿Cómo son los elementos en HTML?

Los elementos en HTML son las etiquetas que se utilizan para estructurar el contenido de la página. Se componen, normalmente, de una etiqueta de apertura y una etiqueta de cierre. Dentro de ellas, se encuentra el contenido del elemento.

```html
<p>Este es un párrafo</p>
```

En este ejemplo, la etiqueta <p> es el elemento que se utiliza para crear un párrafo.

Además los elementos pueden tener atributos. Los atributos son información adicional que se puede añadir a los elementos.

```html
<button type="submit">Este es un botón</button>
```

En este ejemplo, el atributo type es el atributo que se utiliza para crear un botón del tipo “submit”. A lo largo del curso iremos conociendo nuevos y más atributos que nos permitirán crear elementos más complejos.

De hecho, si te fijas, ya hemos visto un atributo en el ejemplo de la estructura básica de un documento HTML.

```html
<html lang="es">
```

En este ejemplo, el atributo lang es el atributo que se utiliza para indicar el idioma del documento.