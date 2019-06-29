const iconcode = weatherInfo.weather[0].icon;
const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);
document.getElementById('weather_icon').src = icon_path;