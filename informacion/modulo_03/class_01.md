## Introducción a JavaScript

Hasta ahora hemos trabajado con HTML y CSS para crear páginas web que se ven bien. HTML nos da la estructura y el contenido, CSS nos permite estilizar y hacer que todo se vea bonito. Pero hay algo que nos falta: interactividad.

## ¿Qué es JavaScript?

JavaScript es el lenguaje de programación de la web. Es el tercer pilar fundamental del desarrollo web, junto con HTML y CSS.

Mientras que:

- HTML define la estructura y el contenido
- CSS controla la presentación y el diseño
- JavaScript añade comportamiento e interactividad

## ¿Para qué sirve JavaScript?

JavaScript nos permite añadir interactividad a nuestras páginas web. Hasta ahora, con HTML y CSS hemos creado páginas estáticas que se ven bien, pero no responden a las acciones del usuario de forma dinámica.

Con JavaScript podemos:

- Responder a eventos: clicks, teclas presionadas, movimiento del ratón…
- Cambiar el contenido de la página dinámicamente: sin necesidad de recargar
- Modificar estilos y clases CSS: cambiar la apariencia en tiempo real
- Validar formularios: verificar datos antes de enviarlos
- Hacer peticiones a servidores: obtener o enviar información
- Crear animaciones complejas: más allá de las transiciones CSS
- Almacenar datos localmente: en el navegador del usuario
- Y mucho más…

## JavaScript en el navegador

JavaScript se ejecuta directamente en el navegador web del usuario. Esto significa que:

- No necesitas un servidor: El código se ejecuta en el cliente
- Es instantáneo: No hay espera de red para la interactividad
- Es seguro: Tiene limitaciones de seguridad para proteger al usuario
- Es universal: Funciona en todos los navegadores modernos

## Herramienta para practicar: GoJS.app

Para aprender JavaScript de forma fácil y rápida, hemos creado una herramienta llamada [GoJS.app](https://gojs.app).

### ¿Qué es GoJS.app?

GoJS.app es una herramienta gratuita que te permite:

- Escribir código JavaScript directamente en el navegador
- Ver la salida inmediatamente sin configuración
- Experimentar y aprender sin complicaciones
- Practicar todos los ejemplos del curso

### ¿Por qué usar GoJS.app?

Cuando estás aprendiendo JavaScript, configurar un entorno de desarrollo puede ser complicado:

- ¿Dónde escribo el código?
- ¿Cómo veo el resultado?
- ¿Dónde aparecen los console.log()?

GoJS.app elimina todas estas fricciones. Solo necesitas:

- Abrir gojs.app en tu navegador
- Escribir tu código JavaScript
- Ver el resultado inmediatamente

## Lo que aprenderemos

En este módulo de JavaScript aprenderemos:

- Fundamentos del lenguaje
   - Variables y tipos de datos
   - Operadores y expresiones
   - Estructuras de control

- Manipulación del DOM
   - Seleccionar elementos
   - Modificar contenido y estilos
   - Crear y eliminar elementos
- Eventos e interactividad
   - Responder a clicks y teclado
   - Formularios y validación
   - Interacciones complejas
- Estructuras de datos
   - Arrays y objetos
   - Métodos útiles
   - Manipulación de datos
- Funciones y asincronismo
   - Crear y usar funciones
   - Callbacks y promesas
   - Peticiones a servidores

## La consola del navegador

Antes de continuar, es importante que sepas abrir la consola de desarrollo de tu navegador. Es aquí donde verás los mensajes de JavaScript y podrás depurar tu código.

### ¿Cómo abrir la consola?

En todos los navegadores:

- Presiona F12 (Windows/Linux)
- Presiona Cmd + Option + J (Mac en Chrome)
- Presiona Cmd + Option + C (Mac en Safari)

O también:

- Click derecho en la página → Inspeccionar → Pestaña Console

### Tu primer console.log

La consola es tu mejor amiga al programar en JavaScript. Puedes imprimir mensajes con `console.log()`:

```javascript
console.log('¡Hola desde JavaScript!');
console.log(2 + 2);
console.log('Mi nombre es', 'Miguel');
console.log(true);
```

## Diferencias entre HTML/CSS y JavaScript

| Aspecto | HTML/CSS | JavaScript |
| --- | --- | --- |
| Propósito | Estructura y diseño | Comportamiento |
| Naturaleza | Declarativo | Imperativo |
| Cambios | Estáticos | Dinámicos |
| Interactividad | Limitada (hover, transitions) | Ilimitada |
| Tipo | Lenguaje de marcado/estilos | Lenguaje de programación |


## HTML/CSS: Declarativo

Le dices al navegador qué quieres:

```html
<button class="btn-primary">Click aquí</button>
```

```css
.btn-primary {
  background: blue;
  color: white;
}
```

## JavaScript: Imperativo

Le dices al navegador cómo hacerlo paso a paso:

```javascript
// 1. Busca el botón
const boton = document.querySelector('.btn-primary');

// 2. Cuando hagan click
boton.addEventListener('click', () => {
  // 3. Haz esto
  alert('¡Botón presionado!');
});
```

## JavaScript es un lenguaje de programación

A diferencia de HTML y CSS, JavaScript es un lenguaje de programación completo. Esto significa que tiene:

- Variables: Para almacenar datos
- Tipos de datos: Números, textos, booleanos, etc.
- Operadores: Para realizar cálculos y comparaciones
- Estructuras de control: if/else, loops, etc.
- Funciones: Bloques de código reutilizables
- Objetos y arrays: Para organizar datos complejos

No te preocupes si estos términos son nuevos para ti. Los iremos viendo uno por uno en las siguientes clases.

## ¿Es difícil JavaScript?

JavaScript tiene fama de ser un lenguaje con particularidades y comportamientos inesperados. Sin embargo:

✅ Es accesible para principiantes: Puedes empezar con conceptos simples
✅ Tiene una gran comunidad: Mucha documentación y ayuda disponible
✅ Es práctico: Ves resultados inmediatos en el navegador
✅ Es versátil: Puedes hacer desde cosas simples hasta muy complejas

❌ Tiene peculiaridades: Algunas cosas funcionan de forma extraña (las iremos viendo)
❌ Es permisivo: A veces no te avisa de errores (aprenderemos a evitarlos)

## Preparándote para la siguiente clase

En la próxima clase empezaremos a escribir JavaScript de verdad. Para estar preparado:

- Abre GoJS.app y familiarízate con la herramienta
- Abre la consola de tu navegador (F12) y escribe:

```javascript
console.log('¡Estoy listo para JavaScript!');
```

- Ten tu proyecto de HTML y CSS listo para añadirle interactividad