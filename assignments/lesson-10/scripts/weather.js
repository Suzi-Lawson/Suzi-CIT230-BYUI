const weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?id=5604473,&units=imperial", true);
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
}