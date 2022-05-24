describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'JavaScript') se agrega Javascript al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Florinda Meza",
      url: "https://www.linkedin.com/in/florinda-meza",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'JavaScript');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'JavaScript']);
  })
})

describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'Ruby') se agrega Ruby al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Florinda Meza",
      url: "https://www.linkedin.com/in/florinda-meza",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'Ruby');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'Ruby']);
  })
})

describe("", function() {
  it("Si hacemos agregarHabilidad(perfil, 'React') se agrega React al array de habilidades", function() {
    let perfil = {
      id: 123456789,
      nombre: "Florinda Meza",
      url: "https://www.linkedin.com/in/florinda-meza",
      habilidades: ["HTML", "CSS", "SASS"],
    };
    agregarHabilidad(perfil, 'React');
    assert.deepEqual(perfil.habilidades, ['HTML', 'CSS', 'SASS', 'React']);
  })
}) 