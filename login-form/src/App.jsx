import React, { useState } from 'react'
import './App.css'
export const LoginFrom = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmitFrom = (e) => {
        e.preventDefault();
    
        const loginData ={
            username,
            password
        }
        console.log(loginData);
    }
 return (
    <div className="container">
        <div className="card">
            <h1>Login From</h1>
            <form onSubmit={handelSubmitFrom }>
                <label htmlFor="username">username</label>
                <input type="text"  name="username"  required autoComplete="off"value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required autoComplete="off"value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
 )
}