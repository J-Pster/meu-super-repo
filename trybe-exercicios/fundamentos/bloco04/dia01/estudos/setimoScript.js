let estado = 'xsa';

switch (estado) {
    case 'aprovada':
        console.log('Parabens, você foi aprovada!');
        break;

    case 'reprovada':
        console.log('Infelizmente você foi reprovado!');
        break;
    
    case 'lista':
        console.log('Você está na lista de espera para outra turma.');
        break;

    defualt:
        console.log('ERRO: Parâmetro não definido.');
}