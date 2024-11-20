<?php

include ("connection.php");
include "authorization.php";
$courses_streams_id = $_POST['courses_streams_id'];



$query = $connection->prepare(
    "INSERT INTO streams_students (users_id, courses_streams_id)
    VALUES (?,?)"
);
$query->bind_param("ii",$id,$courses_streams_id);

if ($query) {
    if ($query->execute()){

        echo json_encode(["message"=>"Inserted successfully"]);
    }
    else
        echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
} else
    echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);
