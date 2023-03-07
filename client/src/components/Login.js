import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)
    
    const deleteUsers = () => {
      fetch('/delete-users', {method: "DELETE"})
    }

    return (
        <div id="login">
            <div id="login-form"></div>
          {showLogin ? (
            <div>
              <LoginForm setUser={setUser} />
              <> </>
              <p>
                Don't have an account? &nbsp;
                <button color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              </p>
            </ div>
          ) : (
            <div>
              <SignUpForm  setUser={setUser} />
              <></>
              <p>
                Already have an account? &nbsp;
                <button color="secondary" onClick={() => setShowLogin(true)}>
                  Log In
                </button>
              </p>
            </ div>
          )}
          <button onClick={deleteUsers}>Delete Users</button>
        </div>
    );
}
    

export default Login;
