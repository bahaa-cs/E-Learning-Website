import React from "react"
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate();
    return(           
        <div className="flex center full-width full-height green-bg">

            <div className="flex column center login-container primary-bg">
                <h1>Login</h1>
                <input type="text" placeholder="username" className="username"/>
                <input type="password" placeholder="password" className="password"/>
                <button 
                className="filled-btn"
                onClick={()=>{
                    navigate("/Streams")
                }}
                >Login</button>
                <button className="filled-btn">Sign up</button>
            </div>
        </div> 

    )
}

export default Login;