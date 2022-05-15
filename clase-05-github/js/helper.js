export function getData(url, callback) {  
    showSpinner();

    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(json){

        callback(json.data);
    }).finally(function(){
        showSpinner();
    })
    .catch(function(err){
        console.log("Something went wrong", err);
    })
};

export function madeGrid(data){
    const resultDiv = document.getElementById('main');
    let i;
    let images = '';

    // Chequeo si es un Array de Objetos
    if (data.length && data.length > 0){
        for (i = 0; i < data.length; i++) {
            if (data[i].images && data[i].images.downsized.url) {
                images += `<li class='col-4'><a href="${data[i].bitly_gif_url}"><img src="${data[i].images.downsized.url}" /></a></li>`;
            }
        }
    } 
    // Es un solo elemento
    else {
        images += `<li class='col-8 offset-2'><a href="${data.bitly_gif_url}"><img src="${data.images.downsized.url}" /></a></li>`
    }


    resultDiv.innerHTML = `<ul class='row'>${images}</ul>`;
}

export function showSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('d-none');
}
