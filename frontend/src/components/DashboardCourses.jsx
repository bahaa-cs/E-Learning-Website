import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardCourses = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        axios
            .post("http://localhost:8080/e-learning-website/backend/selectAllCourses.php")
            .then((response) => {
                setCourses(response.data);
            })
            .catch((err) => {
                console.error(err);

            })

    }, []);

    const coursesList = courses.length > 0 ? (
        courses.map((course) => (
            <div>{course.courseName}</div>
        ))
    ) : (
        <p>No courses yet.</p>
    );
    console.log(courses)
    return (
        <div>
            {coursesList}
        </div>
    );
};

export default DashboardCourses;
