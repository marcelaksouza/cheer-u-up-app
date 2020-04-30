//reference: https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php
//reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise

//return a promise. If the id belongs to the the favorite list then return the favorite object and isfavorite=true
//if is not in the list return a object isfavorite=false
const isFavorite = (id) => new Promise((resolve, reject) => {
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    };

    fetch("https://api.thecatapi.com/v1/favourites", option)
        .then(res => res.json())
        .then((allFavorities) => {
            allFavorities.some(favorite => {
                //if the favorite list has the id
                if (favorite.image_id == id) {
                    return resolve(Object.assign(favorite, { "isFavorite": "true" }));
                }
            })
            return resolve({ "isFavorite": "false" });
        }).catch((err) => console.log(err))
})



