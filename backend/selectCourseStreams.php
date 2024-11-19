<?php

include("connection.php");

$query = $connection->prepare("SELECT Distinct c.courseName FROM courses c inner join courses_streams cs on cs.courses_id=c.id");
$query->execute();

$result = $query->get_result();



if ($result->num_rows > 0) {
    $courses_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $courses_array[] = $resultObject;
    }
    echo json_encode($courses_array);
}
else{
    echo json_encode([
        "message"=>"no records"
    ]);
}