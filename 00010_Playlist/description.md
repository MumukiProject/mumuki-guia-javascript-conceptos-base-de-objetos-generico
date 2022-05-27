Necesitamos obtener la información de las playlist de una conocida plataforma para escuchar música online :notes:. Las playlist son objetos con el siguiente formato...

``` javascript
let playlistDeEjemplo = {
  nombre: "Lista de Nirvana",
  privada: true,
  canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
}
```
... y queremos visualizar así la información:

```
Lista de Nirvana
Privada: Sí
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
```
> Definí la función `infoDeLaPlaylist` que reciba una playlist como argumento y retorne la información de la lista como acabamos de describir.