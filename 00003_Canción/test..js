describe("", function() {
  it("Si la canción recibida por parámetro tiene una duration de 166000 la cancion retornada tiene una duracion de 166 segundos", function() {
    let song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
    };
    let resultado = cancion(song);
    assert.equal(resultado.duracion, 166);
  })
})

describe("", function() {
  it("Si la canción recibida por parámetro tiene un title 'Shine on you crazy diamond' la cancion retornada tiene como titulo 'Shine on you crazy diamond'", function() {
    let song = {
      title: 'Shine on you crazy diamond',
      bandName: "Pink Floyd",
      duration: 1571000,
      album: "Wish you where here",
    };
    let resultado = cancion(song);
    assert.equal(resultado.titulo, 'Shine on you crazy diamond');
  })
})

describe("", function() {
  it("Si la canción recibida por parámetro tiene una bandName 'Eruca Sativa' la cancion retornada tiene como banda 'Eruca Sativa'", function() {
    let song = {
      title: 'Creo',
      bandName: "Eruca Sativa",
      duration: 233000,
      album: "Seremos primavera",
    };
    let resultado = cancion(song);
    assert.equal(resultado.banda, 'Eruca Sativa');
  })
})