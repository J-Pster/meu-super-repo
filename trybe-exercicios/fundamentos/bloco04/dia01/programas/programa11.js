// Definindo o Salário
let salario = 3850.97;
console.log('O valor do salário inserido foi de R$%s.',salario)

// Variáveis dos Calculos
let salLiquido = 0;
let inss = 0;
let ir = 0;

// Calculando INSS
switch (true) {
    case salario < 1556.94:
        inss = (salario/100 * 8)
        break;
    case salario < 2594.92:
        inss = (salario/100 * 9)
        break;
    case salario < 5189.82:
        inss = (salario/100 * 11)
        break;
    default:
        inss = 570.88
        break;
}

inss = inss.toFixed(2)
salLiquido = (salario - inss).toFixed(2);
console.log('O valor do INSS foi de R$%s, e o salário liquido até agora é de R$%s.',inss,salLiquido);

// Calculando o IR
switch (true) {
    case salLiquido < 1903.98:
        ir = 0;
        break;
    case salLiquido < 2826.65:
        ir = (salario/100 * 7.5) - 142.80;
        break;
    case salLiquido < 3751.05:
        ir = (salario/100 * 15) - 354.80;
        break;
    case salLiquido <= 4664.68:
        ir = (salario/100 * 22.5) - 636.13;
        break;
    case salLiquido > 4664.68:
        ir = (salario/100 * 27.5) - 869.36;
        break;

    default:
        console.log('Algum erro ocorreu no calculo do IR.')
        break;
}

ir = ir.toFixed(2);
salLiquido = salLiquido - ir;
console.log('O salário liquido resultante depois de retirado R$%s de IR, é de R$%s.',ir,salLiquido)