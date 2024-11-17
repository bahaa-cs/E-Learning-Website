import React from "react"

const Login = ()=>{
    return(            
            <div className="flex column center login-container">
                <h1>Login</h1>
                <input type="text" placeholder="username" className="username"/>
                <input type="password" placeholder="password" className="password"/>
                <button className="filled-btn">Login</button>
                <button className="filled-btn">Sign up</button>
            </div>

    )
}

export default Login;