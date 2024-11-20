import React, {useState,useEffect, useDebugValue} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Courses = ()=>{
    const navigate = useNavigate();

    const [disabled,setDisabled] = useState(false);
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/e-learning-website/backend/selectCourses.php", {
            headers: {
                Authorization:localStorage.token,
            },
        })
        .then((response)=>{
            setCourses(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    },[]);


    const listCourses = courses.length>0 ? courses.map((course)=>(
        <div className="flex row center course-card primary-bg" key={course.id}>
            <h2>{course.courseName}</h2>
            <button 
                className={`filled-btn green-bg white-txt ${course.isEnrolled ? "unenroll-btn" : ""}`} 
                disabled={course.isEnrolled}>
                {course.isEnrolled ? "Unenroll" : "Enroll Course"}
            </button>        
        </div>
    )) : <div>No Courses Avaliable</div>
    return (

        <div className="flex column center courses-container">
        <button className="flex center filled-btn green-bg white-txt stream-btn"
        onClick={()=>{
            navigate("/coursesStreams")
        }}
        >View Courses Streams</button>
            {listCourses}
        </div>

    )
}

export default Courses;