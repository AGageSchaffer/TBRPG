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

function Hub () {
    const [characters, setCharacters] = useContext(CharactersContext)
    const [party, setParty] = useContext(PartyContext)
    const [user, setUser] = useContext(UserContext)
    const [campaign, setCampaign] = useContext(CampaignContext)
    const [deleteChar, setDeleteChar] = useContext(DeleteContext)
    
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

    const benchedChars = characters?.filter(char => char.party_id === 0)

    return (
        <div id='hub-bg'>
                <div className='username-bg'>
                    <h2 className='username'>{user.username.toUpperCase()}</h2>
                </div>
            <div className='hub-buttons'>
                <Link to='/character-creator'><button className='button'>Create Character</button></Link>
                <button onClick={handleOnClick} className='button'>Logout</button>
            </div>
            <div id='hub-organizer'>
                <div id='character-list'>
                    <h1>Characters</h1>
                    <CharacterHolder benchedChars={benchedChars}/>
                    <button onClick={handleDeleteChar} className='button'>Delete Characters</button>
                </div>
                <div id='center-hub'>
                    <h1>Bonfire</h1>
                    <Link to='/battle'>
                        {party.length === 0 ? null : <button className='battle-button'>Battle</button>}
                    </Link>
                </div>
                <div id='party-list'>
                    <h1>Party {party.length}/4</h1>
                    <PartyHolder characters={characters} setCharacters={setCharacters} />
                </div>
            </div>
        </div>
    );
}

export default Hub;