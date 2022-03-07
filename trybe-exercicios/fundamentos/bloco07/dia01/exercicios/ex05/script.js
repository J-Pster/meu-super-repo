const habilidades = ['JavaScript', 'HTML', 'CSS', 'Jest', 'Comunicação']
const substituirX = (palavra, frase) => frase.replace(/x/, palavra)
const concatenarHabilidades = (palavra, frase, habilidades) => `${substituirX(palavra, frase)} Minhas cinco principais habilidades são: ${habilidades.sort()}`

console.log(concatenarHabilidades('Teste', 'Trybe x SuperXuxa!', habilidades))