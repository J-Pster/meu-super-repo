// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number);
console.log(sum(10, 15, 20, 25, 30, 35));
console.log(sum(10, 15, 20, 25, 30, 35, 90, 87, 50, 10));
console.log(sum(10, 15, 20, 25, 30, 35, 5, 9, 7, 6, 4, 2));