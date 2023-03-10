import { createContext, useState } from 'react';

const PartyContext = createContext()

function PartyProvider({children}){
    const [party, setParty] = useState([])

    const context = [party, setParty]

    return (
        <PartyContext.Provider value={context}>
            {children}
        </PartyContext.Provider>
    )
}

export { PartyContext, PartyProvider }