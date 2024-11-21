import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

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

  <div className="flex column center dashboard">
    <div>Students</div>
    <div>instructors</div>
    <div>courses</div>
  </div>

  )
  
  
  
}

export default DashBoard;
