//delete a favorite by a givin id
const deleteFavorite = (id) => new Promise((resolve, reject) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }
    
    fetch("https://api.thecatapi.com/v1/favourites/" + id, option)
    .then(res => res.json())
    .then(res => {
        return resolve (res);
    }).catch((err) => console.log(err))

})