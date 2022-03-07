function verificarSeTemSoNumero() {
  const value1 = parseInt(document.getElementById('value1').value);
  const value2 = parseInt(document.getElementById('value2').value);
  if(value1 === '' || value2 === '') throw new Error('Valor faltante')
  const answer = value1 + value2;
  if (typeof answer !== 'number') throw new Error('Valor não é um Número')
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}