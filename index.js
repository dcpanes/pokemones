document.addEventListener('DOMContentLoaded', function() { 
    // ACÁ YA ESTA LISTO EL DOM
    obtenerPokemones();
 });

async function obtenerPokemones(){
    const url = 'https://pokeapi.co/api/v2/pokemon';
    try {
        const pokemones = await fetch(url); 
        const pokemonesJSON = await pokemones.json();
        console.log(pokemonesJSON);
        recorreEInsertaPokemones(pokemonesJSON.results);
    } 
    catch (error) {
        crearPaginaDeErro();
    }
};

function recorreEInsertaPokemones(pokemones){
    const papacorazon = document.getElementById('papacorazon');
    pokemones.forEach(pokemon => {
        const card = crearTarjetaDinamica(pokemon);
        papacorazon.appendChild(card);
    });

};


function crearTarjetaDinamica(pokemon) {
    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-3');
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = pokemon.name;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('btn', 'btn-primary');
    a.textContent = 'Go somewhere';

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

    return divCol;
};
function crearPaginaDeErro() {
    const divError = document.createElement('div');
    const papacorazon = document.getElementById('papacorazon');
    divError.textContent = 'Error al cargar los pokemones';
    papacorazon.appendChild(divError);
    
}