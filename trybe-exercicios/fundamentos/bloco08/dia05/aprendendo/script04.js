const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [saudacao, execSaudacao] = saudacoes;

saudacoes[1](saudacoes[0]); // Olá
execSaudacao(saudacao);

// Produza o mesmo resultado acima, porém utilizando array destructuring

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz'; */

const coisas = ['gato', 'água', 'arroz'];
const [animal, bebida, comida] = coisas;

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
let [n1, n2, n3, n4, n5, n6, n7] = numerosPares;
numerosPares = [n4, n5, n6, n7]

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaix