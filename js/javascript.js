window.addEventListener('DOMContentLoaded', (event) => {
    
    // metodo para obtener los datos
    const getListPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';


        const result = await fetch(url);
        const listResult = await result.json();
        console.log(listResult.results);
        createPokemonItem(listResult.results);

    }




/*
    const createPokemonItem = (results) => {
        console.log('createPokemonItem =>', results);
        console.log('createPokemonItem name=>', results.name);
        const poke_list = document.querySelector('#poke_list');

        //results.forEach(element => {
          //  console.log('foreach =>', element.name);
            const item = document.createElement('div');
        item.classList.add('pokemon_card');
        
        
        var name = results.name;
	    let card_option2_content = `
        <div class="card opacity-75" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">+ INFO</a>
        </div>
      </div>
	`;
	poke_list.innerHTML = card_option2_content;
    poke_list.appendChild(item);



        
       // });
        
    
    
    }

    getListPokemon();











*/








    
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
