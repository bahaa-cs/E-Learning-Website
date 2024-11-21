import React, { useEffect, useState } from "react";
import axios from "axios";

const DashBoardStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:8080/e-learning-website/backend/selectStudents.php")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const studentsList = students.length > 0 ? (
        students.map((student) => (
            <div key={student.id}>{student.username}</div>
        ))
    ) : (
        <p>No Students yet.</p>
    );

    return (
        <div>
            {studentsList}
        </div>
    );
};

export default DashBoardStudents;
