import { createContext, useState } from 'react';

const DeleteContext = createContext()

function DeleteProvider({children}){
    const [deleteChar, setDeleteChar] = useState(false)

    const context = [deleteChar, setDeleteChar]

    return (
        <DeleteContext.Provider value={context}>
            {children}
        </DeleteContext.Provider>
    )
}

export { DeleteContext, DeleteProvider }