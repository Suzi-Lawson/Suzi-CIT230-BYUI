
/* hawaii */ 
const weatherhObject = new XMLHttpRequest();

weatherhObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=96762,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);


weatherhObject.send();
weatherhObject.onload = function() {
    let weatherhInfo = JSON.parse(weatherhObject.responseText);
    console.log(weatherhInfo);

    document.getElementById('hweatherDescr').innerHTML = weatherhInfo.weather[0].description;
    document.getElementById('hcurrentTemp').innerHTML = weatherhInfo.main.temp;
    document.getElementById('hhumidity').innerHTML = weatherhInfo.main.humidity;
    document.getElementById('hwindSpeed').innerHTML = weatherhInfo.wind.speed;


/* wind chill equation */

let temp = weatherhInfo.main.temp;
let speed = weatherhInfo.wind.speed;
document.getElementById('hwindchill').innerHTML = hwindChill();

function hwindChill() {

    var wind = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp) * Math.pow(speed,0.16);
    return Math.round(wind)
}
}