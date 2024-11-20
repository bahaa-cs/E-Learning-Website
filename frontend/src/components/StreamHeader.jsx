import React,{useEffect, useState} from "react";
import axios from "axios"
const StreamHeader = (props)=>{
    const [course,setCourse] = useState([]);
    const [instructors,setInstructors] = useState([]);

    
    // get course name
    useEffect(()=>{

        const data = new FormData();
        data.append("courses_streams_id",props.csID)
        axios.post("http://localhost:8080/e-learning-website/backend/selectStream.php", data,{
            headers: {
                Authorization: localStorage.token,
            },
        })
        .then((response)=>{
            setCourse(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    },[])
    // instructors
    useEffect(()=>{

        const data = new FormData();
        data.append("courses_streams_id",props.csID)
        axios.post("http://localhost:8080/e-learning-website/backend/selectInstructorsOfStream.php", data)
        .then((response)=>{
            setInstructors(response.data)
            
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    const listInstructors = instructors.length>0 ? instructors.map((i)=>(

        <>{i.username} </>
    ) 
    ) : <></>


    return (
        <div>
            <h1>{course.courseName}</h1>
            <div><h3>Instructors:</h3> {listInstructors}</div>
            </div>
    )
}

export default StreamHeader;