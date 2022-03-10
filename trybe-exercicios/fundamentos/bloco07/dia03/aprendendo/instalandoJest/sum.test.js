// sum.test.js
const sum = require('./script');

test('Soma de Dois Valores:', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Ter tamanho 3', () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect('abc').toHaveLength(3);
});