function hydrate(string) {
  let agua = 0;
  let cases = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  for (let number of string) {
    for (let i = 0; i < cases.length; i +=1) {
      if(number === cases[i]) {
        agua += parseInt(cases[i]);
      }
    }
  }

  if (agua == 1) return (`${agua} copo de água`);
  return (`${agua} copos de água`);
}

module.exports = {hydrate};