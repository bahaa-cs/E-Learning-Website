import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ()=>{
    const [loginForm,setLoginForm] = useState({
        "username":"",
        "password":""
    });
    const [credentials,setCredentials]=useState()
    const navigate = useNavigate();
    return(           
        <div className="flex center full-width full-height green-bg">

            <div className="flex column center login-container primary-bg">
                <h1>Login</h1>
                <p className="red-txt">{credentials}</p>
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
                    const data = new FormData();
                    data.append("username",loginForm.username)
                    data.append("password",loginForm.password)
                    axios.post("http://localhost:8080/e-learning-website/backend/selectUser.php",data)
                    .then((response)=>{
                        const user = response.data
                        if (user.status==="Login Successful"){
                            localStorage.setItem("token", user.access_token);
                            if(user.user.user_type_id==3){
                                navigate("/dashboard")
                            }
                            else if(user.user.user_type_id==1){

                                navigate("/courses")
                            }
                        }
                        else
                            setCredentials("invalid credentials")

                    })
                    
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