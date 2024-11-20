import React, { useEffect,useState,useContext } from "react";
import StreamContext from "./../contexts/StreamContext";
import axios from "axios"
const StreamInputComment = ()=>{
    const [comment,setComment] = useState();
    const [input,setInput] = useState("")

    const streamID = useContext(StreamContext);

    return (
        <div className="flex center stream-comment">
            <input className="flex comment-input" type="text" value={input} placeholder="Post Public Comment"
            onChange={(e)=>{
                setInput(e.target.value)
                setComment(e.target.value)
            }}
            />
            <button className="filled-btn green-bg white-txt"
            onClick={()=>{
                if(comment){
                    const data = new FormData()
                    data.append("comment",comment)
                    data.append("courses_streams_id",streamID)
                    axios.post("http://localhost:8080/e-learning-website/backend/insertPublicComment.php", data,{
                        headers: {
                            Authorization: localStorage.token,
                        },
                    })
                    setInput("")
                }
            }}
            >Post</button>
        </div>
    )
}

export default StreamInputComment;