import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CampaignContext } from '../context/campaign'
import { UserContext } from '../context/user';
import PlayerTile from './PlayerTile'
import EnemyTile from './EnemyTile'
import ActionMenu from './ActionMenu'
import { PartyContext } from '../context/party';
import { VictoryContext } from '../context/victory';
import VictoryMenu from './VictoryMenu';

function Battlefield() {

    const [user, setUser] = useContext(UserContext)
    const [campaign,_] = useContext(CampaignContext);
    const [battle, setBattle] = useState([])
    const [enemies, setEnemies] = useState([])
    const [party, setParty] = useContext(PartyContext)
    const [attacker, setAttacker] = useState(party[0])
    const [target, setTarget] = useState(enemies[0])
    const [victory, setVictory] = useContext(VictoryContext)

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
        .then(resp => {
            setBattle(resp)
            setEnemies(resp.enemies.filter(enemy => enemy.is_dead != true))
        })
    },[])

    const handleAttackerSelect = (char) => {
        setAttacker(char)
    }

    const onTargetSelect = (char) => {
        setTarget(char)
    }

    const enemiesSlain = enemies?.filter(enemy => enemy.is_dead == true)

    const onAttackSubmit = () => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                attacker: attacker.id,
                target: target.id,
                player_attacking: true,
                battle: battle.id
            }
            )
        }
        fetch('/turns', config)
        .then(resp => resp.json())
        .then(resp => {
            setParty(party?.map(char => char.id === resp.attacker.id ? resp.attacker : char))
            setEnemies(enemies?.map(enemy => enemy.id === resp.target.id ? resp.target : enemy))
        })
        
    }

    const playerParty = party?.map(character => {
        return (
            <PlayerTile key={character.id} character={character} attacker={attacker} setAttacker={handleAttackerSelect}/>
        )
    })

    const enemyParty = enemies?.filter(enemy => enemy.is_dead !== true).map(enemy => {
        return(
            <EnemyTile key={enemy.id} enemy={enemy} onTargetSelect={onTargetSelect}/>
        )
    })

    const handleBattleDelete = () => {
        fetch(`/battles/${battle.id}`, {method: "DELETE"}).then(navigate('/'))
    }

    // const handleBattleVictory = () => {
    //     fetch(`/battles/${battle.id}`, {method: "DELETE"}).then(navigate('/'))
    // }

    return (
        <div id='battlefield'>
            {/* <Link to='/'>
            </Link> */}
    {enemiesSlain.length < 4 ? 
    <div id='combatants'>
                <div id='enemy-party'>
                    {enemyParty}
                </div>
                <div id='center-field'>
                    <ActionMenu attacker={attacker} target={target} onAttackSubmit={onAttackSubmit}/>
                    <button id='back-to-hub'onClick={handleBattleDelete} className='button'>Back To Hub</button>
                </div>
                <div id='player-party'>
                    {playerParty}
                </div>
            </div> : <VictoryMenu handleBattleVictory={handleBattleDelete}/>}
            
        </div>
    )
}

export default Battlefield;