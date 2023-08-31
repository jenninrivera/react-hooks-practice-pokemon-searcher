import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [display, setDisplay] = useState(true)
  function toggleSprite () {
    setDisplay(display => !display)
  }
  return (
    <Card>
      <div>
        <div className="image">
          {display ? (<img onClick={toggleSprite} src={pokemon.sprites.front} alt="oh no!" />) : (<img onClick={toggleSprite} src={pokemon.sprites.back} alt="oh no!" />) }
  
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
