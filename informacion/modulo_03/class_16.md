# JSON desde cero

En esta clase analizamos desde cero qué es JSON (JavaScript Object Notation), por qué se utiliza como formato de intercambio de datos y en qué se parece (y no) a los objetos de JavaScript.

## ¿Qué es JSON?

JSON es un formato de texto ligero para almacenar y transportar datos. Se inspira en la sintaxis de los objetos de JavaScript, pero no es JavaScript.

- Es solo texto plano
- Se puede enviar y recibir entre diferentes lenguajes de programación
- Usa pares clave-valor y colecciones como arreglos y objetos

## Diferencias clave con objetos de JavaScript

Aunque la sintaxis se parece, JSON tiene reglas más estrictas:

- Las claves siempre van entre comillas dobles `""`
- Las cadenas usan comillas dobles, nunca simples
- No soporta funciones, métodos ni comentarios
- Los valores válidos son: cadenas, números, booleanos, null, objetos y arrays

```javascript
// Objeto de JavaScript válido
const job = {
  id: crypto.randomUUID(),
  isActive: true,
  titulo: 'Desarrollador/a',
  mostrar: () => console.log('Hola'),
}

// JSON equivalente (como texto)
const jobJSON = `{
  "id": "b30f...",
  "isActive": true,
  "titulo": "Desarrollador/a"
}`
```

## Construyendo nuestro primer JSON

En el vídeo vamos creando paso a paso un archivo que representa una lista de ofertas de trabajo. Empezamos con un array y añadimos objetos con los campos obligatorios.

```json
[
  {
    "id": "7a4d1d8b-1e45-4d8c-9f1a-8c2f9a9121a4",
    "titulo": "Desarrollador de Software Senior",
    "empresa": "Tech Solutions Inc.",
    "ubicacion": "Remoto",
    "descripcion": "Buscamos un ingeniero de software con experiencia en desarrollo web y conocimientos en JavaScript, React y Node.js. El candidato ideal debe ser capaz de trabajar en equipo y tener buenas habilidades de comunicación.",
    "data": {
      "technology": ["react", "node", "javascript"],
      "modalidad": "remoto",
      "nivel": "senior"
    }
  }
]
```

Observa que el array puede contener varios objetos, y cada valor respeta las reglas de JSON (comillas dobles para cadenas, arrays con corchetes, etc.).

Así sentamos las bases para trabajar con datos reales en las próximas clases.