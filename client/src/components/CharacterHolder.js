import React from 'react'
import CharacterTile from './CharacterTile'

function CharacterHolder({characters, onPartyAdd}) {

    const listedCharacters = characters?.map(character => {
        return(
            <CharacterTile key={character.id} character={character} onPartyChange={onPartyAdd}/>
        )
      })

    return (
        <div id='character-holder'>
            {listedCharacters}
        </div>
    );
}

export default CharacterHolder;