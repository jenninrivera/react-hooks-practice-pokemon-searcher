import React from "react";

function Search({setPokemonSearch}) {
  return (
    <div  className="ui search">
      <div className="ui icon input">
        <input onChange={e => setPokemonSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
