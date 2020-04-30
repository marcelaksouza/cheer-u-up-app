
//toggle favorite btn
const favoriteFunc = (id) => {

    //check if is favorite
    isFavorite(id)
        .then((favorite) => {
            //finding the div
            let heartDivId = "heartDivId-" + id;
            const heartDiv = document.getElementById(heartDivId);

            //initiating the variable
            let heartDisplay = "";

            //if yes
            if (favorite.isFavorite == "true") {
                //add a blank heart
                heartDisplay += `<img id="catImgId-${id}" src="img/heart1.png" onclick="favoriteFunc('${id}')" width="30" height="30" class="d-inline-block align-top" alt="blankHeart">`
                //delete from favorite
                deleteFavorite(favorite.id)
            }
            //if no
            else {
                //add a red heart
                heartDisplay += `<img id="catImgId-${id}" src="img/heart2.png" onclick="favoriteFunc('${id}')" width="30" height="30" class="d-inline-block align-top" alt="redHeart">`
                //post to favorite
                postFavorite(id);
            }
            //fill the heart div with a heart
            heartDiv.innerHTML = heartDisplay;
        }).catch((err) => console.log(err));
}


