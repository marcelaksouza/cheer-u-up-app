//geek jokes

function randomJoke() {
    let quotesDiv = document.getElementById('quotes');

    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }

    fetch('https://geek-jokes.sameerkumar.website/api?format=json', option)
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat => {
                quotesDiv.innerHTML = `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" />`
            });
        }).catch((err) => console.log(err))
}