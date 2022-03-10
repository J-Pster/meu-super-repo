const gerarEmail = (nomeCompleto) => `${nomeCompleto.replace(' ', '_')}@trybe.com`;

const criarFuncionarios = (nomeCompleto) => {
  let email = gerarEmail(nomeCompleto);
  return { nomeCompleto, email };
};

const newEmployees = (criarFunc) => {
  const employees = {
    id1: criarFunc('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: criarFunc('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: criarFunc('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(criarFuncionarios));