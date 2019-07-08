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
    myH3.textContent = "Upcoming Events in " + towns.name;
    myArticle.appendChild(myH3);
    
    var myImage = document.createElement('img');
    myImage.src = "images/fevents.jpg";
    myArticle.appendChild(myImage);


    let myPara = [];
    var event = 0
    
    for (event in towns.events) {
    myPara[event + 1] = document.createElement('p');
    myPara[event + 1].textContent = towns.events[event];
    myArticle.appendChild(myPara[event + 1]);
    event++;
}

    myArticle.className = "townevents";
    section.appendChild(myArticle);

}