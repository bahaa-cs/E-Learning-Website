

<?php

include "connection.php" ;

$courses_streams_id = $_POST["courses_streams_id"];

$query = $connection->prepare("select u.username from users 
                                u inner join streams_instructors si 
                                on u.id=si.users_id where si.courses_streams_id=?");
$query->bind_param("i",$courses_streams_id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $instructors_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $instructors_array[] = $resultObject;
    }
    echo json_encode($instructors_array);
}
else{
    echo json_encode([
        "message"=>"no records"
    ]);
}
