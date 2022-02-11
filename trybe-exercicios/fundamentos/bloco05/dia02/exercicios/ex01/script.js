/* 
Os códigos abaixo representam essas etapas, na ordem a seguir mostrada.

Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
Adicione a tag main com a classe main-content como filho da tag body ;
Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */

let h1DoBody = document.createElement('h1');
h1DoBody.innerText = 'Texto Aleatório de H1';
document.body.appendChild(h1DoBody);

let mainDoBody = document.createElement('main');
mainDoBody.classList.add('main-content');
document.body.appendChild(mainDoBody);

let sectionDaMain = document.createElement('section');
sectionDaMain.classList.add('center-content');
mainDoBody.appendChild(sectionDaMain);

let pDaSection = document.createElement('p');
pDaSection.innerText = 'Algum Texto para o P da Section.';
sectionDaMain.appendChild(pDaSection);

let leftSection = document.createElement('section');
let rightSection = document.createElement('section');
leftSection.classList.add('left-content');
rightSection.classList.add('right-content');
mainDoBody.appendChild(leftSection);
mainDoBody.appendChild(rightSection);

let imageLeftSection = document.createElement('img');
imageLeftSection.src = 'https://picsum.photos/200';
imageLeftSection.classList.add('small-image');
leftSection.appendChild(imageLeftSection);

let listaNaoOrdenada = document.createElement('ul');
let numerosPorExtenso = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0; i < 10; i += 1) {
  let nomeElementoLista = 'elementolista' + i;
  nomeElementoLista = document.createElement('li');
  nomeElementoLista.innerText = numerosPorExtenso[i];
  listaNaoOrdenada.appendChild(nomeElementoLista);
}

rightSection.appendChild(listaNaoOrdenada);

for (let i = 0; i < 3; i += 1) {
  let nomeElementoh3 = 'elementoh3' + i;
  nomeElementoh3 = document.createElement('h3');
  nomeElementoh3.innerText = 'Texto dos H3. ' + i; 
  // Adicione a classe description nas 3 tags h3 criadas;
  nomeElementoh3.classList.add('description')
  mainDoBody.appendChild(nomeElementoh3);
}

// Adicione a classe title na tag h1 criada;
h1DoBody.classList.add('title');

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let acharLeftContent = document.querySelector('.left-content');
acharLeftContent.parentNode.removeChild(acharLeftContent);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
rightSection.style.marginRight = 'auto';


// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
mainDoBody.style.backgroundColor = 'rgb(76,164,109)';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let ultimoElementoLista = listaNaoOrdenada.lastChild;
let antepenultimoElementoLista = ultimoElementoLista.previousElementSibling;
listaNaoOrdenada.removeChild(ultimoElementoLista);
listaNaoOrdenada.removeChild(antepenultimoElementoLista);