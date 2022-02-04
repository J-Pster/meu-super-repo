// Escolha a peça
let peca = 'bISPO';
peca = peca.toLowerCase();
console.log('A peça escolhida foi: %s.',peca)

// Código
let pecas = ['peao','bispo','torre','cavalo','rainha','rei'];

switch (peca) {
    case pecas[0]:
        console.log('---------')
        console.log('----X----')
        console.log('----X----')
        console.log('----P----')
        console.log('---------')
        break;
    case pecas[1]:
        console.log('-X-----X-')
        console.log('--X---X--')
        console.log('---X-X---')
        console.log('----P----')
        console.log('---X-X---')
        console.log('--X---X--')
        console.log('-X-----X-')
        break;
    case pecas[2]:
        console.log('---X---')
        console.log('---X---')
        console.log('XXXPXXX')
        console.log('---X---')
        console.log('---X---')
        break;
    case pecas[3]:
        console.log('--X-X--')
        console.log('X-----X')
        console.log('---P---')
        console.log('X-----X')
        console.log('-X--X--')
        break;
    case pecas[4]:
        console.log('-X--X--X-')
        console.log('--X-X-X--')
        console.log('---XXX---')
        console.log('XXXXPXXXX')
        console.log('---XXX---')
        console.log('--X-X-X--')
        console.log('-X--X--X-')
        break;
    case pecas[5]:
        console.log('---------')
        console.log('---------')
        console.log('---XXX---')
        console.log('---XPX---')
        console.log('---XXX---')
        console.log('---------')
        break;

    default:
        console.log('Essa peça não foi encontrada no nosso banco de dados.')
        break;
}