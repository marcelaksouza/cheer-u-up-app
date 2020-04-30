const error = (message) => {
    let quotesDiv = document.getElementById('quotes');
    //show a kittie
    randomCat();
    //display message
    quotesDiv.innerHTML = `<p style="color:red;">${message}</p>`;
}