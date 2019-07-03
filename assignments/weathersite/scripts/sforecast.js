const weatherForecast = new XMLHttpRequest();
weatherForecast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83276,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForecast.send();
weatherForecast.onload = function() {
    let forecastInfo = JSON.parse(weatherForecast.responseText);
    console.log(forecastInfo);
    
    let smonth = [];
    let sday = [];
    let sicon = [];
    let sdesc = [];
    let stemp = [];
    let day = 0

    forecastInfo.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            smonth[day] = x.dt_txt.substring(5, 7);
            sday[day] = x.dt_txt.substring(8, 10);
            sicon[day] = x.weather[0].icon;
            sdesc[day] = x.weather[0].description;
            stemp[day] = Math.round(x.main.temp)

            console.log(day, smonth[day], sday[day], sicon[day], sdesc[day], stemp[day])
            day++;
        }    
    });


            var Months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
// Day One
            document.getElementById('dayOne').innerHTML = Months[smonth[0] - 1] + " " + sday[0];
            document.getElementById('weather_iconOne').src = "//openweathermap.org/img/w/" + sicon[0] + ".png";
            document.getElementById('weather_iconOne').atl = sdesc[0];  
            document.getElementById('dayOnetemp').innerHTML = stemp[0];
// Day Two
            document.getElementById('dayTwo').innerHTML = Months[smonth[0] - 1] + " " + sday[1];
            document.getElementById('weather_iconTwo').src = "//openweathermap.org/img/w/" + sicon[1] + ".png";
            document.getElementById('weather_iconTwo').atl = sdesc[1];  
            document.getElementById('dayTwotemp').innerHTML = stemp[1];
// Day Three
            document.getElementById('dayThree').innerHTML = Months[smonth[0] - 1] + " " + sday[2];
            document.getElementById('weather_iconThree').src = "//openweathermap.org/img/w/" + sicon[2] + ".png";
            document.getElementById('weather_iconThree').atl = sdesc[2];  
            document.getElementById('dayThreetemp').innerHTML = stemp[2];
// Day Four
            document.getElementById('dayFour').innerHTML = Months[smonth[0] - 1] + " " + sday[3];
            document.getElementById('weather_iconFour').src = "//openweathermap.org/img/w/" + sicon[3] + ".png";
            document.getElementById('weather_iconFour').atl = sdesc[3];  
            document.getElementById('dayFourtemp').innerHTML = stemp[3];
// Day Five
            document.getElementById('dayFive').innerHTML = Months[smonth[0] - 1] + " " + sday[4];
            document.getElementById('weather_iconFive').src = "//openweathermap.org/img/w/" + sicon[4] + ".png";
            document.getElementById('weather_iconFive').atl = sdesc[4];  
            document.getElementById('dayFivetemp').innerHTML = stemp[4];

}