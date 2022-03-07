const fatorial = (number) => number === 0 ? 1 : fatorial(number - 1) * number;
console.log(fatorial(4))

function maiorPalavra(frase) {
  const palavras = frase.split(' ');
  let maior = palavras[0];
  let tamanhoAnterior = Object.values(palavras[0]).length;

  for (let palavra of palavras) {
    const tamanhoAtual = Object.values(palavra).length;
    if (tamanhoAtual > tamanhoAnterior) {
      tamanhoAnterior = tamanhoAtual;
      maior = palavra;
    }
  }
  return maior;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));