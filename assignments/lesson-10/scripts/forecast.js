const weatherForcast = new XMLHttpRequest();
weatherForcast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForcast.send();
weatherForcast.onload = function() {
    let forcastInfo = JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);

const word = '18:00:00'

    for (var i = 0; i < 8; i++) {
        if (forcastInfo.list[i].dt_txt.contain(word)) {
            document.getElementById('dayOnetemp').innerHTML = forcastInfo.list[i].main.temp;
            document.getElementById('dayOne').innerHTML = forcastInfo.list[i].dt;
     
            const iconcode = forcastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconOne').innerHTML = icon_path; 
        }
    }

    for (var i = 8; i < 16; i++) {
        if (forcastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayTwotemp').innerHTML = forcastInfo.list[i].main.temp;
            document.getElementById('dayTwo').innerHTML = forcastInfo.list[i].dt;
     
            const iconcode = forcastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconTwo').innerHTML = icon_path; 
        }
    }

    for (var i = 16; i < 24; i++) {
        if (forcastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayThreetemp').innerHTML = forcastInfo.list[i].main.temp;
            document.getElementById('dayThree').innerHTML = forcastInfo.list[i].dt;
     
            const iconcode = forcastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconThree').innerHTML = icon_path; 
        }
    }

    for (var i = 24; i < 32; i++) {
        if (forcastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayFourtemp').innerHTML = forcastInfo.list[i].main.temp;
            document.getElementById('dayFour').innerHTML = forcastInfo.list[i].dt;
     
            const iconcode = forcastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconFour').innerHTML = icon_path; 
        }
    }

    for (var i = 32; i < 40; i++) {
        if (forcastInfo.list[i].dt_txt == '18:00:00') {
            document.getElementById('dayFivetemp').innerHTML = forcastInfo.list[i].main.temp;
            document.getElementById('dayFive').innerHTML = forcastInfo.list[i].dt;
     
            const iconcode = forcastInfo.list[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
            console.log(icon_path);
            document.getElementById('weather_iconFive').innerHTML = icon_path; 
        }
    }


}


