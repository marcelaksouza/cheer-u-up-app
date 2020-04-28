let favoriteBtn = document.getElementById('favoriteBtn');
favoriteBtn.addEventListener("click", evt => {


    let displayDiv = document.getElementById('display');

    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }

    fetch("https://api.thecatapi.com/v1/favourites", option)
    .then(res => res.json())
    .then(favorites => { 
        let catDisplay = "";
        catDisplay += `<div class="card-columns">`;
        favorites.forEach(favorite => {

            catDisplay += `<div class="card">`;
            catDisplay += `<img src=" ${favorite.image.url}" class="img-fluid" alt="kitty pic" />`;
            catDisplay += `<div id="heartDivId-${favorite.image.id}" class="heart">`;
            catDisplay += `<img id="catImgId-${favorite.image.id}" src="img/heart2.png" onclick="favoriteFunc('${favorite.image.id}')" width="30" height="30" class="d-inline-block align-top" alt="redHeart">`
            catDisplay += `</div>`;
            catDisplay += `</div>`;
        })
        catDisplay += `</div>`;
        console.log(catDisplay)
        displayDiv.innerHTML = catDisplay;
    }).catch((err) => console.log(err))

});