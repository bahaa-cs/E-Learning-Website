import React from "react"

const Courses = ()=>{
    return (
        <div className="flex row courses-container">
            <div className="flex column center course-card primary-bg">
                <h2>Course Name</h2>
                <button className="filled-btn green-bg white-txt">Enroll Course</button>
                <button className="filled-btn green-bg white-txt">View Course Stream</button>
            </div>
        </div>
    )
}

export default Courses;