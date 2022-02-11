// Primeiro Código, Acessando elementos apartir de outros.

/* let ondeVE = document.querySelector('#elementoOndeVoceEsta');
let pfilhoDF = document.querySelector('#primeiroFilhoDoFilho');
let elementoPai = document.querySelector('#pai');

ondeVE.parentNode.style.backgroundColor = 'rgba(255,159,132,255)';
pfilhoDF.innerText = 'Alguma coisa :)'; */

/* console.log(document.querySelector('#pai').childNodes[1])
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling)
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling)
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)
console.log(document.querySelector('#pai').childNodes[5]) */

// Adicionando elementos no site HTML
/* let elementoIrmaoOndeVoceEsta = document.createElement('section');
elementoIrmaoOndeVoceEsta.innerText = 'Irmaõ do Onde tu Tá';
elementoPai.appendChild(elementoIrmaoOndeVoceEsta);

let elementoFilhoOndeVoceEsta = document.createElement('h1');
elementoFilhoOndeVoceEsta.innerText = 'Filho do Onde tu Tá!';
ondeVE.appendChild(elementoFilhoOndeVoceEsta);

let elementoFilhoDoFilhoDoFilho = document.createElement('h1');
elementoFilhoDoFilhoDoFilho.innerText = 'Filho do Filho do Filho!';
ondeVE.appendChild(elementoFilhoDoFilhoDoFilho); */

//console.log(elementoFilhoDoFilhoDoFilho.parentNode.nextElementSibling)

// Removendo Elementos
let listaPaiDoPai = document.querySelector('#paiDoPai').childNodes;
let listaPai = document.querySelector('#pai').childNodes;
let listaOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').childNodes;
let PaiDoPai = document.querySelector('#paiDoPai');
let Pai = document.querySelector('#pai');
let OndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

/* console.log(listaPaiDoPai);
console.log(listaPai);
console.log(listaOndeVoceEsta); */

OndeVoceEsta.removeChild(listaOndeVoceEsta[3]);
Pai.removeChild(listaPai[3])
Pai.removeChild(listaPai[4])
Pai.removeChild(listaPai[5])

console.log('DEPOIS DA REMOÇÃO:');
console.log(listaPaiDoPai);
console.log(listaPai);
console.log(listaOndeVoceEsta);