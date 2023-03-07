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
        <label htmlFor="username">Username</label>
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
        <label htmlFor="password">Password</label>
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
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          name='password_confirmation'
          id="password_confirmation"
          value={password_confirmation}
          onChange={handleFormChange}
          autoComplete="current-password"
        />
      </>
      <>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </>
      <>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </>
    </form>
  );
}

export default SignUpForm;
