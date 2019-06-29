const weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/group?id=5604473,703448,2643743&units=metric", true);
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
