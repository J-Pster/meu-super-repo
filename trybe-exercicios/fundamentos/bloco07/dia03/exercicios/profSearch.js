// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const findCorrect = (id) => {
  for(let prof of professionalBoard) {
    if (prof.id === id) return prof;
  }

  throw new Error('ID não identificada')
}

const profSearch = (id, detail) => {
  let correctProf = findCorrect(id);
  let resposta = [];
  for (let i = 0; i < detail.length; i += 1) {
    if (!correctProf.hasOwnProperty(detail[i])) throw new Error('Informação indisponível.')
    resposta.push(correctProf[detail[i]]);
  }
  return resposta;
};

profSearch('4678-2', ['firstName', 'lastName'])

module.exports = {profSearch, findCorrect}