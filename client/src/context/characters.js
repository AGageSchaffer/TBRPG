import { createContext, useState } from 'react';

const CharactersContext = createContext()

function CharactersProvider({children}){
    const [characters, setCharacters] = useState([])

    const context = [characters, setCharacters]

    return (
        <CharactersContext.Provider value={context}>
            {children}
        </CharactersContext.Provider>
    )
}

export { CharactersContext, CharactersProvider }