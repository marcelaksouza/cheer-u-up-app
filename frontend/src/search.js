
let searchBtn = document.getElementById('searchBtn');
let displayDiv = document.getElementById('display');
//fetch request to search the kitties
searchBtn.addEventListener("click", evt => {
    
    //hide jokes div
    hideJokesDisplay();

    //to build the query
    let categoryId = document.querySelector('#catCategory').value;
    let breedId = document.querySelector('#catBreeds').value;
    let qtd = document.querySelector('#catQtd').defaultValue = "1";
    qtd = document.querySelector('#catQtd').value;
    
    if(qtd <= 100){
        let query = "limit=" + qtd + "&category_ids=" + categoryId +"&breed_id=" + breedId;
    console.log(query);

    //get images
    fetch('https://api.thecatapi.com/v1/images/search?' + query)
        .then(res => res.json())
        .then(cats => {
            if(cats.length == 0){
                //message if there is no match for search
                error("Oh no... There is no kitties that match your criteria.. Try leave one of the feilds blank and try again. Best luck next time");
            }
            else{ 
                //else build the cards using the cats array
                buildCardDiv(cats);}
        }).catch((err) => console.log(err))
    }
    else{
        error("1 to 100 I said... try again :P");
    }
});


//build cards from a array
const buildCardDiv = (cats) => {
    let catDisplay = "";
    catDisplay += `<div class="card-columns">`;

    cats.forEach(cat => {
        catDisplay += `<div class="card">`;
        catDisplay += `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" onclick="openModalfunction('${cat.id}')">`;
        catDisplay += `<div id="heartDivId-${cat.id}" class="heart">`;
        catDisplay += `<img id="catImgId-${cat.id}" src="frontend/img/heart1.png" onclick="favoriteFunc('${cat.id}')" width="30" height="30" class="d-inline-block align-top" alt="blankHeart">`
        catDisplay += `</div>`;
        catDisplay += `</div>`;
    });
    catDisplay += `</div>`;
    
    displayDiv.innerHTML = catDisplay;
}
