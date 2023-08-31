import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonSearch, setPokemonSearch] = useState("")
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(pokemons => setPokemons(pokemons))
  }, [])
  
const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase())
  
})

const addNewPokemon = (event) => {
  event.preventDefault()
  const newPokemon = {
    name: event.target.name.value,
    hp: event.target.hp.value,
    sprites: {
      front: event.target.frontUrl.value,
      back: event.target.backUrl.value
    }
  }
 fetch('http://localhost:3001/pokemon', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newPokemon)
  })
  .then(response => response.json())
  .then(data => setPokemons([...pokemons, data])) 
}
  


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search setPokemonSearch={setPokemonSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
