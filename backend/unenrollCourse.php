<?php

include ("connection.php");
include "authorization.php";
$courses_streams_id = $_POST['courses_streams_id'];



$query = $connection->prepare("Delete from streams_students where users_id =? and courses_streams_id=?");
$query->bind_param("ii",$id,$courses_streams_id);

if ($query) {
    if ($query->execute()){

        echo json_encode(["message"=>"Deleted successfully"]);
    }
    else
        echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
} else
    echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);
