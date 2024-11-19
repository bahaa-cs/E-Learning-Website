<?php

include("connection.php");
require "./../frontend/vendor/autoload.php";


use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = "e_learning_key";
$headers = getallheaders();
$jwt = $headers["Authorization"];


$key = new Key($secretKey, "HS256");
$payload = JWT::decode($jwt, $key);

$id = $payload->userId;



$query = $connection->prepare("SELECT Distinct c.courseName, cs.id FROM courses c inner join courses_streams cs on cs.courses_id=c.id where cs.user_id=$id");
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