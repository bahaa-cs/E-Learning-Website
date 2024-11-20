import React, {useState} from "react";
import StreamAnnouncements from "./StreamAnnouncements";
import StreamAssignments from "./StreamAssignments"; 
import StreamComments from "./StreamComments";
const StreamSections = ()=>{
    const [active,setActive]=useState("announcements")
    return (
    <>
        <div className="flex row stream-sections">
            <button className="filled-btn green-bg white-txt"
            onClick={()=>{
                setActive("announcements")
            }}
            >Announcements</button>
            <button className="filled-btn green-bg white-txt"
            onClick={()=>{
                setActive("assignments")
            }}
            >Assignments</button>
            <button className="filled-btn green-bg white-txt"
            onClick={()=>{
                setActive("comments")
            }}
            >Public Comments</button>

        </div>
        <div className="flex column stream-body">

        {active === "announcements" && <StreamAnnouncements/>}
        {active === "assignments" && <StreamAssignments/>}
        {active === "comments" && <StreamComments/>}
        </div>
    </>
    )
}

export default StreamSections;