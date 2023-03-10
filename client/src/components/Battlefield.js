import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CampaignContext } from '../context/campaign'
import { UserContext } from '../context/user';
import PlayerTile from './PlayerTile'
import EnemyTile from './EnemyTile'
import ActionMenu from './ActionMenu'
import { PartyContext } from '../context/party';

function Battlefield() {

    const [user, setUser] = useContext(UserContext)
    const [campaign,_] = useContext(CampaignContext);
    const [battle, setBattle] = useState([])
    const [party, setParty] = useContext(PartyContext)
    const [attacker, setAttacker] = useState(party[0])

    const navigate = useNavigate()

    useEffect(() => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                party_id: 1,
                enemy_party_id: 1
            })
        }
        fetch('/battles', config)
        .then(resp => resp.json())
        .then(resp => setBattle(resp))
    },[])

    const handleAttackerSelect = (char) => {
        setAttacker(char)
    }
    const playerParty = party?.map(character => {
        return (
            <PlayerTile key={character.id} character={character} setAttacker={handleAttackerSelect} attacker={attacker}/>
        )
    })

    const enemyParty = battle.enemies?.map(enemy => {
        return(
            <EnemyTile key={enemy.id} enemy={enemy}/>
        )
    })

    const handleBattleDelete = () => {
        fetch(`/battles/${battle.id}`, {method: "DELETE"}).then(navigate('/'))
        navigate('/')
    }

    

    return (
        <div id='battlefield'>
            {/* <Link to='/'>
            </Link> */}
            <div id='combatants'>
                <div id='enemy-party'>
                    {enemyParty}
                </div>
                <ActionMenu attacker={attacker}/>
                <div id='player-party'>
                    {playerParty}
                </div>
            </div>
            <button id='back-to-hub'onClick={handleBattleDelete}>Back To Hub</button>

        </div>
    )
}

export default Battlefield;