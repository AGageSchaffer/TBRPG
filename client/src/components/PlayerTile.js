//#region Sprites
import React from 'react'
import Sprite1 from '../images/charactersprites/Sprite1.png'
import Sprite2 from '../images/charactersprites/Sprite2.png'
import Sprite3 from '../images/charactersprites/Sprite3.png'
import Sprite4 from '../images/charactersprites/Sprite4.png'
import Sprite5 from '../images/charactersprites/Sprite5.png'
import Sprite6 from '../images/charactersprites/Sprite6.png'
import Sprite7 from '../images/charactersprites/Sprite7.png'
import Sprite8 from '../images/charactersprites/Sprite8.png'
import Sprite9 from '../images/charactersprites/Sprite9.png'
import Sprite10 from '../images/charactersprites/Sprite10.png'
import Sprite11 from '../images/charactersprites/Sprite11.png'
import Sprite12 from '../images/charactersprites/Sprite12.png'
import Sprite13 from '../images/charactersprites/Sprite13.png'
import Sprite14 from '../images/charactersprites/Sprite14.png'
import Sprite15 from '../images/charactersprites/Sprite15.png'
import Sprite16 from '../images/charactersprites/Sprite16.png'
import Sprite17 from '../images/charactersprites/Sprite17.png'
import Sprite18 from '../images/charactersprites/Sprite18.png'
import Sprite19 from '../images/charactersprites/Sprite19.png'
import Sprite20 from '../images/charactersprites/Sprite20.png'
import Sprite21 from '../images/charactersprites/Sprite21.png'
import Sprite22 from '../images/charactersprites/Sprite22.png'
import Sprite23 from '../images/charactersprites/Sprite23.png'
import Sprite24 from '../images/charactersprites/Sprite24.png'
import Sprite25 from '../images/charactersprites/Sprite25.png'
import Sprite26 from '../images/charactersprites/Sprite26.png'
import Sprite27 from '../images/charactersprites/Sprite27.png'
import Sprite28 from '../images/charactersprites/Sprite28.png'
import Sprite29 from '../images/charactersprites/Sprite29.png'
import Sprite30 from '../images/charactersprites/Sprite30.png'
import Sprite31 from '../images/charactersprites/Sprite31.png'
import Sprite32 from '../images/charactersprites/Sprite32.png'
import Sprite33 from '../images/charactersprites/Sprite33.png'
import Sprite34 from '../images/charactersprites/Sprite34.png'
import Sprite35 from '../images/charactersprites/Sprite35.png'
import Sprite36 from '../images/charactersprites/Sprite36.png'
import Sprite37 from '../images/charactersprites/Sprite37.png'
import Sprite38 from '../images/charactersprites/Sprite38.png'
import Sprite39 from '../images/charactersprites/Sprite39.png'
import Sprite40 from '../images/charactersprites/Sprite40.png'
//#endregion

function PlayerTile({character, setAttacker, attacker}) {
    let sprite;
//#region Switch Statements
    switch(character.sprite_id){
        case 1:
            sprite = Sprite1;
            break;
        case 2: 
            sprite = Sprite2;
            break;
        case 3:
            sprite = Sprite3;
            break;
        case 4:
            sprite = Sprite4;
            break;
        case 5:
            sprite = Sprite5;
            break;
        case 6:
            sprite = Sprite6;
            break;
        case 7: 
            sprite = Sprite7;
            break;
        case 8:
            sprite = Sprite8;
            break;
        case 9:
            sprite = Sprite9;
            break;
        case 10:
            sprite = Sprite10;
            break;
        case 11:
            sprite = Sprite11;
            break;
        case 12: 
            sprite = Sprite12;
            break;
        case 13:
            sprite = Sprite13;
            break;
        case 14:
            sprite = Sprite14;
            break;
        case 15:
            sprite = Sprite15;
            break;
        case 16:
            sprite = Sprite16;
            break;
        case 17: 
            sprite = Sprite17;
            break;
        case 18:
            sprite = Sprite18;
            break;
        case 19:
            sprite = Sprite19;
            break;
        case 20:
            sprite = Sprite20;
            break;
        case 21:
            sprite = Sprite21;
            break;
        case 22: 
            sprite = Sprite22;
            break;
        case 23:
            sprite = Sprite23;
            break;
        case 24:
            sprite = Sprite24;
            break;
        case 25:
            sprite = Sprite25;
            break;
        case 26:
            sprite = Sprite26;
            break;
        case 27: 
            sprite = Sprite27;
            break;
        case 28:
            sprite = Sprite28;
            break;
        case 29:
            sprite = Sprite29;
            break;
        case 30:
            sprite = Sprite30;
            break;
        case 31:
            sprite = Sprite31;
            break;
        case 32: 
            sprite = Sprite32;
            break;
        case 33:
            sprite = Sprite33;
            break;
        case 34:
            sprite = Sprite34;
            break;
        case 35:
            sprite = Sprite35;
            break;
        case 36:
            sprite = Sprite36;
            break;
        case 37: 
            sprite = Sprite37;
            break;
        case 38:
            sprite = Sprite38;
            break;
        case 39:
            sprite = Sprite39;
            break;
        case 40:
            sprite = Sprite40;
            break;
    }
//#endregion
    let idTag;
    if(attacker){
        idTag = attacker.id
    }
    else {
        idTag = 0
    }
    return(
        <div id={idTag === character.id ? 'selected-tile' : ''} onClick={() => setAttacker(character)}>
            <h3>{character.name} - HP: {character.stat.health_points}/{character.stat.max_health}</h3>
            <img src={sprite}/>
        </div>
    )
}

export default PlayerTile;