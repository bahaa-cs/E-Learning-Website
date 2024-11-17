import React from "react"
import { useNavigate } from "react-router-dom";
const SignUp = ()=>{
    const navigate = useNavigate();
    return(           
        <div className="flex center full-width full-height green-bg">

            <div className="flex column center login-container primary-bg">
                <h1>Sign Up</h1>
                <input type="text" placeholder="username" className="username"/>
                <input type="password" placeholder="password" className="password"/>
                <input type="password" placeholder="verify password" className="password"/>
                <button 
                className="filled-btn green-bg white-txt"
                onClick={()=>{
                    navigate("/")
                }}
                >Save</button>
                
            </div>
        </div> 

    )
}

export default SignUp;