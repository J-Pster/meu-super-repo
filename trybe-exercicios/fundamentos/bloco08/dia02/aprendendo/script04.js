const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const crescente = (n1, n2) => n1.age - n2.age;
const decrescente = (n1, n2) => n2.age - n1.age;

const ordenar = (arr, func) => arr.sort(func);

console.log(ordenar(people, decrescente));