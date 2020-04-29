//dropdown manu was adapted using is code reference 
//https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
let dropdownCatCategory= document.getElementById('catCategory');
let dropdownCatBreed= document.getElementById('catBreeds');
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        }
    }
    //dropdown cat's category
    fetch('https://api.thecatapi.com/v1/categories', requestOptions)
        .then(res => res.json())
        .then(categories => {
            createDropDownOptions(categories, dropdownCatCategory);
        }).catch((err) => console.log(err));
    
    //dropdown cat's breed 
    fetch('https://api.thecatapi.com/v1/breeds', requestOptions)
        .then(res => res.json())
        .then(breeds => {
            createDropDownOptions(breeds, dropdownCatBreed);
        }).catch((err) => console.log(err));



 //add all cats pics to
const createDropDownOptions = (categories, dropdown) => {
    let defaultOption = document.createElement('option');
    defaultOption.text = ' ';
    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

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