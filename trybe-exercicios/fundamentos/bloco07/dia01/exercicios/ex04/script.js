const botao = document.querySelector('#botao');
const contador = document.querySelector('#contador');
let contadorInterno = 0;

botao.addEventListener('click', () => {
  contadorInterno += 1;
  contador.innerText = contadorInterno;
});