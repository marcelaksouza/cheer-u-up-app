
const postFavorite = (id) => {

    const body = {
        "image_id": id,
    }

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
        body: JSON.stringify(body)
    }

    fetch("https://api.thecatapi.com/v1/favourites", option)
        .then((res) => {
            res.json().then((res) => {
                // console.log(res)

                const option = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
                    },
                }

                fetch("https://api.thecatapi.com/v1/favourites", option)
                    .then((res) => {
                        res.json().then(res => console.log(res));
                    })
            })
        })
}