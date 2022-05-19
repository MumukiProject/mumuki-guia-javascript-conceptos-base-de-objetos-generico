describe("Si tenemos un objeto que tiene la propiedad programa: true y hacemos agregarLenguajesFavoritos(objeto), la propiedad se agrega al objeto", function() {
  it("", function() {
    let datos = {
      id: 1,
      nombre: "Wuisti",
      apellido: "Maggio",
      email: "wuisti.maggio@gmail.com",
      telefono: "1234567890",
      edad: 29,
      programa: true,
    };
    agregarLenguajesFavoritos(datos)
    assert.deepEqual(datos.lenguajesFavoritos, ['JavaScript', 'Ruby']);
  })
})

describe("Si tenemos un objeto que tiene la propiedad programa: false y hacemos agregarLenguajesFavoritos(objeto), la propiedad no se agrega al objeto", function() {
  it("", function() {
    let datos = {
      id: 1,
      nombre: "Wuisti",
      apellido: "Maggio",
      email: "wuisti.maggio@gmail.com",
      telefono: "1234567890",
      edad: 29,
      programa: false,
    };
    agregarLenguajesFavoritos(datos)
    assert.notEqual(datos.lenguajesFavoritos, ['JavaScript', 'Ruby']);
  })
})