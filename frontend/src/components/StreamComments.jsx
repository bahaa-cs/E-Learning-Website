import axios from "axios";
import React, { useEffect,useState,useContext } from "react";
import StreamContext from "./../contexts/StreamContext";

const StreamComments = ()=>{
    const [comments,setComments] = useState([])

    const streamID = useContext(StreamContext);
    useEffect(()=>{

            const data = new FormData()
            data.append("courses_streams_id",streamID)
            axios.post("http://localhost:8080/e-learning-website/backend/selectPublicComments.php",data)
            .then((response)=>{
                setComments(response.data)
            })
    },[streamID])

        const listComments = comments.length>0 ? comments.map((comment)=>{
            <div>{comment.comment}</div>
        }) : <></>


    return (
        <div>Comments {listComments}</div>
    )
}

export default StreamComments