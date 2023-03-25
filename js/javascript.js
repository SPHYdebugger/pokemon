window.addEventListener('DOMContentLoaded', (event) => {
    
    // metodo para obtener los datos
    const getListPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';


        const result = await fetch(url);
        const listResult = await result.json();
        console.log(listResult.results);
        createPokemonItem(listResult.results);

    }
    // metodo para el HTML
    const createPokemonItem = (results) => {
        console.log('createPokemonItem =>', results);
        console.log('createPokemonItem name=>', results.name);
        const poke_list = document.querySelector('#poke_list');

        results.forEach(element => {
            console.log('foreach =>', element.name);
            const item = document.createElement('p');
        item.classList.add('list-pokemon_item');
        poke_list.appendChild(item);

        item.innerText = element.name;
        });
        
    
    
    }

    getListPokemon();



});