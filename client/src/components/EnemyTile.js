import React from 'react';
import OrcSprite1 from '../images/OrcSprite1.png'
import OrcSprite2 from '../images/OrcSprite2.png'
import OrcSprite3 from '../images/OrcSprite3.png'


function EnemyTile({enemy, onTargetSelect}) {

    const handleClick = () => {
        onTargetSelect(enemy)
    }
    
    let sprite;

    switch(enemy.sprite_id){
        case 1:
            sprite = OrcSprite1;
            break;
        case 2:
            sprite = OrcSprite3
            break;
        case 3:
            sprite = OrcSprite3
            break;
    }

    return(
        <div id='enemy-tile' onClick={handleClick}>
            <h3 style={{color: "red"}}>{enemy.name} - HP: {enemy.stat.health_points}/{enemy.stat.max_health}</h3>
            <img src={sprite} className='enemy-bf'></img>
        </div>
    )
}

export default EnemyTile;