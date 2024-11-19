import React, {useState,useEffect} from "react"
import axios from "axios"
const Courses = ()=>{

    const [courses,setCourses] = useState();
    const [disabled,setDisabled] = useState(false);

    
    const response = await axios.get("http://localhost:8080/e-learning-website/backend/selectCourseStreams.php",{

        headers: {
            Authorization: localStorage.token,
          },
    }
    )
    .then((res)=>{
        setCourses(res.data);
        
    })
    .finally(()=>{
        console.log(courses)
    })


    useEffect(()=>{
        getStreams();
        
    },[]);

    const listCourses = courses && courses.map((course)=>(
        <div className="flex column center course-card primary-bg" key={course.id}>
            <h2>{course.courseName}</h2>
            <button className="filled-btn green-bg white-txt"> Enroll Course</button>
            <button className="filled-btn green-bg white-txt">View Course Stream</button>
        </div>
    ))
    return (
        <div className="flex row courses-container">
            {listCourses}
        </div>
    )
}

export default Courses;