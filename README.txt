# cheer-u-up-app

Cheer u up App is a web service where you can enjoy some geek joks along with a lovely kitty picture.
I use the cats API - https://docs.thecatapi.com/ along with the Jokes API https://github.com/sameerkumar18/geek-joke-api to develop this service 

Below I describe the application functionalities:
- Default behaivor : Fetch a random cat and a random joke
- Favorite button: Fetch all favorites
- Favorite: Though clicking into the white heart, the pic is POST to the favorite endpoint and the heart become red
- Unfavorite: Though clicking into the red heart, the pic is DELETE from the favorite and heart become white again
- Cat dropdown: Cat category and cat breed are load from fetch
- Search: create a query to retrive a list of selected cats
- Modal: You can click into a pic and see the pic with a bigger size I am using Fetch to select one kittie

