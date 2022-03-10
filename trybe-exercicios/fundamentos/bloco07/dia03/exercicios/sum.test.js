const {sum} = require('./sum');

test('if 4 + 5 is 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('if 0 + 0 is 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('if we can try to pass a string as parameters it gives an error', () => {
  expect(() => { sum(4, "5") }).toThrow();
});

test('if we have the correct error message', () => {
  expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
});