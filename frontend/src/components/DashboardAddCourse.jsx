import axios from "axios";
import React, {useState,useEffect} from "react"

const DashboardAddCourse = ()=>{
    const [courseName,setCourseName] = useState();
    const [input,setInput] = useState("")

    return (
        <div>
            <input type="text" value={input} placeholder="enter course name"
            onChange={(e)=>{
                setInput(e.target.value)
                setCourseName(e.target.value)
            }}
            />
            <button
            onClick={()=>{
                const data = new FormData()
                data.append("courseName",courseName)
                axios.post("http://localhost:8080/e-learning-website/backend/insertCourse.php",data)
                setInput("")
            }}
            >submit</button>
        </div>
    )
}

export default DashboardAddCourse