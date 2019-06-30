const weatherForcast = new XMLHttpRequest();
weatherForcast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForcast.send();
weatherForcast.onload = function() {
    let forcastInfo = JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);

var i = forcastInfo.list;

    for (i = 0; i < 8; i++) {
        if (forcastInfo.list[i].dt_txt == "18:00:00")
        document.getElementById('dayOnetemp').src = forcastInfo.list[i].main.temp;
        
        const iconcode = forcastInfo.list[i].weather.icon;
        const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        console.log(icon_path);
        document.getElementById('weather_iconOne').src = icon_path;
    }
    

}


