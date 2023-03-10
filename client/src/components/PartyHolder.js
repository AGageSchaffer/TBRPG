import React, { useContext } from 'react';
import { PartyContext } from '../context/party';
import CharacterTile from './CharacterTile';

function PartyHolder({/*party, onPartyRemove*/characters, setCharacters}) {

    const [party, setParty] = useContext(PartyContext)

    const onPartyRemove = (char) => {
        setParty(party.filter(character => character.id !== char.id))
        const newCharArr = characters?.map(character => character.id === char.id ? char : character)
        setCharacters(newCharArr)
        //setBenchedChars([...benchedChars, char])
    }

    const listedParty = party?.map(character => {
        return(
            <CharacterTile key={character.id} character={character} onPartyChange={onPartyRemove} party={party} setParty={setParty} />
        )
    })
 
    return (
        <div id='party-holder'>
            {listedParty}
        </div>
    );
}

export default PartyHolder;