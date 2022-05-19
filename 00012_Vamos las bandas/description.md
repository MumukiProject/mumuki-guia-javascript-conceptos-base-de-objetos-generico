Contamos con distintas bandas que se almacenan con el siguiente formato:

```javascript
{ id: 1, nombre: "Nirvana", fundacion: 1987, activa: false }
```

A partir de un array de bandas queremos saber si están activas o no de la siguiente forma:

```js
let bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

ム estanActivas(bandas)
`
Nirvana no está activa
Foo Fighters está activa desde el año 1994
Led Zeppelin no está activa
Queens of the Stone Age está activa desde el año 1997
Pearl Jam está activa desde el año 1990
`
```

> Definí la función `estanActivas` que tome un array de bandas por parámetro y retorne por cada una de ellas los siguientes mensajes según corresponda.