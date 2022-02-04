// Mostrando os pares
let numbers = [10,8,7];

for(num of numbers) {
    if ((num%2) == 0) {
        console.log('O número, %s é par.',num)
    }
}


// Mostrando os ímpares
let numbers2 = [10,8,7];

for(num of numbers2) {
    if ((num%2) != 0) {
        console.log('O número, %s é impar.',num)
    }
}

// Procurando por pelo menos um ímpar.
let numbers3 = [10,8,7];
for(let i = 0; i < numbers3.length; i += 1) {
    if ((numbers3[i]%2) != 0) {
        console.log('Existe um número ímpar, é o %s.',num);
        i = numbers3.length;
    } 
    else {
        console.log('Nenhum ímpar encontrado.')
    }
}