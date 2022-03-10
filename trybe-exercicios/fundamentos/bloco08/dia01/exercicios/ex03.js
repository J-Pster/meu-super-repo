const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificarPontos = (respostas, corretas) => {
  let pontuacao = 0;
  for (let i = 0; i < respostas.length; i += 1) {
    if(respostas[i] === 'N.A') pontuacao += 0;
    if(respostas[i] === corretas[i]) pontuacao += 1;
    if(respostas[i] !== corretas[i]) pontuacao -= 0.5;
  }
  return pontuacao;
};

const gerarPontuacao = (respostas, corretas, func) => {
  return func(respostas, corretas);
};

console.log(gerarPontuacao(STUDENT_ANSWERS, RIGHT_ANSWERS, verificarPontos));