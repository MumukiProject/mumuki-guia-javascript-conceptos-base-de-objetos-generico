Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos. Los datos que tenemos son `id`, `email`, `nombre` y `teléfono`:

```js
1,ale@gmail.com,Ale Gomez,1234567890
2,grace@hotmail.com,Grace Hopper,0987654321
3,hedy@gmail.com,Hedy Lamarr,6789054321
4,radia@yahoo.com,Radia Perlman,1234509876
5,Sheryl@facebook.com,Sheryl Sandberg,5432167890
```

Y queremos almacenarlos con el siguiente formato:

```js
let ejemplo = {
  id: 0,
  nombre: "Ejemplo",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
}
```
> Definí un objeto para cada persona. Las variables deben llamarse `ale`, `grace`, `hedy`, `radia` y `sheryl`.