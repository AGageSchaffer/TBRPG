import React from 'react'
import CharacterTile from './CharacterTile'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { CharactersContext } from '../context/characters'

function CharacterHolder({/*characters, */onPartyAdd, party}) {

    const [characters, _] = useContext(CharactersContext)

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