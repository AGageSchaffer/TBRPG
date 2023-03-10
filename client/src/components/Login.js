import React, { useEffect, useState, useContext } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { UserContext } from "../context/user";


function Login({ /*setUser*/ }) {
    const [showLogin, setShowLogin] = useState(true)
    const [_, setUser] = useContext(UserContext)
    
    const deleteUsers = () => {
      fetch('/delete-users', {method: "DELETE"})
    }

    return (
      <div id="login" >
        <div id="banner" className="banner">
          <div className="login">
            {showLogin ? (
            <div id="login-form" className="login-form">
              <LoginForm setUser={setUser} />
              <> </>
                <button color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              
            </ div>
          ) : (
            <div id="signup-form">
              <SignUpForm  setUser={setUser} />
              <></>
              <p>
                Already have an account? &nbsp;
                <button color="secondary" onClick={() => setShowLogin(true)}>
                  Log In
                </button>
              </p>
          </div>
          )}
        </div>
      </div>
    </div>
    );
}
    

export default Login;
