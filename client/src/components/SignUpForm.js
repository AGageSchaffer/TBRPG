import React, { useState } from "react";

function SignUpForm({ setUser }) {
  const initialFormData = {
    username: '',
    password: '',
    password_confirmation: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {username, password, password_confirmation} = formData;

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } 
    })}

  function handleFormChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
        <h3 htmlFor="username">Username</h3>
        <input
          type="text"
          name='username'
          id="username"
          autoComplete="off"
          value={username}
          onChange={handleFormChange}
        />
      </>
      <>
        <h3 htmlFor="password">Password</h3>
        <input
          type="password"
          name='password'
          id="password"
          value={password}
          onChange={handleFormChange}
          autoComplete="current-password"
        />
      </>
      <>
        <h3 htmlFor="password">Password Confirmation</h3>
        <input
          type="password"
          name='password_confirmation'
          id="password_confirmation"
          value={password_confirmation}
          onChange={handleFormChange}
          autoComplete="current-password"
        />
      </>
      <p>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </p>
      <>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </>
    </form>
  );
}

export default SignUpForm;
