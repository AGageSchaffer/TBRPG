function CharacterTile({character, onPartyChange, party}) {

    const handleClick = () => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(character.party_id === 0 ? {party_id: 1} : {party_id: 0})
        }
        fetch(`/characters/${character.id}`, config)
        .then(resp => resp.json())
        .then(resp => onPartyChange(resp))
    }

    return (
        <div id='character-tile' onClick={() => handleClick()}>
            <h2>{character.name} - {character.race}</h2>
            <h3>Level {character.level} {character.role.name}</h3>
        </div>
    )
}

export default CharacterTile;