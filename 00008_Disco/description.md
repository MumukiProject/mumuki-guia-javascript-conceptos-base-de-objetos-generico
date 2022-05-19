Queremos obtener el nombre, año de lanzamiento y  banda de un disco :minidisc:, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]". Por ejemplo:

```js
let disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

ム infoDelDisco(disco);
"El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011"
```

> Definí la función `infoDelDisco` que tome como argumento un disco y retorne el mensaje que acabamos de describir.