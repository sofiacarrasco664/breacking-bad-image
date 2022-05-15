const API_KEY = ""; // COLOQUEN SU API KEY ACA
const RANDOM_URL = "https://api.giphy.com/v1/gifs/random";

/** 
 * function getData(url) {  
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(json){

        console.log(json.data);
    })
    .catch(function(err){
        console.log("Something went wrong", err);
    })
};

getData(`${RANDOM_URL}?api_key=${API_KEY}&rating=g`);

*/

fetch('https://api.giphy.com/v1/gifs/random?api_key=AZCjM68y1GkgBjzTFlISEwbwQGJqPdjZ&rating=pg-13')
    .then(function(response){
        console.log('response cruda', response);
        
        return response.json();
    }).then(function(json){

        console.log('response como json', json);
        imprimirResultado(json.data);
    }).then(function(){
        console.log('termine, che');
    })
    .catch(function(err){
        console.log("Something went wrong", err);
    });


function imprimirResultado(data){
    const resultDiv = document.getElementById('main');
    let images = '';


    // images += `<div><img src="${data.images.downsized.url}" height="${data.images.downsized.height * 2}"/><div>`
    images += `<a href="${data.bitly_gif_url}">${data.id}</a>`
    resultDiv.innerHTML = `<div class='row'>${images}</div>`;
}