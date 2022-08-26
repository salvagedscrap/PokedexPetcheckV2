const poke_container= document.getElementById('poke-container')
const pokemon_count = 150

const colours ={
    fire:'#fddfdf',
    grass:'#defde0',
    electric:'#fcf7de',
    water:'#def3fd',
    ground:'#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison: '#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#f5f5f5',
    fighting:'#e6e9d4',
    normal:'#f5f5f5'
}

const main_types= Object.keys(colours)

const fetchPoke= async()=>{
    for(let i = 1; i<=pokemon_count;i++){
     await  getPoke(i)
    }
}
const getPoke= async(id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data= await res.json()
    createpokemoncard(data)
    //console.log(data);
}
const createpokemoncard= (pokemon=>{

    const pokeEl = document.createElement('div')
    pokeEl.classList.add('pokemon', pokemon.id )
    const name= pokemon.name[0].toUpperCase() +pokemon.name.slice(1)

    const id= pokemon.id.toString().padStart(3,'0')
    
    const poke_types = pokemon.types.map(type => type.type.name)
    const type= main_types.find(type=> poke_types.indexOf(type) >-1)

    const color = colours[type]
    pokeEl.style.backgroundColor=color

    const pokemonInnerHtml=`
    
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="">
    </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name"> ${name} </h3>
        <small class="type"> Type: <span> ${type}</   span></small>
    </div>

    `
    pokeEl.innerHTML=pokemonInnerHtml
    poke_container.appendChild(pokeEl)

})
fetchPoke()




document.addEventListener('click', function (event) {

	if (event.target.matches('.pokemon')) {
        
         event.target.classList.toggle('checkpokemon')
        

        
       

		
	} else if (event.target.matches('.save')) {
		// Save the form content...
	}

});

