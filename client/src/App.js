import React, { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';
import Hub from './components/Hub'
import { NavLink, Routes } from "react-router-dom"
import CharacterCreation from "./components/CharacterCreation";

function App({ Route }) {
  const [user, setUser] = useState(null);
  
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
      <Route path='/' element={!user ? <Login/> : <Hub user={user} setUser={setUser}/>}/>
      <Route path="/character-creator" element={<CharacterCreation />}/>
    </Routes>
  );
}

export default App;
