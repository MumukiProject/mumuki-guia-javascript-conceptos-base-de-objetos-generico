Para modelar bandas contamos con objetos con su nombre, año de lanzamiento, si sigue en actividad, una foto, el listado de integrantes y una lista de sus discos. Por ejemplo:

```js
let ledZeppelin = {
  nombre: "Led Zeppelin",
  anio: 1968,
  activa: false,
  miniatura:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
  integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
  discos: [
    {
      nombre: "Led Zeppelin",
      anio: 1969,
      canciones: ["Good Times, Bad Times", "Communication Breakdown"],
      duracion: 2691,
    },
    {
      nombre: "Led Zeppelin II",
      anio: 1969,
      canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
      duracion: 2502,
    },
    {
      nombre: "Led Zeppelin III",
      anio: 1970,
      canciones: ["Immigrant Song"],
      duracion: 2489,
    },
    {
      nombre: "Led Zeppelin IV",
      anio: 1971,
      canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
      duracion: 2559,
    },
  ],
};
```

A partir de un objeto queremos obtener información de la banda de la siguiente forma:

```
ム informacionDeLaBanda(ledZeppelin)
"Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos."
```

> Definí la función `informacionDeLaBanda`.