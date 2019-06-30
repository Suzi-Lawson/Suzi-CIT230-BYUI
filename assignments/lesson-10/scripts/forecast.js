const weatherForcast = new XMLHttpRequest();
weatherForcast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForcast.send();
weatherForcast.onload = function() {
    let weatherInfo = JSON.parse(weatherForcast.responseText);
    
const iconcode = weatherInfo.weather[0].icon;
const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);
document.getElementById('weather_iconOne').src = icon_path;
document.getElementById('weather_iconTwo').src = icon_path;
document.getElementById('weather_iconThree').src = icon_path;
document.getElementById('weather_iconFour').src = icon_path;
document.getElementById('weather_iconFive').src = icon_path;
}