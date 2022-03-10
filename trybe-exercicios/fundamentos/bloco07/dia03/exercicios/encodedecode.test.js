const {encode, decode} = require('./encodedecode');

describe('encode', () => {
  test('if encode is a function', () => {
    expect(typeof encode).toBe('function');
  })

  test('if aeiou is qual to 12345', () => {
    expect(encode('aeiou')).toEqual('12345');
  })

  test('if lenght is correct to 5', () => {
    expect(encode('aeiou').length).toEqual(5)
  })

  test('if we cant encode invalid chars', () => {
    expect(encode('aeioull')).toEqual('12345ll');
  })
})

describe('decode', () => {
    test('if decode is a function', () => {
      expect(typeof decode).toBe('function');
  })

  test('if 12345 is qual to aeiou', () => {
    expect(decode('12345')).toEqual('aeiou');
  })

  test('if lenght is correct to 5', () => {
    expect(decode('12345').length).toEqual(5)
  })

  test('if we cant decode invalid numbers', () => {
    expect(decode('1234566')).toEqual('aeiou66');
  })
})