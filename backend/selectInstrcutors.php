<?php

include "connection.php" ;

$query = $connection->prepare("Select username from users where user_type_id=2");
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $students_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $students_array[] = $resultObject;
    }
    echo json_encode($students_array);
}
else{
    echo json_encode([
        "message"=>"no records"
    ]);
}





