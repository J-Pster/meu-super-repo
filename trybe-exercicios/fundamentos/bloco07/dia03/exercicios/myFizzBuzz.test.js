const {myFizzBuzz} = require('./myFizzBuzz');

test('if 15 is fizzbuzz', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz')
})

test('if 9 is fizz', () => {
  expect(myFizzBuzz(9)).toEqual('fizz')
})

test('if 10 is buzz', () => {
  expect(myFizzBuzz(10)).toEqual('buzz')
})

test('if 17 is 17', () => {
  expect(myFizzBuzz(17)).toEqual(17)
})

test('if we pass a string as parameter it returns false', () => {
  expect(myFizzBuzz("a")).toEqual(false)
})