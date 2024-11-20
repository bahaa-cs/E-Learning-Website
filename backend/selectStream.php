<?php

include "connection.php" ;
$courses_streams_id = $_POST['courses_streams_id'];

$query = $connection->prepare("SELECT c.courseName 
                                FROM courses c 
                                inner join courses_streams cs 
                                on cs.courses_id=c.id 
                                inner join streams_students s 
                                on s.courses_streams_id=cs.id 
                                where cs.id=?");
$query->bind_param("i",$courses_streams_id);
$query->execute();

$result = $query->get_result();



if ($result->num_rows > 0) {
    $resultObject = $result->fetch_assoc();

    echo json_encode($resultObject);
}
else{
    echo json_encode([
        "message"=>"no records"
    ]);
}