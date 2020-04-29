//reference https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
function randomCat() {
    let imageDiv = document.getElementById('display');

    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }

    fetch('https://api.thecatapi.com/v1/images/search?', option)
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat => {
                imageDiv.innerHTML = `<img src=" ${cat.url}" class="rounded" alt="kitty pic" />`
            });
        }).catch((err) => console.log(err))
}

function randomJoke() {
    let quotesDiv = document.getElementById('quotes');

    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }
    
    fetch('https://geek-jokes.sameerkumar.website/api?format=json',option)
        .then(res => res.json())
        .then(jokes => {
            quotesDiv.innerHTML = `<p> ${jokes.joke} </p>`
        });
}

let quotesButton = document.getElementsByClassName('randomBtn');

Array.from(quotesButton).forEach(function(btn) {
    btn.addEventListener('click', evt => {
        randomCat();
        randomJoke();
    });
  });

