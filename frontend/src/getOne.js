const getOneById = (id) => {
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
        },
    }
    
    fetch('https://api.thecatapi.com/v1/images/'+id,option)
        .then(res => res.json())
        .then(cat => {
            console.log(cat);
            let content = "";
            content += `<img src=" ${cat.url}" class="img-fluid" alt="kitty pic" onclick="openModalfunction('${cat.id}')">`;
            document.getElementById("modal-content").innerHTML = content;
            
        }).catch((err) => console.log(err))
}