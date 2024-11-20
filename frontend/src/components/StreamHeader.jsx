import React,{useEffect, useState} from "react";
import axios from "axios"
const StreamHeader = (props)=>{
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{

        const data = new FormData();
        data.append("courses_streams_id",props.csID)
        axios.post("http://localhost:8080/e-learning-website/backend/selectStream.php", data,{
            headers: {
                Authorization: localStorage.token,
            },
        })
        .then((response)=>{
            setCourses(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    },[])


    return (
        <div>
            <p>h</p>
            <h1>{courses.courseName}</h1>
            {/* <p>Instructors: {instructors}</p> */}
            </div>
    )
}

export default StreamHeader;