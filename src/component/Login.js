import React, { useState } from 'react'

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    })

    function handleForm(e) {
        console.log("inputing")
        var name = e.target.name;
        var value = e.target.value;
        setLoginInfo(prevVal => ({ ...prevVal, [name]: value }));
    }

    function submitForm(e) {
        e.preventDefault();
        console.log("login info is", loginInfo);

    }

    return (
        <div className="login-board">
            <form className="login-form" onSubmit={submitForm}>
                <label className="block login-content" htmlFor="username"><b>Username</b></label>
                <input onChange={handleForm} value={loginInfo.username} className="block login-content" type="text" placeholder="Enter Username" name="username" required />

                <label className="bloc login-content" htmlFor="password"><b>Password</b></label>
                <input onChange={handleForm} value={loginInfo.password} className="block login-content" type="password" placeholder="Enter Password" name="password" required />

                <button className="block login-content" type="submit">Login</button>
                <button className="block login-content" type="submit">Signup</button>
            </form>
        </div>
    )
}

