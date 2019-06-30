const weatherForcast = new XMLHttpRequest();
weatherForcast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForcast.send();
weatherForcast.onload = function() {
    let forcastInfo = JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);

var 

    for (forcastInfo.list = 0; forcastInfo.list < 8; forcastInfo.list++) {
        if (forcastInfo.list[0].dt_txt == "18:00:00")
        document.getElementById('dayOnetemp').src = forcastInfo.list[0].main.temp;
        const iconcode = forcastInfo.list[0].weather.0.icon;
        const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        console.log(icon_path);
        document.getElementById('weather_iconOne').src = icon_path;
    }
    

}


