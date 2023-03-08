import CharacterHolder from './CharacterHolder';
import PartyHolder from './PartyHolder';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user';
import { CharactersContext } from '../context/characters';

function Hub ({/*user, setUser, characters, setCharacters*/}) {

    // const [characters, setCharacters] = useState();
    const [party, setParty] = useState([]);

    const [characters, setCharacters] = useContext(CharactersContext)
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        fetch('/characters')
        .then(resp => resp.json())
        .then((resp) => {
            setCharacters(resp.filter(character => character.party_id !== 1))
            setParty(resp.filter(character => character.party_id === 1))
        })
    },[])
    
    const logout = () => {
        fetch('/logout', {method: "DELETE"})
      }
      function handleOnClick () {
        logout()
        setUser(null)
      }

    const onPartyAdd = (char) => {
        setCharacters(characters.filter(character => character.id !== char.id))
        setParty([...party, char])
    }

    const onPartyRemove = (char) => {
        setParty(party.filter(character => character.id !== char.id))
        setCharacters([...characters, char])
    }

    return (
        <div id='hub-bg'>
            <button onClick={handleOnClick}>Logout</button>
            <Link to='/character-creator'><button>Create Character</button></Link>
            <div>{user.username.toUpperCase()}
            <div id='hub-organizer'>
                <div id='character-list'>
                    <h1>Characters</h1>
                    <CharacterHolder characters={characters} onPartyAdd={onPartyAdd} party={party}/>
                </div>
                <div id='center-hub'>
                    <h1>Bonfire</h1>
                    <Link to='/battle'>
                        <button>Battle</button>
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