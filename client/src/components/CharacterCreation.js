import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../context/user"
import { CharactersContext } from "../context/characters"

function CharacterCreation({ /*user, characters, setCharacters*/ }) {
    const [user, _] = useContext(UserContext)
    const [characters, setCharacters] = useContext(CharactersContext)

    const initialFormData = {
        name: "",
        role_id: "",
        sprite_id: 1,
        user_id: user.id,
        level: 1,
        experience: 0,
        race: "Human",
        targetable: false
    }
    const [formData, setFormData] = useState(initialFormData)
    const [roles, setRoles] = useState();
    const [role, setRole] = useState()
    const sprite = "sprite" + formData.sprite_id

    useEffect(() => {
        fetch('/roles')
        .then(resp => resp.json())
        .then(resp => setRoles(resp))
    }, [])

    const navigate = useNavigate()

    const listedRoles = roles?.map(role => {
        return (
            <option key={role.id} value={role.id}>{role.name}</option>
        );
    })

    // const filteredRole = roles?.filter(role => role_id === formData.role_id)

    const listedStats = roles?.map(role => {
        role.stats.map(stat => {
            return console.log(stat)
        })
        ;
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/characters", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((r) => {
            
            if (r.ok) {
              r.json().then((c) => setCharacters([...characters, c]))
            }
          })
        setFormData(initialFormData)
        navigate('/')
    }

    function handleClick(e) {
        if (e.target.name === "right" && formData.sprite_id < 4)
        setFormData({...formData, sprite_id: formData.sprite_id + 1})
        else if (e.target.name === "left" && formData.sprite_id > 1)
        setFormData({...formData, sprite_id: formData.sprite_id - 1})
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
                            <select name="role_id" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                <option>Select</option>
                                {listedRoles}
                            </select>
                            <div className="create-attributes"></div>
                            {listedStats}
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