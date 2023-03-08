import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function CharacterCreation() {

    const [roles, setRoles] = useState();

    useEffect(() => {
        fetch('/roles')
        .then(resp => resp.json())
        .then(resp => setRoles(resp))
    }, [])

    const listedRoles = roles?.map(role => {
        return (
            <option key={role.id}>{role.name}</option>
        );
    })

    return (
        <div id="charCreateBG">
            <div id="charCreate" className="charCreate">
                <h1 className="header">Character Sheet</h1>
                <div id="create-form">
                    <form>
                        <div className="create-form">
                            <h2>Name</h2>
                            <input type="text" id="charName" name="charName"></input>
                            <h2>Character Model</h2>
                            <select>
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <h3>Role</h3>
                            <select>
                                <option>Select</option>
                                {listedRoles}
                            </select>
                            <h3>Attributes</h3>
                        </div>
                    </form>
                </div>
            </div>
                <div className="form-buttons">
                    <Link to='/'><button>Back</button></Link>
                    <button type="submit">Create</button>
                </div>
        </div>
    )
}

export default CharacterCreation