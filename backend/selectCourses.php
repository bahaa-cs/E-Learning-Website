<?php

include "connection.php" ;
include "authorization.php";

$query = $connection->prepare("SELECT c.courseName, CASE WHEN ss.users_id 
                                IS NOT NULL THEN 1 ELSE 0 END AS isEnrolled 
                                FROM courses c INNER JOIN courses_streams cs 
                                ON c.id = cs.courses_id LEFT JOIN streams_students ss 
                                ON ss.courses_streams_id = cs.id AND ss.users_id = ?");
$query->bind_param("i",$id);
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





