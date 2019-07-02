const weatherForecast = new XMLHttpRequest();
weatherForecast.open("GET", "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=b4f53c29c600d4a6c578dd81d9f2a254&units=imperial", true);
weatherForecast.send();
weatherForecast.onload = function() {
    let forecastInfo = JSON.parse(weatherForecast.responseText);
    console.log(forcastInfo);

    let fmonth = [];
    let fday = [];
    let ficon = [];
    let fdesc = [];
    let ftemp = [];
    let day = 0

    forecastInfo.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            fmonth[day] = x.dt_txt.substring(5, 7);
            fday[day] = x.dt_txt.substring(8, 10);
            ficon[day] = x.weather[0].icon;
            fdesc[day] = x.weather[0].description;
            ftemp[day] = Math.round(x.main.temp)

            console.log(day, fmonth[day], fday[day], ficon[day], fdesc[day], ftemp[day])
            day++;
        }    
    });


            var Months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
// Day One
            document.getElementById('dayOne').innerHTML = Months[fmonth[0] - 1] + " " + fday[0];
            document.getElementById('weather_iconOne').src = "//openweathermap.org/img/w/" + ficon[0] + ".png";
            document.getElementById('weather_iconOne').atl = fdesc[0];  
            document.getElementById('dayOnetemp').innerHTML = ftemp[0];
// Day Two
            document.getElementById('dayTwo').innerHTML = Months[fmonth[0] - 1] + " " + fday[1];
            document.getElementById('weather_iconTwo').src = "//openweathermap.org/img/w/" + ficon[1] + ".png";
            document.getElementById('weather_iconTwo').atl = fdesc[1];  
            document.getElementById('dayTwotemp').innerHTML = ftemp[1];
// Day Three
            document.getElementById('dayThree').innerHTML = Months[fmonth[0] - 1] + " " + fday[2];
            document.getElementById('weather_iconThree').src = "//openweathermap.org/img/w/" + ficon[2] + ".png";
            document.getElementById('weather_iconThree').atl = fdesc[2];  
            document.getElementById('dayThreetemp').innerHTML = ftemp[2];
// Day Four
            document.getElementById('dayFour').innerHTML = Months[fmonth[0] - 1] + " " + fday[3];
            document.getElementById('weather_iconFour').src = "//openweathermap.org/img/w/" + ficon[3] + ".png";
            document.getElementById('weather_iconFour').atl = fdesc[3];  
            document.getElementById('dayFourtemp').innerHTML = ftemp[3];
// Day Five
            document.getElementById('dayFive').innerHTML = Months[fmonth[0] - 1] + " " + fday[4];
            document.getElementById('weather_iconFive').src = "//openweathermap.org/img/w/" + ficon[4] + ".png";
            document.getElementById('weather_iconFive').atl = fdesc[4];  
            document.getElementById('dayFivetemp').innerHTML = ftemp[4];

}


