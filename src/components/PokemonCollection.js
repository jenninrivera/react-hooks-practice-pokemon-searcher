import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, addNewPokemon}) {
  
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
     {pokemons.map(pokemon => {return <PokemonCard key={pokemon.id} pokemon={pokemon} addNewPokemon={addNewPokemon} />})}
    </Card.Group>
  );
}

export default PokemonCollection;
