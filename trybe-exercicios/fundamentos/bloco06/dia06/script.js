// Definindo atalhos de funções
const query = document.querySelector.bind(document);

// Definindo constantes globais
const button = query('#btn');

function minhaFuncao () {
  console.log('Eu amo batatas <3')
}

button.addEventListener('click', minhaFuncao);