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
};


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
};
/* hawaii */ 
const weatherhObject = new XMLHttpRequest();

weatherhObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=96762,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);


weatherhObject.send();
weatherhObject.onload = function() {
    let weatherInfo = JSON.parse(weatherhObject.responseText);
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
};

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