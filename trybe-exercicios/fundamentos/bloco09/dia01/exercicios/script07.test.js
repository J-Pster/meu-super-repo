const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa a Callback', (done) => {
  uppercase('a trybe', (result) => {
    try {
      expect(result).toBe('A TRYBE');
      done();
    } catch (error) {
      done(error);
    }
  });
});