let quotesButton = document.getElementById('searchBtn');

quotesButton.addEventListener("click", evt => {
    let id = document.querySelector('#catCategory').value;
    let qtd = document.querySelector('#catQtd').value;
    console.log(id);
    let query = "limit=" + qtd + "&category_ids=" + id;
    console.log(query);

    let displayDiv = document.getElementById('display');

    fetch('https://api.thecatapi.com/v1/images/search?' + query)
        .then(res => res.json())
        .then(cats => {
            console.log(cats)
            let catDisplay = "";
            

            catDisplay += `<div class="card-columns">`;

            cats.forEach(cat => {
                catDisplay += `<div class="card">`;
                catDisplay += `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" />`;
                catDisplay += `</div>`;
            });
            catDisplay += `</div>`;
            console.log(catDisplay)
            displayDiv.innerHTML = catDisplay;
        }).catch((err) => console.log(err))
});