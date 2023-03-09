import React, { useEffect, useState, useContext } from "react";
import './App.css';
import Login from './components/Login';
import Hub from './components/Hub'
import Battlefield from "./components/Battlefield";
import { NavLink, Routes } from "react-router-dom"
import CharacterCreation from "./components/CharacterCreation";
import { UserContext } from './context/user'
import { CharactersProvider } from './context/characters'
import { EnemiesProvider} from './context/enemies'
import { CampaignContext } from './context/campaign'
import { CampaignProvider } from "./context/campaign";


function App({ Route }) {
  // const [user, setUser] = useState(null);
  // const [characters, setCharacters] = useState();
  const [user, setUser] = useContext(UserContext);
  const [_, setCampaign] = useContext(CampaignContext)
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    fetch('/campaigns')
    .then(resp => resp.json())
    .then(resp => setCampaign(resp.battle))
  }, []);

  if (!user) return <Login setUser={setUser} />

  return (
    <CampaignProvider>
      <CharactersProvider>
        <EnemiesProvider>
          <Routes>
            <Route path='/' element={!user ? <Login/> : <Hub/>}/>
            <Route path="/character-creator" element={<CharacterCreation/>}/>
            <Route path='/battle' element={<Battlefield/>}/>
          </Routes>
        </EnemiesProvider>
      </CharactersProvider>
      </CampaignProvider>
  );
}

export default App;
