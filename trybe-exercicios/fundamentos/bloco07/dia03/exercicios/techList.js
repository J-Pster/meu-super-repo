function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  let techSort = tech.sort();
  let arrayResposta = [];

  for (let techs of techSort) {
    arrayResposta.push({
      tech: techs,
      name,
    });
  }

  return arrayResposta;
}

module.exports = {techList};