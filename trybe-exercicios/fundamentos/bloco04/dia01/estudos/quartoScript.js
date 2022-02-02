// Definindo se uma pessoa foi aprovada, esta na lista de espera ou reprovada em um teste.
const nota = 50;

if (nota >= 80) {
    console.log("Você foi aprovado, parabens! Com a nota de %s",nota)
} 
else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera! Com a nota de %s",nota)
} 
else {
    console.log("Você foi reprovado :(, com a nota de %s",nota)
}