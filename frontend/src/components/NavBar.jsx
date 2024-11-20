import React from "react"
import { Navigate, useNavigate } from "react-router"

const NavBar = ()=>{
    const navigate = useNavigate();
    return (
        <div className="flex center full-width fixed">

            <div className="flex center primary-bg black-txt navbar">
                <div
                onClick={()=>{
                    navigate("/courses")
                }}
                >Courses</div>
                <div
                onClick={()=>{
                    navigate("/coursesStreams")
                }}
                >Courses Streams</div>
            </div>
        </div>
    )
}

export default NavBar;