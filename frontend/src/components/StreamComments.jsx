import axios from "axios";
import React, { useEffect,useState } from "react";

const StreamComments = (props)=>{
    const [comments,setComments] = useState()

    useEffect(()=>{

        const data = new FormData()
        data.append("courses_streams_id",props.csID)
        axios.post("http://localhost:8080/e-learning-website/backend/selectPublicComments.php",data)
        .then((response)=>{
            setComments(response.data)
            console.log(comments)
        })
    },[])
    
    return (
        <div>Comments</div>
    )
}

export default StreamComments