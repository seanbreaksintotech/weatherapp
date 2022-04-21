import style from './main.css'



const submit = document.getElementById("forms");

const btns = document.getElementById('change');


console.log('hello')
console.log('mute')

submit.addEventListener('submit', (e) =>{
    e.preventDefault();
    addWeather()
    const location = document.getElementById('fname').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=498def7de750295b71a8faec7d3bcdd3&units=imperial`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
    let cityName = response.name;
    let cityTemp = response.main.temp;
    let cityFeel = response.main.feels_like;
    let cityWind = response.wind.speed;
    let cityHumidity = response.main.humidity;
     
   
    
   
    });
    
  
clear()

})



function clear(){
    const location = document.getElementById('fname').value = " ";

}

function addWeather(city){

    const weatherBox = document.querySelector('#weathercontainer')
    const newTemp = document.createElement('div')

    newTemp.innerHtml = ` <div class = "weatherbox">

    <h1> Atlanta <i class="fa-solid fa-city"></i> </h1>
    

    <div class = "h1temp"> 
        <h1 >69 &#176 </h1> 

        <h5 > FEELS LIKE: </h5>
        <h5> WIND: </h5>
        <h5> HUMIDITY: </h5>
    
    </div>

</div> `

    weatherBox.appendChild(newTemp)
}








