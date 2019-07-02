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
        if (town[townindex].name == 'Preston')
        populateTowns(town[townindex]);
    }
}    

function populateTowns(jsonObj) {

    var towns = jsonObj;

    var myArticle = document.createElement('article');
    
    var myH3 = document.createElement('h3');
    myH3.textContent = "Upcoming Events in " + towns.name;
    myArticle.appendChild(myH3);
    
    var myImage = document.createElement('img');
    myImage.src = "images/presevents.jpg";
    myArticle.appendChild(myImage);

    let myPara = [];
    let event = 0
town.events.forEach(x => {
    myPara[event] = x;
    document.createElement('p');
    myPara[event].textContent = x;
    myArticle.appendChild(myPara[event]);
})

    myArticle.className = "townevents";
    section.appendChild(myArticle);

}