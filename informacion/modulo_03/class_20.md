# Separando código en módulos

A medida que nuestra aplicación crece, mantener todo el código en un solo archivo se vuelve inmanejable. En esta clase aprendemos a separar el código en diferentes archivos usando el sistema de módulos de JavaScript.

## ¿Qué son los módulos?

Los módulos son archivos independientes de JavaScript que pueden exportar funcionalidades (funciones, objetos, variables) para que otros archivos las importen y utilicen.

Este sistema nos permite:

- Organizar mejor el código separándolo por responsabilidades
- Reutilizar código en diferentes partes de la aplicación
- Mantener el código más fácilmente al tener archivos más pequeños y enfocados
- Evitar contaminar el ámbito global con variables

## Cargando JavaScript como módulos

Para usar módulos en el navegador, necesitamos indicarle al navegador que nuestro script debe tratarse como un módulo. Esto se hace con el atributo `type="module"`:

```html
<!-- Forma tradicional (NO módulo) -->
<script src="main.js"></script>

<!-- Como módulo -->
<script type="module" src="main.js"></script>
```

Al usar `type="module"`, el navegador:

- Permite usar `import` y export en ese archivo
- Ejecuta el código en modo estricto automáticamente
- Trata cada archivo como un ámbito independiente (no contamina el global)
- Aplica CORS, por lo que necesitas un servidor local para desarrollo

## Exportando e importando entre archivos

Una vez que tenemos módulos, podemos mover funcionalidades a archivos separados:

```javascript
// filtros.js
export function filtrarPorTecnologia(jobs, tech) {
  return jobs.filter((job) => job.data.technology.includes(tech))
}

export function filtrarPorModalidad(jobs, modalidad) {
  return jobs.filter((job) => job.data.modalidad === modalidad)
}
```

Y luego importarlas donde las necesitemos:

```javascript
// main.js
import { filtrarPorTecnologia, filtrarPorModalidad } from './filtros.js'

fetch('/repo/content/00-initialize-repo/jobs.json')
  .then((response) => response.json())
  .then((jobs) => {
    const jobsReact = filtrarPorTecnologia(jobs, 'react')
    console.log('Ofertas de React:', jobsReact)
  })
```

> ⚠️ Importante: cuando importas archivos locales, debes incluir la extensión `.js` en el navegador. En bundlers como Webpack o Vite puedes omitirla, pero en el navegador es obligatoria.

## Diferentes formas de exportar

Existen dos formas principales de exportar desde un módulo:

### Exportaciones nombradas
Puedes exportar múltiples elementos con nombre:

```javascript
// utils.js
export function crearElemento(tag) {
  return document.createElement(tag)
}

export const MENSAJE_ERROR = 'No se pudieron cargar los datos'

export class ValidadorFormulario {
  // ...
}
```

Y luego importarlos por nombre (puedes importar solo lo que necesites):

```javascript
import { crearElemento, MENSAJE_ERROR } from './utils.js'
```

## Exportación por defecto

Cada módulo puede tener una exportación por defecto:

```javascript
// renderizador.js
export default function renderizarJobs(jobs) {
  // código para renderizar
}
```

Y se importa sin llaves y con el nombre que quieras:

```javascript
import renderizarJobs from './renderizador.js'
// o
import renderJobs from './renderizador.js' // funciona igual
```

Puedes combinar ambos estilos:

```javascript
import renderizarJobs, { CLASE_CARD, CLASE_ACTIVA } from './renderizador.js'
```

## Orden de carga de los módulos

Cuando trabajas con módulos, el navegador analiza todas las dependencias antes de ejecutar el código. El orden es el siguiente:

- El navegador encuentra el `<script type="module">` y empieza a descargarlo
- Analiza ese archivo y encuentra los `import` que tiene
- Descarga todos esos archivos de forma paralela
- Analiza cada uno de esos archivos por si tienen más `import`
- Una vez descargados y analizados todos los archivos, los ejecuta en el orden correcto

```javascript
// main.js
console.log('3. Ejecutando main.js')
import { mensaje } from './modulo-a.js'
import './modulo-b.js'
```

```javascript
// modulo-a.js
console.log('1. Ejecutando modulo-a.js')
export const mensaje = 'Hola desde módulo A'
```

```javascript
// modulo-b.js
console.log('2. Ejecutando modulo-b.js')
import { mensaje } from './modulo-a.js'
console.log(mensaje)
```

En la consola verás:

```markdown
1. Ejecutando modulo-a.js
2. Ejecutando modulo-b.js
Hola desde módulo A
3. Ejecutando main.js
```

El navegador garantiza que las dependencias se ejecuten antes que los archivos que las necesitan.

> 📌 Evaluación única: Los módulos se evalúan solo una vez aunque los importes desde múltiples archivos. Si modulo-a.js es importado por modulo-b.js y por main.js, su código solo se ejecutará una vez, la primera vez que se encuentra. Las demás importaciones reutilizan la misma instancia.

## Organizando un proyecto con módulos

Una estructura típica podría ser:

```markdown
proyecto/
├── index.html
├── main.js              # punto de entrada
├── services/
│   └── api.js          # lógica de fetch
├── utils/
│   ├── filtros.js      # funciones de filtrado
│   └── dom.js          # utilidades del DOM
└── components/
    └── job-card.js     # renderizado de tarjetas
```

Cada archivo tiene una responsabilidad clara y puede importar lo que necesite de otros archivos.

## Resumen de la clase

- Usa `type="module"` en la etiqueta `<script>` para habilitar módulos
- Los módulos permiten usar `import` y `export` para compartir código entre archivos
- Incluye siempre la extensión `.js` al importar archivos locales en el navegador
- El navegador descarga todos los módulos y los ejecuta en el orden correcto
- Cada módulo se evalúa solo una vez, independientemente de cuántas veces se importe
- Los módulos mantienen su propio ámbito y no contaminan el global

Con módulos, tu código JavaScript escala mucho mejor y es más fácil de mantener a largo plazo.