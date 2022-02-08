let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

console.log('Bem-vinda, %s.',info.personagem);
console.table(info)

for (let key in info ) {
    console.log(key);
}

console.log('---')

for (let key in info ) {
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

function imprimirDadosDosPersonagens() {
    console.log('%s e %s',info.personagem, info2.personagem);
    console.log('%s e %s',info.origem, info2.origem);
    console.log('%s e %s',info.nota, info2.nota);
    if (info.recorrente == info2.recorrente) {
        console.log('Ambos Recorrentes.')
    } 
    else {
        console.log('Um recorrente e outro não.')
    }
}

console.log('---')
imprimirDadosDosPersonagens();