// Determinando o número a ser calculado o fatorial
let numero = 8;
let fatorial = numero;

for (let i = numero-1; i > 1; i -= 1) {
    console.log('Fatorial: ',i)
    fatorial = fatorial * i
    console.log(fatorial)
}

console.log('O fatorial do número %s é %s.',numero,fatorial)