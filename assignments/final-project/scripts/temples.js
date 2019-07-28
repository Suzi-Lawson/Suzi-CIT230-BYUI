var temp;
var tempindex;
var section = document.querySelector('div.ftemplesjs');
var requestURL = 'https://suzi-lawson.github.io/Suzi-CIT230-BYUI.github.io/assignments/temple-inn-and-suites/json/temples.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var tempInfo = request.response;
    showTemps(tempInfo);
}


function showTemps(jsonObj) {

    temp = jsonObj['temples'];

    for (tempindex = 0; tempindex < temp.length; tempindex++) {
        if (temp[tempindex].name == 'Fort Collins Colorado Temple')
        populateTemps(temp[tempindex]);
    }

    for (tempindex = 0; tempindex < temp.length; tempindex++) {
        if (temp[tempindex].name == 'Redlands California Temple')
        populateTemps(temp[tempindex]);
    }

    for (tempindex = 0; tempindex < temp.length; tempindex++) {
        if (temp[tempindex].name == 'San Diego California Temple')
        populateTemps(temp[tempindex]);
    }

    for (tempindex = 0; tempindex < temp.length; tempindex++) {
        if (temp[tempindex].name == 'Laie Hawaii Temple')
        populateTemps(temp[tempindex]);
    }
}    
