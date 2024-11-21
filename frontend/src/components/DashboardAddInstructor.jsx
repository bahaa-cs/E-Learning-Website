import axios from "axios";
import React, {useState,useEffect} from "react"

const DashboardAddInstructor = ()=>{
    const [instructorName,setInstructorName] = useState();
    const [input,setInput] = useState("")

    return (
        <div>
            <input type="text" value={input} placeholder="enter instructor name"
            onChange={(e)=>{
                setInput(e.target.value)
                setInstructorName(e.target.value)
            }}
            />
            <button
            onClick={()=>{
                const data = new FormData()
                data.append("instructorName",instructorName)
                axios.post("http://localhost:8080/e-learning-website/backend/insertInstructor.php",data)
                setInput("")
            }}
            >submit</button>
        </div>
    )
}

export default DashboardAddInstructor