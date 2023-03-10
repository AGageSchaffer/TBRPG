import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom"
import { UserProvider } from './context/user'
import { CharactersProvider } from './context/characters'
import { EnemiesProvider} from './context/enemies'
import { CampaignProvider } from "./context/campaign";
import { DeleteProvider } from "./context/delete";
import { PartyProvider } from './context/party';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CampaignProvider>
        <CharactersProvider>
          <PartyProvider>
            <EnemiesProvider>
              < DeleteProvider>
                <App Route={Route}/>
              </DeleteProvider>
            </EnemiesProvider>
            </PartyProvider>
        </CharactersProvider>
      </CampaignProvider>
    </UserProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();