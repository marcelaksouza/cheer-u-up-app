//reference: https://stackoverflow.com/questions/25587762/javascript-click-on-element-by-class
let element = document.querySelector('.randomBtn').click();


// // let iconDiv = document.getElementById('icon')

// // fetch ('https://api.chucknorris.io/jokes/random')
// // .then(res => res.json())
// // .then(quote => {
// //     iconDiv.innerHTML += `<img src=" ${quote.icon_url}" alt="chucknorris icon" />`
// // });


// // let quotesButton = document.getElementById('ramdon-quote');
// // quotesButton.addEventListener("click", evt => {
// //     let quotesDiv = document.getElementById('quotes');
    
// //     fetch('https://api.chucknorris.io/jokes/random')
// //         .then(res => res.json())
// //         .then(quotes => {
// //             quotesDiv.innerHTML = `<p> ${quotes.value} </p>`
// //         });
// // });

// let catsButton = document.getElementById('kitty');
// catsButton.addEventListener("click", evt => {
//     let imageDiv = document.getElementById('image');

//     fetch('https://api.thecatapi.com/v1/images/search?')
//         .then(res => res.json())
//         .then(cats => {
//             cats.forEach(cat => {
//                 imageDiv.innerHTML = `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" />`
//             });
//         });
// });

// let dogsButton = document.getElementById('doggie');
// dogsButton.addEventListener("click", evt => {
//     let imageDiv = document.getElementById('image');

//     fetch('https://api.thedogapi.com/v1/images/search?')
//         .then(res => res.json())
//         .then(dogs => {
//             dogs.forEach(dog => {
//                 imageDiv.innerHTML = `<img src="${dog.url}" class="img-fluid" alt="doggie pic" />`
//             });
//         });
// });

// //geek jokes
// let geekJokesButton = document.getElementById('geekJokes');
// geekJokesButton.addEventListener("click", evt => {
//     let quotesDiv = document.getElementById('quotes');
//     fetch('https://geek-jokes.sameerkumar.website/api?format=json')
//         .then(res => res.json())
//         .then(jokes => {
//             quotesDiv.innerHTML = `<p> ${jokes.joke} </p>`
//         });
// });

// //personalizes jokes
// let newJokesButton = document.getElementById('newJoke');
// newJokesButton.addEventListener("click", evt => {
//     let quotesDiv = document.getElementById('quotes');
//     quotesDiv.innerHTML = 
//     `<form action="">
//         <label for="fname">Enter your joke</label> <br>
//         <textarea id="textjoke" name="textjoke"></textarea><br>
//         <p><button id="personalJoke" class="btn btn-success">Personalized Joke submit</button><p>
//     </form>`
      
// });

// //document.getElementById("image_X").style.display='none';