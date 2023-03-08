function CharacterTile({character, onPartyChange}) {

    const handleClick = () => {
        onPartyChange(character)
    }

    return (
        <div id='character-tile' onClick={() => handleClick()}>
            <h2>{character.name} - {character.race}</h2>
            <h3>Level {character.level} {character.role.name}</h3>
        </div>
    )
}

export default CharacterTile;