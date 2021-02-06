import React, { useState } from "react";
import { googleProvider, auth } from "../firebase";
import { withRouter, NavLink } from "react-router-dom";


export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  function handleForm(e) {
    console.log("inputing");
    var name = e.target.name;
    var value = e.target.value;
    setLoginInfo((prevVal) => ({ ...prevVal, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
    console.log("login info is", loginInfo);
  }

  return (
    <div className="login-board">
      <form className="login-form" onSubmit={submitForm}>
        <label className="block login-content" htmlFor="username">
          <b>Username</b>
        </label>
        <input
          onChange={handleForm}
          value={loginInfo.username}
          className="block login-content"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label className="bloc login-content" htmlFor="password">
          <b>Password</b>
        </label>
        <input
          onChange={handleForm}
          value={loginInfo.password}
          className="block login-content"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <button className="block login-content" type="submit">
          Login
        </button>
      </form>
      <div className="line-break"></div>
      <button onClick={loginGoogle} className="block btn">
        Sign in with Google
      </button>
      <div className="text-center"> <NavLink to= "/signup" activeClassName="is-active"> Create an Account</NavLink></div>
    </div>
  );
}

async function loginGoogle() {
  try {
    console.log("login click click");
    var result = await auth.signInWithRedirect(googleProvider);
    console.log("login clicked");
  } catch (e) {
    console.error(e);
  }
}
