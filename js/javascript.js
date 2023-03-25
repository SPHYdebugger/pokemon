window.addEventListener('DOMContentLoaded', (event) => {
    
    // metodo para obtener los datos
    const getListPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';


        const result = await fetch(url);
        const listResult = await result.json();
        console.log(listResult.results);

    }
    // metodo para el HTML
    const createPokemonItem = () => {
    
    
    
    }

    getListPokemon();



});