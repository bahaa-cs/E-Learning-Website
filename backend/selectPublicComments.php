<?php

include "connection.php" ;
$courses_streams_id = $_POST['courses_streams_id'];

$query = $connection->prepare("select u.username, sc.comment from users u inner join streams_comments sc 
                                on u.id=sc.user_id where sc.courses_streams_id=?");
$query->bind_param("i",$courses_streams_id);
$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0) {
    $comments_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $comments_array[] = $resultObject;
    }
    echo json_encode($comments_array);
}
else{
    echo json_encode([
        "message"=>"no records"
    ]);
}
