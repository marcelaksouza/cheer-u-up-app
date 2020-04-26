//dropdown manu was adapted using is code reference 
//https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
let dropdown = document.getElementById('catCategory');
let defaultOption = document.createElement('option');
defaultOption.text = 'None';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        }
    }

    fetch('https://api.thecatapi.com/v1/categories', requestOptions)
        .then(res => res.json())
        .then(categories => {
            console.log(categories)
            createCatsTable(categories);
        }).catch((err) => console.log(err));


 //add all cats pics to
const createCatsTable = (categories) => {

    let option;
    
    //dinamic filds for the dropdown 
    for (var i = 0; i < categories.length; i++) {
        option = document.createElement('option');
        option.id += `category${categories[i].id}`;//id
        option.value += `${categories[i].id}`;//value
        option.text += `${categories[i].name}`;//name
        dropdown.add(option);
    } 
}