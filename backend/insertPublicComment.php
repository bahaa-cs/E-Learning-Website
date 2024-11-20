<?php

include ("connection.php");
include "authorization.php";

$comment = $_POST['comment'];
$courses_streams_id = $_POST['courses_streams_id'];


$query = $connection->prepare(
            "insert into streams_comments (comment,courses_streams_id,type,user_id)
            values (?,?,'public',?)"
);
$query->bind_param("sii", $comment,$courses_streams_id,$id);

if ($query) {
    if ($query->execute()){

        echo json_encode(["message"=>"Inserted successfully"]);
    }
    else
        echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
} else
    echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);
