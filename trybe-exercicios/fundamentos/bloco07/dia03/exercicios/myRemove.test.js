const {myRemove} = require('./myRemove');

test('removes the third element', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})

test('if the return is not the same array was passed', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})

test('if the return is the same array was passed, because the fifth element dont exists', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})