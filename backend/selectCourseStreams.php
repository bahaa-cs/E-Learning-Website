<?php

include "connection.php" ;
require "./../frontend/vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = "e_learning_key";

$headers = getallheaders();

if (!isset($headers["Authorization"])) {
    http_response_code(401);
    echo json_encode(["error" => "Authorization header missing."]);
    exit;
}

$jwt = $headers["Authorization"];

try {
    $key = new Key($secretKey, "HS256");
    $payload = JWT::decode($jwt, $key);
    $id = $payload->userId;

} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["error" => "Invalid or expired token"]);
    exit;
}
$query = $connection->prepare("SELECT Distinct c.courseName, cs.id 
                                FROM courses c 
                                inner join courses_streams cs 
                                on cs.courses_id=c.id 
                                inner join streams_students s 
                                on s.courses_streams_id=cs.id 
                                where s.users_id=?");
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