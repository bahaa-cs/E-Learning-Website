import React, {useState,useEffect, useDebugValue} from "react"
import axios from "axios"
const CoursesStreams = ()=>{

    const [disabled,setDisabled] = useState(false);
    const [coursesStreams,setCoursesStreams] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/e-learning-website/backend/selectCourseStreams.php", {
            headers: {
                Authorization:localStorage.token,
            },
        })
        .then((response)=>{
            setCoursesStreams(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    },[]);


    const listCourses = coursesStreams.length>0 ? coursesStreams.map((courseStream)=>(
        <div className="flex column center course-card primary-bg" key={courseStream.id}>
            <h2>{courseStream.courseName}</h2>
            <button className="filled-btn green-bg white-txt"> Enroll Course</button>
            <button className="filled-btn green-bg white-txt">View Course Stream</button>
        </div>
    )) : <div>No Courses Enrolled</div>
    return (
        <div className="flex row courses-container">
            {listCourses}
        </div>
    )
}

export default CoursesStreams;