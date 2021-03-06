const weatherObject = new XMLHttpRequest();



weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=80528,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);


weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('fweatherDescr').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('fcurrentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('fhumidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('fwindSpeed').innerHTML = weatherInfo.wind.speed;


/* wind chill equation */

let temp = weatherInfo.main.temp;
let speed = weatherInfo.wind.speed;
document.getElementById('fwindchill').innerHTML = fwindChill();

function fwindChill() {

    var wind = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp) * Math.pow(speed,0.16);
    return Math.round(wind)
}
}