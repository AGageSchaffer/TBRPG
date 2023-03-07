import React, { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const logout = () => {
    fetch('/logout', {method: "DELETE"})
  }
  function handleOnClick () {
    logout()
    setUser(null)
  }

  if (!user) return <Login setUser={setUser} />

  return (
    <div className="App">
      <p>{user.username}</p>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
}

export default App;
