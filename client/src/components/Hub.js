import CharacterHolder from './CharacterHolder';
import PartyHolder from './PartyHolder';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user';
import { CharactersContext } from '../context/characters';
// import { CampaignContext } from '../context/campaign';

function Hub ({/*user, setUser, characters, setCharacters*/}) {

    // const [characters, setCharacters] = useState();
    const [party, setParty] = useState([]);

    const [_, setCharacters] = useContext(CharactersContext)
    const [user, setUser] = useContext(UserContext)
    // const [campaign, setCampaign] = useContext(CampaignContext)

    const [benchedChars, setBenchedChars] = useState([]);

    useEffect(() => {
        fetch('/characters')
        .then(resp => resp.json())
        .then((resp) => {
            setCharacters(resp)
            setBenchedChars(resp.filter(character => character.party_id !== 1))
            setParty(resp.filter(character => character.party_id === 1))
        })
        // fetch('/campaigns')
        // .then(resp => resp.json())
        // .then(resp => setCampaign(resp.battle))
    },[])
    
    const logout = () => {
        fetch('/logout', {method: "DELETE"})
      }

    function handleOnClick () {
        logout()
        setUser(null)
    }

    function handleBattleClick() {
        setCharacters(party)
    }

    const onPartyAdd = (char) => {
        setBenchedChars(benchedChars.filter(character => character.id !== char.id))
        setParty([...party, char])
    }

    const onPartyRemove = (char) => {
        setParty(party.filter(character => character.id !== char.id))
        setBenchedChars([...benchedChars, char])
    }

    return (
        <div id='hub-bg'>
            <button onClick={handleOnClick}>Logout</button>
            <Link to='/character-creator'><button>Create Character</button></Link>
            <div>{user.username.toUpperCase()}
            <div id='hub-organizer'>
                <div id='character-list'>
                    <h1>Characters</h1>
                    <CharacterHolder characters={benchedChars} onPartyAdd={onPartyAdd} party={party}/>
                </div>
                <div id='center-hub'>
                    <h1>Bonfire</h1>
                    <Link to='/battle'>
                        <button onClick={handleBattleClick}>Battle</button>
                    </Link>
                </div>
                <div id='party-list'>
                    <h1>Party {party.length}/4</h1>
                    <PartyHolder party={party} onPartyRemove={onPartyRemove}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Hub;