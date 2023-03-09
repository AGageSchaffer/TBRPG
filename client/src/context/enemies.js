import { createContext, useState } from 'react';

const EnemiesContext = createContext()

function EnemiesProvider({children}){
    const [enemies, setEnemies] = useState([])

    const context = [enemies, setEnemies]

    return (
        <EnemiesContext.Provider value={context}>
            {children}
        </EnemiesContext.Provider>
    )
}

export { EnemiesContext, EnemiesProvider }