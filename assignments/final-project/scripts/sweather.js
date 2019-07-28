const weathersObject = new XMLHttpRequest();

weathersObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=92122,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);


weathersObject.send();
weathersObject.onload = function() {
    let weathersInfo = JSON.parse(weathersObject.responseText);
    console.log(weathersInfo);

    document.getElementById('sweatherDescr').innerHTML = weathersInfo.weather[0].description;
    document.getElementById('scurrentTemp').innerHTML = weathersInfo.main.temp;
    document.getElementById('shumidity').innerHTML = weathersInfo.main.humidity;
    document.getElementById('swindSpeed').innerHTML = weathersInfo.wind.speed;


/* wind chill equation */

let temp = weathersInfo.main.temp;
let speed = weathersInfo.wind.speed;
document.getElementById('swindchill').innerHTML = swindChill();

function swindChill() {

    var wind = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp) * Math.pow(speed,0.16);
    return Math.round(wind)
}
}