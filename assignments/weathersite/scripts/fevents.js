var town;
var townindex;
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    showTowns(townInfo);
}


function showTowns(jsonObj) {

    town = jsonObj['towns'];

    for (townindex = 0; townindex < town.length; townindex++) {
        if (town[townindex].name == 'Fish Haven')
        populateTowns(town[townindex]);
    }
}    

function populateTowns(jsonObj) {

    var towns = jsonObj;

    var myArticle = document.createElement('article');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myImage = document.createElement('img');

    myH3.textContent = "Upcoming Events in " + towns.name;
    myPara1.textContent = towns.events;
    myImage.src = "images/fishevents.jpg";

    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myImage);
    myArticle.className = "townevents";

    section.appendChild(myArticle);

}