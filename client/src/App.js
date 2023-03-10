import React, { useEffect, useContext, useState } from "react";
import './App.css';
import Login from './components/Login';
import Hub from './components/Hub'
import Battlefield from "./components/Battlefield";
import { Routes } from "react-router-dom"
import CharacterCreation from "./components/CharacterCreation";
import { UserContext } from './context/user'
import { CampaignContext } from './context/campaign'
import { CharactersContext } from './context/characters';
import { PartyContext } from "./context/party";

function App({ Route }) {
  const [characters, setCharacters] = useContext(CharactersContext);
  const [user, setUser] = useContext(UserContext);
  const [_, setCampaign] = useContext(CampaignContext)
  const [party, setParty] = useContext(PartyContext)
  
  useEffect(() => {
    // auto-login
    if(!user) {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }
  },[]);

  useEffect(() => {
    if(user){
      fetch('/characters')
        .then(resp => resp.json())
        .then(resp => {
            setCharacters(resp)
        })
        // .then(resp => resp.json())
        // .then(resp => console.log(resp))
        
        fetch('/campaigns')
        .then(resp => resp.json())
        .then(resp => setCampaign(resp))

        fetch('/parties')
        .then(resp => resp.json())
        .then(resp => setParty(resp))
    }
  },[user])

  if (!user) return <Login setUser={setUser} />

  

  return (
          <Routes>
            <Route path='/' element={!user ? <Login/> : <Hub /*benchedChars={benchedChars} setBenchedChars={setBenchedChars}*/ />}/>
            <Route path="/character-creator" element={<CharacterCreation /*setBenchedChars={setBenchedChars}*/ />}/>
            <Route path='/battle' element={<Battlefield/>}/>
          </Routes>
  );
}

export default App;
