const API_URL = 'https://api.coincap.io/v2/assets';
const API_CONVERTION_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
const LIST_LOCATION = document.querySelector('#listaDeCriptos');

const fetchDolarConvertion = async (dolar) => {
  let result = 0;
  await fetch(API_CONVERTION_URL)
    .then(response => response.json())
    .then(data => result = data.usd.brl)
  return result;
};

const setCoins = async (data) => {
  const realConvertion = await fetchDolarConvertion();
  data.data.map((coin, index) => {
    if (index < 30) {
      const element = document.createElement('div');
      const valorEmReal = (coin.priceUsd * realConvertion).toFixed(2);
      element.innerHTML = `${coin.id} (${coin.symbol}): $${parseInt(coin.priceUsd).toFixed(2)} | R$${valorEmReal}`;
      LIST_LOCATION.appendChild(element);
    }
  })
}

const fetchCoins = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setCoins(data));
};

window.onload = () => fetchCoins();