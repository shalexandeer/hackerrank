const fetchKantoPokemon = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/1"
    fetch(url)
    .then(res => res.json())
    .then(function(pokeData){
        console.log(pokeData);
    })
}
fetchKantoPokemon()
console.log('connect');
const renderPokemon = () => {
    
}