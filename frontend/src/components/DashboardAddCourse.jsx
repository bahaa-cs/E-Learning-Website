import React, {useState,useEffect} from "react"

const DashboardAddCourse = ()=>{
    const [courseName,setCourseName] = useState();
    return (
        <div>
            <input type="text" placeholder="enter course name"
            onChange={(e)=>{
                setCourseName(e.target.value)
            }}
            />
            <button>submit</button>
        </div>
    )
}

export default DashboardAddCourse