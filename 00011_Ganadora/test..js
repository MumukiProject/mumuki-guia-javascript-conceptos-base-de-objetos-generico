describe("", function() {
  it("Si hacemos informacionGanadoras() nos retorna la lista de ganadoras en el formato correcto", function() {
    let resultado = informacionGanadoras();
    assert.equal(resultado, "Bebe Zahara Benet ganó la temporada 1\nTyra Sanchez ganó la temporada 2\nRaja ganó la temporada 3\nSharon Needles ganó la temporada 4\nJinkx Monsoon ganó la temporada 5\nBianca Del Rio ganó la temporada 6\n");
  })
})
