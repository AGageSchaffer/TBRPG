import React, { useState } from "react";
// import {Howl, Howler} from 'howler';
function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//   const sound = new Howl({
//     src: ['../audio/LoginClick.mp3'],
// })

// function handleOnClick() {
//     sound.play()
// }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    });
    
  }

  return (
    <div id="loginform">
    <form onSubmit={handleSubmit} >
      <h2 id="login-title">Login</h2>
      <div className="login-key-1">
        <h3 htmlFor="username">Username</h3>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    
      <div className="login-key-2">
        <h3 htmlFor="password">Password</h3>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-key-3">
        <button variant="fill" color="primary" type="submit" >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
    </div>
  );
}

export default LoginForm;
