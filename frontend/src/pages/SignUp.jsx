import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ()=>{
    const [registerForm,setRegisterForm] = useState({
        "username":"",
        "password":""
        })
    const [credentials,setCredentials]=useState()
    const navigate = useNavigate();
    return(           
        <div className="flex center full-width full-height green-bg">

            <div className="flex column center login-container primary-bg">
                <h1>Sign Up</h1>
                <p className="red-txt">{credentials}</p>
                <input type="text" placeholder="username" className="username"
                onChange={(e)=>{
                    setRegisterForm({
                        ...registerForm,
                        username:e.target.value
                    })
                }}
                />
                <input type="password" placeholder="password" className="password"
                onChange={(e)=>{
                    setRegisterForm({
                        ...registerForm,
                        password:e.target.value
                    })
                }}
                />
                {/* <input type="password" placeholder="verify password" className="password"/> */}
                <button 
                className="filled-btn green-bg white-txt"
                onClick={()=>{
                    const data = new FormData()
                    data.append("username",registerForm.username)
                    data.append("password",registerForm.password)
                    axios.post("http://localhost:8080/e-learning-website/backend/insertStudent.php",data)
                    .then((response)=>{
                        const result = response.data
                        if (result.message==="missing username or password")
                            setCredentials(result.message)
                        else
                            navigate("/")
                    })

                }}
                >Save</button>
                
            </div>
        </div> 

    )
}

export default SignUp;