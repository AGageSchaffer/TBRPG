import CharacterHolder from './CharacterHolder';
import PartyHolder from './PartyHolder';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user';
import { CharactersContext } from '../context/characters';
import { CampaignContext } from '../context/campaign';
import { DeleteContext } from '../context/delete';
import CharacterCreation from './CharacterCreation';
import { PartyContext } from '../context/party';
//import { BenchedCharsContext } from '../context/benchedChars';

function Hub ({/*user, setUser, characters, setCharactersbenchedChars, setBenchedChars*/}) {

    // const [characters, setCharacters] = useState();
    const [characters, setCharacters] = useContext(CharactersContext)
    const [party, setParty] = useContext(PartyContext)
    const [user, setUser] = useContext(UserContext)
    const [campaign, setCampaign] = useContext(CampaignContext)
    const [deleteChar, setDeleteChar] = useContext(DeleteContext)
    //const [benchedChars, setBenchedChars] = useContext(BenchedCharsContext)
    //const [benchedChars, setBenchedChars] = useState([])
    
    const logout = () => {
        fetch('/logout', {method: "DELETE"})
      }

    function handleOnClick () {
        logout()
        setUser(null)
    }

    function handleDeleteChar() {
        setDeleteChar(!deleteChar)
    }

    // const onPartyAdd = (char) => {
    //     //setBenchedChars(benchedChars.filter(character => character.id !== char.id))
    //     setParty([...party, char])
    // }

    // const onPartyRemove = (char) => {
    //     setParty(party.filter(character => character.id !== char.id))
    //     //setBenchedChars([...benchedChars, char])
    // }

    // const onBattleClick = () => {
    //     fetch(`/battles/${battle.id}`, {method: "DELETE"}).then(navigate('/'))
    // }
    const benchedChars = characters?.filter(char => char.party_id === 0)
    //const party = characters?.filter(char => char.party_id === user.id)

    return (
        <div id='hub-bg'>
            <button onClick={handleOnClick}>Logout</button>
            <Link to='/character-creator'><button>Create Character</button></Link>
            <div>{user.username.toUpperCase()}
            <div id='hub-organizer'>
                <div id='character-list'>
                    <h1>Characters</h1>
                    <CharacterHolder /*onPartyAdd={onPartyAdd}*/ benchedChars={benchedChars}/>
                    <button onClick={handleDeleteChar}>Delete Characters</button>
                </div>
                <div id='center-hub'>
                    <h1>Bonfire</h1>
                    <Link to='/battle'>
                        <button >Battle</button>
                    </Link>
                </div>
                <div id='party-list'>
                    <h1>Party {party.length}/4</h1>
                    <PartyHolder /*onPartyRemove={onPartyRemove} party={party}*/characters={characters} setCharacters={setCharacters} />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Hub;