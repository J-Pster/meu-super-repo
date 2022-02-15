let inputCorDeFundo = document.querySelector('#inputCorDeFundo');
let inputCorDoTexto = document.querySelector('#inputCorDoTexto');
let inputTamanhoFonte = document.querySelector('#inputTamanhoFonte');
let inputAlturaLinha = document.querySelector('#inputAlturaLinha');
let seletorFonte = document.querySelector('#selecaoDeFonte');

// Definindo Padrões no Local Storage e nos Inputs

function definirPadraoInicial() {
  localStorage.setItem('bColor', '#ffffff');
  localStorage.setItem('tColor', '#000000');
  localStorage.setItem('tSize', '20');
  localStorage.setItem('lHeight', '18');
  localStorage.setItem('tFont', 'Courier');
}

function colocarLocalStorageNoInput() {
  inputCorDeFundo.value = localStorage.getItem('bColor');
  inputCorDoTexto.value = localStorage.getItem('tColor');
  inputTamanhoFonte.value = localStorage.getItem('tSize');
  inputAlturaLinha.value = localStorage.getItem('lHeight');
  seletorFonte.value = localStorage.getItem('tFont');
}

// Carregamento Inicial do Local Storage

function carregamentoInicial() {
  document.body.style.backgroundColor = localStorage.getItem('bColor');
  document.body.style.color = localStorage.getItem('tColor');
  document.body.style.fontSize = localStorage.getItem('tSize') + 'px';
  document.body.style.lineHeight = localStorage.getItem('lHeight') + 'px';
  document.body.style.fontFamily = localStorage.getItem('tFont');
}

// Verificando se não é a primeira vez que o usuário acessa o site

if (localStorage.length <= 0) {
  definirPadraoInicial();
  console.log('Definindo Inicial')
}

// Adicionando os Eventos de Alteração da Página

inputCorDeFundo.addEventListener('blur', function () {
  document.body.style.backgroundColor = inputCorDeFundo.value;
  localStorage.setItem('bColor', inputCorDeFundo.value);
})

inputCorDoTexto.addEventListener('blur', function () {
  document.body.style.color = inputCorDoTexto.value;
  localStorage.setItem('tColor', inputCorDoTexto.value);
})

inputTamanhoFonte.addEventListener('blur', function () {
  document.body.style.fontSize = inputTamanhoFonte.value + 'px';
  localStorage.setItem('tSize', inputTamanhoFonte.value);
})

inputAlturaLinha.addEventListener('blur', function () {
  document.body.style.lineHeight = inputAlturaLinha.value + 'px';
  localStorage.setItem('lHeight', inputAlturaLinha.value);
})

seletorFonte.addEventListener('click', function () {
  console.log('Blur')
  document.body.style.fontFamily = selecaoDeFonte.value;
  localStorage.setItem('tFont', selecaoDeFonte.value);
})

// Carregando a Configuração do LocalStorage

window.onload = function () {
  colocarLocalStorageNoInput();
  carregamentoInicial();
}