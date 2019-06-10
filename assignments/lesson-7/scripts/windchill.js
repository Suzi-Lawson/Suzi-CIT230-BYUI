function windChill() {
	var tempF = parseFloat(document.getElementById('temp').value);
	var speed = parseFloat(document.getElementById('windspeed').value);	
    var f = 0

    f = (35.74 + 0.6215 * t - 35.75 * (Math.pow(s,0.16)) + 0.4275 * t * (Math.pow(s,0.16))).toFixed(2);
}
document.getElementById('windchill').innerHTML = f;