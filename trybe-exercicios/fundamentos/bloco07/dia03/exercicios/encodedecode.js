function encode(string) {
  let arrayCodificado = [];

  for (let letter of string) {
    switch (letter) {
    case 'a':
      arrayCodificado.push('1');
      break;
    case 'e':
      arrayCodificado.push('2');
      break;
    case 'i':
      arrayCodificado.push('3');
      break;
    case 'o':
      arrayCodificado.push('4');
      break;
    case 'u':
      arrayCodificado.push('5');
      break;

    default:
      arrayCodificado.push(letter);
      break;
    }
  }

  return arrayCodificado.join('');
}

function decode(string) {
  let arrayDecodificado = [];

  for (let letter of string) {
    switch (letter) {
    case '1':
      arrayDecodificado.push('a');
      break;
    case '2':
      arrayDecodificado.push('e');
      break;
    case '3':
      arrayDecodificado.push('i');
      break;
    case '4':
      arrayDecodificado.push('o');
      break;
    case '5':
      arrayDecodificado.push('u');
      break;

    default:
      arrayDecodificado.push(letter);
      break;
    }
  }

  return arrayDecodificado.join('');
}

module.exports = {encode, decode};