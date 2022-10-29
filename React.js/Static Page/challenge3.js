const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const pokelist = pokemon.map((poke) => {
    const p = "<p>" + poke + "</p>";
    return p;
})
console.log(pokelist)