const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormi = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func());

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
doingThings(acorda);