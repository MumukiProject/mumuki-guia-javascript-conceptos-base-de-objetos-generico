describe("", function() {
  it("Si hacemos informacionDeLaBanda(ledZeppelin) retorna Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos.", function() {
    let ledZeppelin = {
      nombre: "Led Zeppelin",
      anio: 1968,
      activa: false,
      miniatura:
        "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
      integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
      discos: [
        {
          nombre: "Led Zeppelin",
          anio: 1969,
          canciones: ["Good Times, Bad Times", "Communication Breakdown"],
          duracion: 2691,
        },
        {
          nombre: "Led Zeppelin II",
          anio: 1969,
          canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
          duracion: 2502,
        },
        {
          nombre: "Led Zeppelin III",
          anio: 1970,
          canciones: ["Immigrant Song"],
          duracion: 2489,
        },
        {
          nombre: "Led Zeppelin IV",
          anio: 1971,
          canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
          duracion: 2559,
        },
      ],
    };
    let resultado = informacionDeLaBanda(ledZeppelin);
    assert.equal(resultado, 'Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos.');
  })
})

describe("", function() {
  it("Si hacemos informacionDeLaBanda(perotaChingo) retorna Perota Chingó se fundó en el año 2012. Tiene 2 integrantes: Julia Ortiz, Dolores Aguirre. Tiene en total 4 discos. Tiene en total 43 canciones entre todos los discos. En promedio, cada canción dura 288 segundos.", function() {
    let perotaChingo = {
      nombre: "Perota Chingó",
      anio: 2012,
      activa: true,
      miniatura:
        "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
      integrantes: ["Julia Ortiz", "Dolores Aguirre"],
      discos: [
        {
          nombre: "Aguas",
          anio: 2017,
          canciones: ["Agua cero", "Tres", "Piel", "Certo", "Cancion pequeña", "Reverdecer", "Veo chiquito", "Anhelando Iruya", "Toda vida", "Peguei uma chuva", "Meia vuelta", "L` mar", "Dunas"],
          duracion: 3744,
        },
        {
          nombre: "Muta",
          anio: 2019,
          canciones: ["Toca", "China", "Barro", "Oh Mamae", "Flor de Vida", "Vertigo", "Aurora", "Coral"],
          duracion: 2304,
        },
        {
          nombre: "Un viajecito",
          anio: 2013,
          canciones: ["Tonada de luna llena", "Ando ganas", "Bau del aire", "Ines", "Alma nao tem cor", "La complicidad", "Bañado norte", "Paloma negra", "Besame mucho", "Rie chinito", "Canción para el viento", "El tiempo está después"],
          duracion: 3456,
        },
        {
          nombre: "Tocando Tierra",
          anio: 1971,
          canciones: ["Cada paso", "Así viene la vida", "Semillas", "Al rojo", "Entre La Habana y Madrid", "Camino", "Un mundo nuevo", "Ha llovido", "Vueltas", "Los ejes de mi carreta"],
          duracion: 2880,
        },
      ],
    };
    let resultado = informacionDeLaBanda(perotaChingo);
    assert.equal(resultado, 'Perota Chingó se fundó en el año 2012. Tiene 2 integrantes: Julia Ortiz, Dolores Aguirre. Tiene en total 4 discos. Tiene en total 43 canciones entre todos los discos. En promedio, cada canción dura 288 segundos.');
  })
})



