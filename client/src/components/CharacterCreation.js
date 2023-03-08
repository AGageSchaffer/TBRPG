import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'

function CharacterCreation({ user, characters, setCharacters }) {

    const initialFormData = {
        name: "",
        role_id: "",
        sprite_id: "",
        user_id: user.id,
        level: 1,
        experience: 0,
        race: "Human",
        targetable: false
    }

    const [formData, setFormData] = useState(initialFormData)
    const [roles, setRoles] = useState();

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

    return (
        <div id="charCreateBG">
            <div id="charCreate" className="charCreate">
                <h1 className="header">Character Sheet</h1>
                <div id="create-form">
                    <form onSubmit={(e) => handleSubmit(e)} > 
                        <div className="create-form">
                            <h2>Name</h2>
                            <input type="text" id="charName" name="name" value={formData.name} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}></input>
                            <h2>Character Model</h2>
                            <select name="sprite_id" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <h3>Role</h3>
                            <select name="role_id" onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}>
                                <option>Select</option>
                                {listedRoles}
                            </select>
                            <h3>Attributes</h3>
                            <div></div>
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