import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import DashBoardStudents from "./../components/DashBoardStudents"
import DashboardInstructors from "./../components/DashboardInstructors";
const DashBoard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState();

  useEffect(() => {

    axios
      .post("http://localhost:8080/e-learning-website/backend/selectUserType.php",{}, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((response) => {
        const result = response.data
        setUserType(result.type)
      })
  }, []);


  if (userType !== "admin") {
    navigate("/");
  }

  return (

  <div className="flex row center dashboard">
    <div>
        <h1>Students</h1>
        <DashBoardStudents/>
    </div>
    <div>
        <h1>Instructors</h1>
        <DashboardInstructors/>
    </div>
    <div>courses</div>
  </div>

  )
  
  
  
}

export default DashBoard;
