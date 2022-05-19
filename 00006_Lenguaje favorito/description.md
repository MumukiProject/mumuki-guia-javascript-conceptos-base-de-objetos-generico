Tenemos un programa que almacena los datos de una persona de la siguiente forma:

```js
let datos = {
  id: 1,
  nombre: "Gaby",
  apellido: "Villani",
  email: "gaby.villani@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};
```
 
Necesitamos agregar la propiedad `lenguajeFavorito` si la propiedad `programa` es true, y asignarle como valor 'JavaScript'. Por ejemplo:

```js
ム agregarLenguajeFavorito(datos)

ム datos
{
  id: 1,
  nombre: "Gaby",
  apellido: "Villani",
  email: "gaby.villani@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
  lenguajeFavorito: 'JavaScript'
};
```

> Definí el procedimiento `agregarLenguajeFavorito` que tome un objeto por parámetro y agregue la propiedad si corresponde.