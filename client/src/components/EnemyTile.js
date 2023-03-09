import React from 'react';
import OrcSprite1 from '../images/OrcSprite1.png'
import OrcSprite2 from '../images/OrcSprite2.png'
import OrcSprite3 from '../images/OrcSprite3.png'


function EnemyTile({enemy}) {
    
    let sprite;

    switch(enemy.sprite_id){
        case 1:
            sprite = OrcSprite1;
            break;
        case 2:
            sprite = OrcSprite2
            break;
        case 3:
            sprite = OrcSprite3
            break;
    }

    return(
        <div>
            <h3>{enemy.name}</h3>
            <img src={sprite}></img>
        </div>
    )
}

export default EnemyTile;