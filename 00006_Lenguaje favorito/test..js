describe("Si tenemos un objeto que tiene la propiedad programa: true y hacemos agregarLenguajeFavorito(objeto), la propiedad se agrega al objeto", function() {
  it("", function() {
    let datos = {
      id: 1,
      nombre: "Gaby",
      apellido: "Villani",
      email: "gaby.villani@gmail.com",
      telefono: "1234567890",
      edad: 29,
      programa: true,
    };
    agregarLenguajeFavorito(datos)
    assert.equal(datos.lenguajeFavorito, 'JavaScript');
  })
})

describe("Si tenemos un objeto que tiene la propiedad programa: false y hacemos agregarLenguajeFavorito(objeto), la propiedad no se agrega al objeto", function() {
  it("", function() {
    let datos = {
      id: 1,
      nombre: "Gaby",
      apellido: "Villani",
      email: "gaby.villani@gmail.com",
      telefono: "1234567890",
      edad: 29,
      programa: false,
    };
    agregarLenguajeFavorito(datos)
    assert.notEqual(datos.lenguajeFavorito, 'JavaScript');
  })
})