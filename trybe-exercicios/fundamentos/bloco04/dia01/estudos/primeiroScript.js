const myName = "João Pster";
const birthCity = "Goiânia";
let birthYear = 2003;

console.log('Olá, meu nome é %s, eu nasci em %s no ano de %s.', myName, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear)

// Agora vou forçar um erro, tentando alterar uma constante.
birthCity = "São Paulo";
console.log(birthCity)