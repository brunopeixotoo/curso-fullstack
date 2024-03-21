
// REQUISIÇÕES HTTP

//URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
    
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((response) => response.json())
    .then((json) => {
        posts = json;
        
        posts.map((item) => {
            console.log(item.titulo);

            let liElement = document.createElement('li');
            listElement.appendChild(liElement);

            let titleElement = document.createElement('strong');
            let imgElement = document.createElement('img');
            let description = document.createElement('a');

            let titleText = document.createTextNode(`Título ${item.titulo}`);
            titleElement.appendChild(titleText);
            imgElement = item.capa;
            liElement.appendChild(imgElement);
            
            let descriptionText = document.createTextNode(`Descrição ${item.subtitulo}`);
            description.appendChild(descriptionText);

        })
    })
    .catch(() => {
        console.log('DEU ERRO');
    })
}

nutriApp();