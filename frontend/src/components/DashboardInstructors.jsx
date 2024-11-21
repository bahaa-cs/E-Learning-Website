import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardInstructors = () => {
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        axios
            .post("http://localhost:8080/e-learning-website/backend/selectInstructors.php")
            .then((response) => {
                setInstructors(response.data);
            })
            .catch((err) => {
                console.error(err);

            })

    }, []);

    const instructorsList = instructors.length > 0 ? (
        instructors.map((instructor) => (
            <div key={instructor.id}>{instructor.username}</div>
        ))
    ) : (
        <p>No Instructors yet.</p>
    );

    return (
        <div>
            {instructorsList}
        </div>
    );
};

export default DashboardInstructors;
