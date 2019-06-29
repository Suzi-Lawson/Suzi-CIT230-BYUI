var temp = parseFloat(document.getElementById('currentTemp').innerhtml);
var speed = parseFloat(document.getElementById('windSpeed').innerhtml);	
var wind = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);
document.getElementById('windChill').innerHTML = wind;