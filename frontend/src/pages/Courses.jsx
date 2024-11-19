import React, {useState,useEffect, useDebugValue} from "react"
import axios from "axios"
const Courses = ()=>{

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
        <div className="flex column center course-card primary-bg" key={course.id}>
            <h2>{course.courseName}</h2>
            <button 
                className={`filled-btn green-bg white-txt ${course.isEnrolled ? "unenroll-btn" : ""}`} 
                disabled={course.isEnrolled}>
                {course.isEnrolled ? "Unenroll" : "Enroll Course"}
            </button>        
        </div>
    )) : <div>No Courses Avaliable</div>
    return (
        <div className="flex row courses-container">
            {listCourses}
        </div>
    )
}

export default Courses;