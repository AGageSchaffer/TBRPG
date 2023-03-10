import React, { useEffect, useState } from 'react'
import CharacterTile from './CharacterTile'
import { useContext } from 'react'
import { CharactersContext } from '../context/characters'
import { PartyContext } from '../context/party'
//import { BenchedCharsContext } from '../context/benchedChars'

function CharacterHolder({/*onPartyAdd, party,*/ benchedChars}) {

    const [party, setParty] = useContext(PartyContext)
    const [characters, setCharacters] = useContext(CharactersContext)
    
    //const [benchedChars, _] = useContext(BenchedCharsContext)
    const onPartyAdd = (char) => {
        //setBenchedChars(benchedChars.filter(character => character.id !== char.id))
        const newCharArr = characters?.map(character => character.id === char.id ? char : character)
        setCharacters(newCharArr)
        setParty([...party, char])
    }

    //const benchedChars = characters.filter(char => char.party_id === 0)

    const listedCharacters = benchedChars?.map(character => {
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