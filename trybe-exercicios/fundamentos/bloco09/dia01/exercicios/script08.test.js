// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./script08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails((elet) => elet.name === 'Bulbasasd', (onSucess) => {
      try {
        expect(onSucess).toBe('[Error: Não temos esse pokémon para você :(]');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});