import React, { useEffect, useState, useContext } from "react";
import './App.css';
import Login from './components/Login';
import Hub from './components/Hub'
import Battlefield from "./components/Battlefield";
import { NavLink, Routes } from "react-router-dom"
import CharacterCreation from "./components/CharacterCreation";
import { UserContext } from './context/user'

function App({ Route }) {
  // const [user, setUser] = useState(null);
  // const [characters, setCharacters] = useState();
  const [user, setUser] = useContext(UserContext);
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  if (!user) return <Login setUser={setUser} />

  return (
    <Routes>
        <Route path='/' element={!user ? <Login/> : <Hub /*user={user} setUser={setUser} characters={characters} setCharacters={setCharacters}*//>}/>
        <Route path="/character-creator" element={<CharacterCreation /*user={user} characters={characters} setCharacters={setCharacters}*/ />}/>
        <Route path='/battle' element={<Battlefield/>}/>
    </Routes>
  );
}

export default App;
