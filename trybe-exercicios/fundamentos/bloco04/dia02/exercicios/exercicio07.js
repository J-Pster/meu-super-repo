// Array para Trabalhar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Imprimindo Todos os Valores
for (num of numbers) {
    console.log(num)
}

// Somando os valores
let result1 = 0;
for (num of numbers) {
    result1 += num;
}
console.log(result1);

// Média Aritmética
let mediaArit = (result1 / numbers.length);
console.log(mediaArit);

if (mediaArit > 20) {
    console.log('O valor da média é maior que 20.')
}
else {
    console.log('O valor da média não é maior que 20.')
}

// Procurando o maior valor de um Array
let maior = 0;
for (num of numbers) {
    if (num > maior) {
        maior = num
    }
}
console.log('O maior valor é: ',maior)

// Imprimindo Valores Ímpares
for (num of numbers) {
    if (num%2 != 0) {
        console.log('O valor %s é impar.',num)
    }
}

// Imprimindo Quantia de Valores Ímpares
let numDeImpar = 0;
for (num of numbers) {
    if (num%2 != 0) {
        numDeImpar++
    }
}

console.log('Existem %s valores ímpares.',numDeImpar)

// Procurando o menor valor de um Array
let menor = maior;
for (num of numbers) {
    if (num < menor) {
        menor = num
    }
}
console.log('O menor valor é: ',menor)

// Criando um Array de 1 a 25
let arrayDe25 = [];
for(index = 1; index <= 25; index +=1) {
    arrayDe25.push(index);
}
console.log(arrayDe25);

// Dividindo cada elemento do Array de cima por 2
for (num of arrayDe25) {
    console.log(num/2);
}