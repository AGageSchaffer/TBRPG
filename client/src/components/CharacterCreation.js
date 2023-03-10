import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../context/user"
import { CharactersContext } from "../context/characters"

function CharacterCreation({ /*user, characters, setCharacters benchedChars, setBenchedChars*/}) {
    const [user, _] = useContext(UserContext)
    const [characters, setCharacters] = useContext(CharactersContext)
    //const [benchedChars, setBenchedChars] = useContext(BenchedCharsContext)
    const [roles, setRoles] = useState([]);
    
    useEffect(() => {
        fetch('/roles')
        .then(resp => resp.json())
        .then(resp => setRoles(resp))
    }, [])
    const initialFormData = {
        name: "",
        level: 1,
        experience: 0,
        race: "Human",
        party_id: 0,
        role_id: 1,
        item_id: "",
        sprite_id: 1,
        targetable: true,
        initiative: 0,
        user_id: user.id,
        // health_points: 0,
        // physical: 0,
        // magic: 0,
        // faith: 0,
        // mana: 0,
        // mana_regen: 0
    }
    const [formData, setFormData] = useState(initialFormData)
    const sprite = "char-sprite" + formData.sprite_id
    
    
    const navigate = useNavigate()
    
    // const listedRoles = roles?.map(role => {
    //     return (
    //         <option key={role.id} value={role.id}>{role.name}</option>
    //     );
    // })
    
    const filteredRole = roles?.filter(role => role.id === parseInt(formData.role_id))
     
    const roleStats = filteredRole?.map(role => role.stats.map(stat => { if(stat.id === role.id)
        return(
            <div key={stat.id}>
            <p>Health: {stat.health_points}</p>
                {stat.physical > 0 ? <p>Physical: {stat.physical}</p> : null}
                {stat.magic > 0 ? <p>Magic: {stat.magic}</p> : null}
                {stat.faith > 0 ? <p>Faith: {stat.faith}</p> : null}
                {stat.mana > 0 ? <p>Mana: {stat.mana}</p> : null}
                {stat.mana_regen > 0 ? <p>Mana Regen: {stat.mana_regen}</p> : null}
            </div>
        )
    }))


    // const role = roles?.map(role => role.id === parseInt(formData.role_id) ? role.name : null)

    const role = roles?.map(role => role.id === formData.role_id ? <h3>{role.name}</h3> : null)

    // const listedStats = roles?.map(role => {
    //     role.stats.map(stat => {
    //         return console.log(stat)
    //     })
    //     ;
    // })

    function handleSubmit(e) {
        e.preventDefault()
        // const stats = filteredRole?.map(role => role.stats.map(stat => { if(stat.id === role.id)
        //     return {
        //         health_points: stat.health_points,
        //         physical: stat.physical,
        //         magic: stat.magic,
        //         faith: stat.faith,
        //         mana: stat.mana,
        //         mana_regen: stat.mana_regen
        //     }
        // }))
        // const justStat = stats.includes({})
        // // const newCharacter = {
        // //     ...formData,
            
        // // }
        // console.log(justStat)
        //console.log(benchedChars)
        // setBenchedChars([...benchedChars, formData])
        fetch("/characters", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then(resp => resp.json())
        //   .then(c => setCharacters([...characters, c]))
        .then(resp => console.log(resp))
        //   .then(resp => resp.json())
        //   .then(resp => setBenchedChars([...benchedChars, resp]))
        setFormData(initialFormData)
        navigate('/')
    }

    function handleClick(e) {
        if (e.target.name === "right" && formData.role_id === 1 && formData.sprite_id < 10)
            setFormData({...formData, sprite_id: formData.sprite_id + 1})
        else if (e.target.name === "right" && formData.role_id === 2 && formData.sprite_id < 20)
            setFormData({...formData, sprite_id: formData.sprite_id + 1})
        else if (e.target.name === "right" && formData.role_id === 3 && formData.sprite_id < 30)
            setFormData({...formData, sprite_id: formData.sprite_id + 1})
        else if (e.target.name === "right" && formData.role_id === 4 && formData.sprite_id < 40)
            setFormData({...formData, sprite_id: formData.sprite_id + 1})
        else if (e.target.name === "left" && formData.role_id === 1 && formData.sprite_id > 1)
            setFormData({...formData, sprite_id: formData.sprite_id - 1})
        else if (e.target.name === "left" && formData.role_id === 2 && formData.sprite_id > 11)
            setFormData({...formData, sprite_id: formData.sprite_id - 1})
        else if (e.target.name === "left" && formData.role_id === 3 && formData.sprite_id > 21)
            setFormData({...formData, sprite_id: formData.sprite_id - 1})
        else if (e.target.name === "left" && formData.role_id === 4 && formData.sprite_id > 31)
            setFormData({...formData, sprite_id: formData.sprite_id - 1})
    }

    function handleClickRole(e) {
        console.log(formData)
        if (e.target.name === "right" && formData.role_id < 4 && formData.role_id === 1) 
            setFormData({...formData, role_id: formData.role_id + 1, sprite_id: 11 })
        else if (e.target.name === "right" && formData.role_id < 4 && formData.role_id === 2) 
            setFormData({...formData, role_id: formData.role_id + 1, sprite_id: 21 })
        else if (e.target.name === "right" && formData.role_id < 4 && formData.role_id === 3) 
            setFormData({...formData, role_id: formData.role_id + 1, sprite_id: 31 })
        else if (e.target.name === "left" && formData.role_id > 1 && formData.role_id === 4)
            setFormData({...formData, role_id: formData.role_id - 1, sprite_id: 21})
        else if (e.target.name === "left" && formData.role_id > 1 && formData.role_id === 3)
            setFormData({...formData, role_id: formData.role_id - 1, sprite_id: 11})
        else if (e.target.name === "left" && formData.role_id > 1 && formData.role_id === 2)
            setFormData({...formData, role_id: formData.role_id - 1, sprite_id: 1})
    }
    
    
    

    return (
        <div id="charCreateBG">
            <div id="charCreate" className="charCreate">
                <div id="header-bg"></div>
                <div id="create-form">
                    <form onSubmit={(e) => handleSubmit(e)} > 
                        <div className="create-form">
                            <div className="name-bg"></div>
                            <input type="text" id="charName" name="name" value={formData.name} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}></input>
                            <div className="model-bg"></div>
                            <div className="sprite-holder"><a id="left-arrow" name="left" onClick={(e) => handleClick(e)}> </a><p id={sprite}></p><a id="right-arrow" name="right" onClick={(e) => handleClick(e)}> </a></div>
                            <div className="create-role"></div>
                            <div className="sprite-holder"><a id="left-arrow" name="left"  onClick={(e) => handleClickRole(e)}> </a>{role}<a id="right-arrow" name="right" onClick={(e) => handleClickRole(e)}> </a></div>
                            <div className="create-attributes"></div>
                            {roleStats}
                            <button type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
                <div className="form-buttons" >
                    <Link to='/'><button>Back</button></Link>
                </div>
        </div>
    )
}

export default CharacterCreation