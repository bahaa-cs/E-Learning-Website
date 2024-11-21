<?php

include "connection.php" ;

$query = $connection->prepare("Select courseName from courses");
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





