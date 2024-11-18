import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ()=>{
    const [loginForm,setLoginForm] = useState({
        "username":"",
        "password":""
    });
    const navigate = useNavigate();
    return(           
        <div className="flex center full-width full-height green-bg">

            <div className="flex column center login-container primary-bg">
                <h1>Login</h1>
                <input type="text" placeholder="username" className="username"
                onChange={(e)=>{
                    setLoginForm({
                        ...loginForm,
                        "username":e.target.value
                    })
                }}
                />
                <input type="password" placeholder="password" className="password"
                onChange={(e)=>{
                    setLoginForm({
                        ...loginForm,
                        "password":e.target.value
                    })
                }}
                />
                <button 
                className="filled-btn green-bg white-txt"
                onClick={()=>{
                    ax
                    navigate("/streams")
                }}
                >Login</button>
                <button className="filled-btn  green-bg white-txt"
                onClick={()=>{
                    navigate("/signUp")
                }}
                >Sign up</button>
            </div>
        </div> 

    )
}

export default Login;