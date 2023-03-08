import React from 'react';
import CharacterTile from './CharacterTile';

function PartyHolder({party, onPartyRemove}) {

    const listedParty = party?.map(character => {
        return(
            <CharacterTile key={character.id} character={character} onPartyChange={onPartyRemove}/>
        )
    })
 
    return (
        <div id='party-holder'>
            {listedParty}
        </div>
    );
}

export default PartyHolder;