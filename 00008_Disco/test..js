describe("", function() {
  it("Si tenemos el disco Waisting Light de Foo Fighters y hacemos infoDelDisco retorna El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011", function() {
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
    let resultado = infoDelDisco(disco);
    assert.equal(resultado, 'El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011');
  })
})

describe("", function() {
  it("Si tenemos el disco Wish You Where Here de Pink Floyd y hacemos infoDelDisco retorna El disco Wish You Where Here de la banda Pink Floyd se lanzó en el año 1975", function() {
    let disco = {
      id: 1,
      nombre: 'Wish You Where Here',
      anioLanzamiento: 1975,
      cantidadDeTemas: 5,
      banda: {
        nombre: 'Pink Floyd',
        anioFormacion: 1964
      }
    };
    let resultado = infoDelDisco(disco);
    assert.equal(resultado, 'El disco Wish You Where Here de la banda Pink Floyd se lanzó en el año 1975');
  })
})

describe("", function() {
  it("Si tenemos el disco Seremos Primavera de Eruca Sativa y hacemos infoDelDisco retorna El disco Seremos Primavera de la banda Eruca Sativa se lanzó en el año 2019", function() {
    let disco = {
      id: 1,
      nombre: 'Seremos Primavera',
      anioLanzamiento: 2019,
      cantidadDeTemas: 10,
      banda: {
        nombre: 'Eruca Sativa',
        anioFormacion: 2007
      }
    };
    let resultado = infoDelDisco(disco);
    assert.equal(resultado, 'El disco Seremos Primavera de la banda Eruca Sativa se lanzó en el año 2019');
  })
}) 