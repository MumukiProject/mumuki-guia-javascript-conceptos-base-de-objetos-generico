describe("", function() {
  it("Si el nombre es Juli, el apellido Seldon y la edad es 48, retorna 'Hola, mi nombre es Juli Seldon y tengo 48 años'", function() {
    let perfil = {
      nombre: 'Juli',
      apellido: 'Seldon',
      edad: 48
    }
    assert.equal(presentacion(perfil),'Hola, mi nombre es Juli Seldon y tengo 48 años');
  })
})

describe("", function() {
  it("Si el nombre es Agus, el apellido Hardin y la edad es 15, retorna 'Hola, mi nombre es Agus Hardin y tengo 15 años'", function() {
    let perfil = {
      nombre: 'Agus',
      apellido: 'Hardin',
      edad: 15
    };
    assert.equal(presentacion(perfil),'Hola, mi nombre es Agus Hardin y tengo 15 años');
  })
})