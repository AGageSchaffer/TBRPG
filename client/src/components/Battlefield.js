import React from 'react';
import { Link } from 'react-router-dom'
function Battlefield() {
    return (
        <div>
            <h1>Battlefield</h1>
            <Link to='/'>
                <button>Back To Hub</button>
            </Link>
        </div>
    )
}

export default Battlefield;