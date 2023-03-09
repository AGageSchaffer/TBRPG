import { createContext, useState } from 'react';

const CampaignContext = createContext()

function CampaignProvider({children}){
    const [campaign, setCampaign] = useState(1)

    const context = [campaign, setCampaign]

    return (
        <CampaignContext.Provider value={context}>
            {children}
        </CampaignContext.Provider>
    )
}

export { CampaignContext, CampaignProvider }