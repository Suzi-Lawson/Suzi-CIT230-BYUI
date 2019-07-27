/* redlands */
const weatherrObject = new XMLHttpRequest();

weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=92374,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);


weatherrObject.send();
weatherrObject.onload = function() {
    let weatherInfo = JSON.parse(weatherrObject.responseText);
    console.log(weatherrInfo);

    document.getElementById('rweatherDescr').innerHTML = weatherrInfo.weather[0].description;
    document.getElementById('rcurrentTemp').innerHTML = weatherrInfo.main.temp;
    document.getElementById('rhumidity').innerHTML = weatherrInfo.main.humidity;
    document.getElementById('rwindSpeed').innerHTML = weatherrInfo.wind.speed;


/* wind chill equation */

let temp = weatherrInfo.main.temp;
let speed = weatherrInfo.wind.speed;
document.getElementById('rwindchill').innerHTML = rwindChill();

function rwindChill() {

    var wind = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp) * Math.pow(speed,0.16);
    return Math.round(wind)
}
}