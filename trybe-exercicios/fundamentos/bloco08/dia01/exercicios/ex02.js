const chegarSorteio01 = (numero) => {
  let sorteio01 = [10, 15, 8, 9, 3, 12, 25, 97];
  if (sorteio01.find((o) => o === numero)) return true;
  return false;
}

const tentarMegaSena = (num, func) => {
  if(func(num)) return 'Parabéns você ganhou';
  return 'Tente novamente';
};

console.log(tentarMegaSena(10, chegarSorteio01));