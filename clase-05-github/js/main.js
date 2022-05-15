import CONSTANTS from './constants.js';
import {getData, madeGrid} from './helper.js';

// console.log('cons', CONSTANTS);

// Elementos de DOM
const button = document.getElementById('sendButton');
const inputElement = document.getElementById('search');


button.addEventListener("click", ()=>{
    const valorDeInput = inputElement.value;

    const url = `${CONSTANTS.URL_SEARCH}?api_key=${CONSTANTS.API_KEY}&q=${valorDeInput}`;
    getData(url, madeGrid);
});

$('body').on('shown.bs.tab', function (event) {
    // console.log('ev', event.target);
    // Limpio Results
    document.getElementById('main').innerHTML = '';
    
    switch(event.target.id) {
        case 'pills-random-tab':
            getData(`${CONSTANTS.RANDOM_URL}?api_key=${CONSTANTS.API_KEY}&rating=g`, madeGrid);
        break;
        default:
            getData(`${CONSTANTS.TREND_URL}?api_key=${CONSTANTS.API_KEY}&limit=${CONSTANTS.log}&rating=g`, madeGrid);
    }
});