const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
console.log(pokemons);
// const cura = (pokemon) => {
//     pokemon.vida = 100
// }

const cura = (pokemon) => {
    // pokemon.vida = 100
    return {...pokemon, vida:100}
}
console.log(pokemons);

const pokemonsVidaCheia = pokemons.map((pokemon)=>{ return cura(pokemon)})

console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter((pokemon)=> {return pokemon.tipo === "fogo"})

console.log(pokemonsDeFogo);