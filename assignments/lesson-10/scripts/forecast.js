const weatherForcast = new XMLHttpRequest();
weatherForcast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForcast.send();
weatherForcast.onload = function() {
    let forcastInfo = JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);


for (forcastInfo.list = 0; forcastInfo.list < 8; forcastInfo.list++) {
    if (forcastInfo.list[0]dt_txt == "18:00:00")
    document.getElementById('dayOnetemp').src = weather.main.temp;
    const iconcode = forcastInfo.list[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_iconOne').src = weather[0].icon;
}

for (forcastInfo.list = 8; forcastInfo.list < 16; forcastInfo.list++) {
    if (forcastInfo.list[0]dt_txt == "18:00:00")
    document.getElementById('dayTwotemp').src = weather.main.temp;
    const iconcode = forcastInfo.list[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_iconTwo').src = weather[0].icon;
}
for (forcastInfo.list = 16; forcastInfo.list < 24; forcastInfo.list++) {
    if (forcastInfo.list[0]dt_txt == "18:00:00")

    document.getElementById('dayThreetemp').src = weather.main.temp;

    const iconcode = forcastInfo.list[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_iconThree').src = weather[0].icon;
}
for (forcastInfo.list = 24; forcastInfo.list < 32; forcastInfo.list++) {
    if (forcastInfo.list[0]dt_txt == "18:00:00")
    document.getElementById('dayFourtemp').src = weather.main.temp;
    const iconcode = forcastInfo.list[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_iconFour').src = weather[0].icon;
}
for (forcastInfo.list = 32; forcastInfo.list < 40; forcastInfo.list++) {
    if (forcastInfo.list[0]dt_txt == "18:00:00")
    document.getElementById('dayFivetemp').src = weather.main.temp;
    const iconcode = forcastInfo.list[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_iconFive').src = weather[0].icon;
}
}


