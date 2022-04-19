import style from './main.css'

import {hiAlert} from './getWeather'

const submit = document.getElementById("forms");

const btns = document.getElementById('change');

console.log('hello')
console.log('mute')

submit.addEventListener('submit', (e) =>{
    e.preventDefault();
    const location = document.getElementById('fname').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=498def7de750295b71a8faec7d3bcdd3`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
    

})




