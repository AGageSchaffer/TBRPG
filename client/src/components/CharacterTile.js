import { useContext } from "react"
import { DeleteContext } from "../context/delete"
import { CharactersContext } from "../context/characters";
import { UserContext } from "../context/user";
// import { BenchedCharsContext } from "../context/benchedChars";

function CharacterTile({character, onPartyChange, party}) {

    const [deleteChar, _] = useContext(DeleteContext);
    const [user, setUser] = useContext(UserContext)
    const [characters, setCharacters] = useContext(CharactersContext)
    // const [benchedChars, setBenchedChars] = useContext(BenchedCharsContext)

    function removeCharacter() {
        fetch(`/characters/${character.id}`, {method: "DELETE"})
        setCharacters(characters.filter(char => char.id !== character.id))
    }


    const handleClick = () => {
        if(party.length === 4 && character.party_id !== user.id) {
            alert("Party Full")
        } else {

        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(character.party_id === 0 ? {party_id: user.id} : {party_id: 0})
        }
        fetch(`/characters/${character.id}`, config)
        .then(resp => resp.json())
        .then(resp => {
            onPartyChange(resp)
        })
    }
}
    const sprite = "char-sprite" + character.sprite_id
    return (
        <div>
            <div className='character-tile' id={sprite} onClick={() => handleClick()}>
                <h2>{character.name}</h2>
                <h3>Level {character.level} {/*character.role.name*/}</h3>
            </div>
            {deleteChar? <button onClick={() => removeCharacter()}>X</button> : null}
        </div>
    )
}

export default CharacterTile;