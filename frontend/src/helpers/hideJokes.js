const hideJokesDisplay=()=>{
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.style.display = "none";

    let nextBtn = document.querySelector('.full-lenght-btn');
    nextBtn.style.display = "none";

    
}

const unhideJokesDisplay=()=>{
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.style.display = "block";

    let nextBtn = document.querySelector('.full-lenght-btn');
    nextBtn.style.display = "block";
}
