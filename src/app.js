import style from './main.css'



const submit = document.getElementById("forms");

const btns = document.getElementById('change');


console.log('hello')
console.log('mute')

submit.addEventListener('submit', (e) =>{
    e.preventDefault();
    const city = document.getElementById('cityName')
    const temps = document.getElementById('degrees')
    const feels = document.getElementById('feel')
    const wind = document.getElementById('winds')
    const sky = document.getElementById('clouds')
    const humidity = document.getElementById('humidity')
    const location = document.getElementById('fname').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=498def7de750295b71a8faec7d3bcdd3&units=imperial`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
   
    let cityName = response.name;
    let cityTemp = response.main.temp;
    let cityFeel = response.main.feels_like;
    let cityWind = response.wind.speed;
    let cityHumidity = response.main.humidity;
    let {icon, description} = response.weather[0]
     
  city.innerHTML = ` ${cityName} <i class="fa-solid fa-city"></i>`
  temps.innerHTML = ` ${cityTemp} &#176 F`
 feels.innerHTML = `FEELS LIKE:${cityFeel} &#176`
 wind.innerHTML = `WIND: ${cityWind}`
 humidity.innerHTML= `HUMIDITY: ${cityHumidity}`
sky.innerHTML= ` ${description} <div><img  class = "img" src="http://openweathermap.org/img/wn/${icon}@2x.png"></div>`
    });
    
  
clear()

})



function clear(){
    const location = document.getElementById('fname').value = " ";

}

