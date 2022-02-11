//Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//- document.getElementById()
//- document.getElementsByClassName()
//- document.getElementsByTagName()

let textoDescritivo = document.querySelector('#texto-descritivo');
let mainContentClass = document.querySelector('.main-content');
let centerContent = document.querySelector('.center-content');
let title = document.querySelector('.title');
let todasAsTagsP = document.querySelectorAll('p');

//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não /gaste tempo pensando no texto e sim realizando o exercício)

function alteraInnerText(element, text) {
  element.innerText = text;
}

alteraInnerText(textoDescritivo, 'Daqui a dois anos eu me vejo como um desenvolvedor, em progressão de carreira, desenvolvedo soluções que agreguem valor a vida de outras pessoas, e crescendo como pessoa e como familia junto com minha esposa.');

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function alteraBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

alteraBackgroundColor(mainContentClass, 'rgb(76,164,109)')

//3. Crie uma função que mude a cor do quadrado vermelho para branco.

alteraBackgroundColor(centerContent, 'rgb(255,255,255)')

//4. Crie uma função que corrija o texto da tag <h1>.

alteraInnerText(title, 'Exercício 5.1 - JavaScript')

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function adicaoDeClasse(element, classe) {
  for (let p of element) {
    p.classList.add(classe);
  }
}

adicaoDeClasse(todasAsTagsP, 'upperCase')

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function mostraNoConsole(element) {
  for (let p of element) {
    console.log(p)
  }
}

mostraNoConsole(todasAsTagsP);