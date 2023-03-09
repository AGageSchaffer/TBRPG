import React from 'react';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CharactersContext } from '../context/characters'
import { EnemiesContext } from '../context/enemies' 
import { CampaignContext } from '../context/campaign'
import PlayerTile from './PlayerTile'
import EnemyTile from './EnemyTile'

function Battlefield() {

    const [characters, setCharacters] = useContext(CharactersContext);
    const [enemies, setEnemies] = useContext(EnemiesContext)
    const [campaign,_] = useContext(CampaignContext)

    useEffect(() => {
        fetch('/characters')
        .then(resp => resp.json())
        .then(resp => setCharacters(resp.filter(character => character.party_id === 1)))
        fetch('/enemies')
        .then(resp => resp.json())
        .then(resp => {
            setEnemies(resp.filter(enemy => enemy.enemy_party_id === campaign))
        })
    },[])

    const playerParty = characters?.map(character => {
        return (
            <PlayerTile key={character.id} character={character}/>
        )
    })

    const enemyParty = enemies?.map(enemy => {
        return(
            <EnemyTile key={enemy.id} enemy={enemy}/>
        )
    })
    

    return (
        <div id='battlefield'>
            <Link to='/'>
                <button>Back To Hub</button>
            </Link>
            <div id='combatants'>
                <div id='enemy-party'>
                    {enemyParty}
                </div>
                <div id='player-party'>
                    {playerParty}
                </div>
            </div>

        </div>
    )
}

export default Battlefield;