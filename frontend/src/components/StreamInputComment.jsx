import React,{useEffect, useState} from "react";
import axios from "axios"
const StreamInputComment = (props)=>{
    const [comment,setComment] = useState();
    const [input,setInput] = useState("")

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
                    data.append("courses_streams_id",props.csID)
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