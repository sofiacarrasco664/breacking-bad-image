const elementBoton = document.getElementById('sendButton');
const elementoPhrase = document.getElementById('phrase');
const elementoImage = document.getElementById('image');
const API_KEY = "ZlXprCeF2Zgb2qmMwfcZZRVadRyFCeEo";

const buscarFrase = () => {
    fetch('https://breaking-bad-quotes-for-vercel.vercel.app/api/quotes')

    .then(function(response){
       
        console.log('me trajo el json', response);
        
        return response.json();

    })
    .then(function(json){
    
        console.log('Este es el json', json);
        elementoPhrase.innerHTML = `<p> Dijo ${json.data[0].author} : ${json.data[0].quote}</p>`;

        return json.data[0].author;

    })
    .then(function(quienFue){
        
        buscarImagen(quienFue);
    
    })
    .catch(function(err){
    
        console.log('Something went wrong', err);
    
    })
};

const buscarImagen = (author) => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&q=' + author + '&limit=1&offset=0&rating=g&lang=en')
    .then(function(response) {
    return response.json();
    })
    .then(function(data){
        elementoImage.innerHTML = `<img src="${data.data[0].images.downsized.url}"/>`;
    })
    .catch(function(err){
        console.log('Hubo un error', err);
    })
};

elementBoton.addEventListener('click', buscarFrase);
