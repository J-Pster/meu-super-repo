// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const jokeLocation = document.querySelector('#jokeContainers');
console.log(jokeLocation)

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeLocation.innerHTML = data.joke);
};

window.onload = () => fetchJoke();