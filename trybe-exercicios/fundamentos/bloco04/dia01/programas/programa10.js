// Definindo Valores
let custo = 48.75;
let venda = 199.98;
let qtVendas = 879;
let imposto = 20;

// Verificando valores abaixo de 0;
let numeros = [custo,venda,qtVendas,imposto];
let continuar = true;

for (num of numeros) {
    if (num < 0) {
        continuar = false;
    }
}

// Fazendo os Calculos
if (continuar == true) {
    let custoTotal = (custo + ((custo/100) * imposto));
    let lucro = (venda - custoTotal);
    let lucroTotal = (lucro * qtVendas);

    console.log('O valor de lucro por produto é de: R$%s.', lucro)
    console.log('O valor de lucro total foi de: R$%s.', lucroTotal)
}
else {
    console.log('ERRO: Existe um valor abaixo de 0.');
}