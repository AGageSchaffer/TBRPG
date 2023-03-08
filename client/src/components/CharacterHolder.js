import React from 'react'
import CharacterTile from './CharacterTile'

function CharacterHolder({characters, onPartyAdd, party}) {

    const listedCharacters = characters?.map(character => {
        return(
            <CharacterTile key={character.id} character={character} onPartyChange={onPartyAdd} party={party}/>
        )
      })

    return (
        <div id='character-holder'>
            {listedCharacters}
        </div>
    );
}

export default CharacterHolder;