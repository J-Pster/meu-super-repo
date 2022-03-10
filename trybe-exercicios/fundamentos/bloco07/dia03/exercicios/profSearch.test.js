const {profSearch, findCorrect} = require('./profSearch');

describe('profSearch', () => {
  test('if it is a function', () => {
    expect(typeof profSearch).toEqual('function');
  })
})

describe('findCorrect', () => {
  test('if it is a function', () => {
    expect(typeof findCorrect).toEqual('function');
  })

  test('if it finds correct', () => {
    expect(findCorrect('4678-2')).toEqual(
      {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
      }
    )
  })
})