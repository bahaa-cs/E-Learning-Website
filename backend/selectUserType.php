<?php

include "connection.php" ;
include "authorization.php";

$query = $connection->prepare("select ut.type from user_types ut inner join users u on ut.id=u.user_type_id where u.id=?");
$query->bind_param("i",$id);
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