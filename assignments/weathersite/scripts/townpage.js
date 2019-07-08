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
    
    for (townindex = 0; townindex < town.length; townindex++) {
        if (town[townindex].name == 'Soda Springs')
        populateTowns(town[townindex]);
    }
    
    for (townindex = 0; townindex < town.length; townindex++) {
        if (town[townindex].name == 'Fish Haven')
        populateTowns(town[townindex]);
    }
}    

function populateTowns(jsonObj) {

    var towns = jsonObj;

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = towns.name;
    myPara1.textContent = towns.motto;
    myPara2.textContent = "Year Founded: " + towns.yearFounded;
    myPara3.textContent = "Population: " + towns.currentPopulation;
    myPara4.textContent = "Annual Rain Fall: " + towns.averageRainfall;

    switch (myH2.textContent) {
        case "Preston":
            myImage.src = "images/phome.jpg";
            break;
        case "Soda Springs":
            myImage.src = "images/shome.jpg";
            break;
        case "Fish Haven":
            myImage.src = "images/fhome.jpg";
            break;
    }
    
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myImage);
    myArticle.className = "towninfo";

    section.appendChild(myArticle);

}
