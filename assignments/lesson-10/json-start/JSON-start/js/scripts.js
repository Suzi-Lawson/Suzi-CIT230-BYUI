const weatherObject = new XMLHttpRequest();
weatherObject.open("Get", "//api.openweathermap.org/data/2.5/weather?zip=83127,us&appid=b4f53c29c600d4a6c578dd81d9f2a254");
weatherObject.send();
weatherObject.onload = function() {
    let weatherinfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
} // end of onload