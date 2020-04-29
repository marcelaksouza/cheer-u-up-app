let searchBtn = document.getElementById('searchBtn');
let displayDiv = document.getElementById('display');

searchBtn.addEventListener("click", evt => {
    hideJokesDisplay();
    let id = document.querySelector('#catCategory').value;
    let qtd = document.querySelector('#catQtd').defaultValue = "1";
    qtd = document.querySelector('#catQtd').value;
  
    let query = "limit=" + qtd + "&category_ids=" + id;
    console.log(query);

    fetch('https://api.thecatapi.com/v1/images/search?' + query)
        .then(res => res.json())
        .then(cats => {
            buildCardDiv(cats)
        }).catch((err) => console.log(err))
});

const buildCardDiv = (cats) => {
    let catDisplay = "";
    catDisplay += `<div class="card-columns">`;

    cats.forEach(cat => {
        catDisplay += `<div class="card">`;
        catDisplay += `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" onclick="openModalfunction('${cat.id}')">`;
        catDisplay += `<div id="heartDivId-${cat.id}" class="heart">`;
        catDisplay += `<img id="catImgId-${cat.id}" src="img/heart1.png" onclick="favoriteFunc('${cat.id}')" width="30" height="30" class="d-inline-block align-top" alt="blankHeart">`
        catDisplay += `</div>`;
        catDisplay += `</div>`;
    });
    catDisplay += `</div>`;
    
    displayDiv.innerHTML = catDisplay;
}