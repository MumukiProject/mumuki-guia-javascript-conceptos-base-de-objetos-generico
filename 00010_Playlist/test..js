describe("", function() {
  it("infoDeLaPlaylist muestra la información de la manera solicitada", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert(resultado.includes("Lista de Nirvana"));
    assert(resultado.includes("Privada: Sí"));
    assert(resultado.includes("Canciones:"));
    assert(resultado.includes("Smells Like Teen Spirit"));
    assert(resultado.includes("In Bloom"));
    assert(resultado.includes("Come As You Are"));
    });
})

describe("", function() {
  it("Si la playlist dice privada true se muestra Privada: Si", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: true,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert(resultado.includes('Privada: Si'));
  })
})

describe("", function() {
  it("Si la playlist dice privada false se muestra Privada: No", function() {
    let playlist = {
      nombre: "Lista de Nirvana",
      privada: false,
      canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
    }
    let resultado = infoDeLaPlaylist(playlist);
    assert(resultado.includes('Privada: No'));
  })
})