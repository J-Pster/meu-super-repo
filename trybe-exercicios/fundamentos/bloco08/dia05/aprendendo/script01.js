// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maça', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condenado', 'Farinha Lacta', 'Amendoim'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));