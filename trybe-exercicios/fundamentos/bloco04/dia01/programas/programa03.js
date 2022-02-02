// Definindo variáveis para trabalhar
let a = 5;
let b = 5;
let c = 6;

if (a > b && a > c) {
    console.log('o maior número é %s.',a);
}
else if (b > a && b > c) {
    console.log('o maior número é %s.',b);
}
else if (c > a && c > b) {
    console.log('o maior número é %s.',c);
}
else {
    console.log('Os valores são iguais.');
}