const botaoFeriados = document.createElement('button');
const botaoSexta = document.createElement('button');

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// -- Colocando os Dias no Mês

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysLocation = document.querySelector('#days');

function setDaysOnTheMouth(daysList, daysLocation) {
  for (let index = 0; index < daysList.length; index += 1) {
    const dayItem = document.createElement('li');
    dayItem.innerHTML = daysList[index];
    dayItem.classList.add('c-dia')

    daysLocation.appendChild(dayItem);
  };
};

setDaysOnTheMouth(dezDaysList, daysLocation);

// -- Definindo Dias Especiais

let feriadosDezembro = [24, 25, 31];

function definirFeriados(feriados) {
  let dias = daysLocation.children;
  
  for (let idays = 0; idays < dias.length; idays += 1) {
    for (let iferi= 0; iferi < feriados.length; iferi += 1) {
      if (dias[idays].textContent.includes(feriados[iferi])) {
        dias[idays].classList.add('holiday')
      }
    }
  }
}

definirFeriados(feriadosDezembro);

let sextasDezembro = [4, 11, 18, 25];
function definirSextas(sextas) {
  let dias = daysLocation.children;
  
  for (let idays = 0; idays < dias.length; idays += 1) {
    for (let iferi= 0; iferi < sextas.length; iferi += 1) {
      if (dias[idays].textContent == sextas[iferi]) {
        dias[idays].classList.add('fridays')
      }
    }
  }
}

definirSextas(sextasDezembro);

// Criado Botões

function colocarBotaoNoContainer(tipo, classe, texto) {
  const localBotao = document.querySelector('.buttons-container');
  tipo.setAttribute('id', classe);
  tipo.innerText = texto;

  localBotao.appendChild(tipo);
}

colocarBotaoNoContainer(botaoFeriados, 'btn-holiday', 'Feriados');
colocarBotaoNoContainer(botaoSexta, 'btn-friday', 'Sexta-Feira')

// -- Adicionando Eventos

// Evento do Botão de Feriado
botaoFeriados.addEventListener('click', ativaEDesativaFeriados);
let alternadorFeriados = 0;

function ativaEDesativaFeriados() {
  let diasDeFeriado = document.querySelectorAll('.holiday')

  if (alternadorFeriados === 0) {
    for (let dias of diasDeFeriado) {
      dias.style.color = 'red';
      dias.style.fontSize = '22px';
    }
    alternadorFeriados = 1;
  } else {
    for (let dias of diasDeFeriado) {
      dias.style.color = '#777';
      dias.style.fontSize = '20px';
    }
    alternadorFeriados = 0;
  }
}

// Evento do Botão de Sexta
botaoSexta.addEventListener('click', ativaEDesativaSextas);
let alternadorSextas = 0;

function ativaEDesativaSextas() {
  let diasDeSexta = document.querySelectorAll('.fridays');

  if (alternadorSextas === 0) {
    for (let dias of diasDeSexta) {
      dias.style.color = 'green';
      dias.style.fontSize = '22px';
    }
    alternadorSextas = 1;
  } else {
    for (let dias of diasDeSexta) {
      dias.style.color = '#777';
      dias.style.fontSize = '20px';
    }
    alternadorSextas = 0;
  }
}

// Evento de Mouse Over nos Dias

document.querySelectorAll('.c-dia').forEach(item => {
  item.addEventListener('mouseover', mouseOverDosDias);
});

document.querySelectorAll('.c-dia').forEach(item => {
  item.addEventListener('mouseleave', mouseLeaveDosDias);
});

function mouseOverDosDias(event) {
  let origem = event.target;
  origem.style.fontSize = '28px';
}

function mouseLeaveDosDias(event) {
  let origem = event.target;
  origem.style.fontSize = '20px';
}

// -- Adicionando Tarefas no Calendario

function adicionarTarefa(tarefa) {
  let localDaTarefa = document.querySelector('.my-tasks');
  let tarefaElemento = document.createElement('span');
  tarefaElemento.innerText = tarefa;

  localDaTarefa.appendChild(tarefaElemento);
}

adicionarTarefa('Cozinhar');

// -- Adicionado Cores nas Tarefas do Calendario

function definirCorDaTarefa(cor) {
  let localDaTarefa = document.querySelector('.my-tasks');
  let corElemento = document.createElement('div')
  corElemento.classList.add('task')
  corElemento.style.backgroundColor = cor;

  localDaTarefa.appendChild(corElemento);
}

definirCorDaTarefa('blue');

// Evento Click nas Cores

document.querySelectorAll('.task').forEach(item => {
  item.addEventListener('click', clickNaCorDaTarefa);
})
let clickCorAlternador = 0;

function clickNaCorDaTarefa(event) {
  let origem = event.target;

  if (clickCorAlternador === 0) {
    origem.classList.add('taskSelected')
    clickCorAlternador = 1;
  } else {
    origem.classList.remove('taskSelected')
    clickCorAlternador = 0;
  }
}

// Evento Adicionar a Cor Nos Dias

document.querySelectorAll('.c-dia').forEach(item => {
  item.addEventListener('click', colocarCorNoDia);
});

function colocarCorNoDia(event) {
  let origem = event.target;
  let fonteCor = document.querySelector('.taskSelected');
  if (fonteCor == null) return;

  if(origem.style.color == fonteCor.style.backgroundColor) {
    origem.style.color = '#777';
  } else {
    origem.style.color = fonteCor.style.backgroundColor;
  }
}

// -- BONUS: Adicionando Compromissos
let botaoAdicionarCompromissos = document.querySelector('#btn-add');
let input = document.querySelector('#task-input');
botaoAdicionarCompromissos.addEventListener('click', compromissoBotao);
input.addEventListener('keyup', compromissoEnter);

function adicionarCompromisso() {
  let compromisso = document.createElement('li');
  let listaCompromissos = document.querySelector('.task-list');

  if(input.value == '')  {
    alert('Nenhum nome Definido para o Compromisso.');
    return;
  }

  compromisso.innerHTML = input.value;
  listaCompromissos.appendChild(compromisso)
  input.value = '';
}

function compromissoEnter(event) {
  console.log(event.keyCode)
  if (event.keyCode === 13) {
    adicionarCompromisso();
  }

  return;
}

function compromissoBotao() {
  adicionarCompromisso();
}