function windChill() {
	var t = parseFloat(document.getElementById('temp').value);
	var s = parseFloat(document.getElementById('windspeed').value);	
    var f = (35.74 + 0.6215 * t - 35.75 * (Math.pow(s,0.16)) + 0.4275 * t * (Math.pow(s,0.16))).toFixed(2);
    return f;
}
document.getElementById('windchill').innerHTML = windChill();