import React, {useState,useEffect, useDebugValue} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const CoursesStreams = ()=>{
    const navigate=useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [coursesStreams,setCoursesStreams] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/e-learning-website/backend/selectCourseStreams.php", {
            headers: {
                Authorization:localStorage.token,
            },
        })
        .then((response)=>{
            setCoursesStreams(response.data)
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log(error)
            setIsLoading(false);
        })
        
    },[]);


    const listCourses = isLoading ? (
        <div>Loading...</div>
    ) : (coursesStreams.length>0 ? coursesStreams.map((courseStream)=>(
        <div className="flex row center course-card primary-bg" key={courseStream.id}>
            <h2>{courseStream.courseName}</h2>
            <button className="filled-btn green-bg white-txt"
            onClick={()=>{
                navigate(`/stream/${courseStream.id}`)
            }}
            >View Course Stream</button>
        </div>
    )) : <div>No Courses Enrolled</div> )
    return (
        <div className="flex column center courses-container">
            <h1 className="green-txt page-title">Courses Streams</h1>
            {listCourses}
        </div> )
    
}

export default CoursesStreams;