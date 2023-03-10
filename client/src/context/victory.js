import { createContext, useState } from 'react';

const VictoryContext = createContext()

function VictoryProvider({children}){
    const [victory, setVictory] = useState(false)

    const context = [victory, setVictory]

    return (
        <VictoryContext.Provider value={context}>
            {children}
        </VictoryContext.Provider>
    )
}

export { VictoryContext, VictoryProvider }