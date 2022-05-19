Tenemos la variable `datos` que tiene un objeto con los datos de una persona. El teléfono de la misma está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.

```js
let datos = {
  id: 1,
  nombre: "Gaby",
  apellido: "Villani",
  email: "gaby.villani@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};
```
> Definí el procedimiento `modificarTelefono` que reciba un número de teléfono como argumento y modifique el teléfono, y `modificarEdad` que tome una edad por parámetro y modifique la edad ya que es un string y necesitamos que sea un número.
