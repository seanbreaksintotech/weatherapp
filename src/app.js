import style from './main.css'

import {hiAlert} from './getWeather'


const btns = document.getElementById('change');

console.log('hello')
console.log('mute')

btns.addEventListener('click', (e)=>{
    hiAlert()
})