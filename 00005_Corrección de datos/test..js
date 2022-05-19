describe("Inicialmente datos tiene como número de teléfono 1234567890", function() {
  it("", function() {
    assert.equal(datos.telefono, 1234567890);
  })
})

describe("Inicialmente datos tiene como edad '29'", function() {
  it("", function() {
    assert.equal(datos.edad, "29");
  })
})

describe("Si hacemos modificarTelefono(0987654321) el número de télefono se modifica con ese número", function() {
  it("", function() {
    modificarTelefono(0987654321)
    assert.equal(datos.telefono, 0987654321);
  })
})

describe("Si hacemos modificarEdad(29) la edad es 29", function() {
  it("", function() {
    modificarEdad(29);
    assert.equal(datos.edad, 29);
  })
})
