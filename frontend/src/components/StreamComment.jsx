import React,{useEffect, useState} from "react";
import axios from "axios"
const StreamComment = ()=>{
    return (
        <div className="flex center stream-comment">
            <input className="flex comment-input" type="text" placeholder="Post Public Comment"/>
            <button className="filled-btn green-bg white-txt">Post</button>
        </div>
    )
}

export default StreamComment;