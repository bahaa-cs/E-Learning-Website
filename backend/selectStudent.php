<?php

include "connection.php";


require "./../frontend/vendor/autoload.php";

use Firebase\JWT\JWT;

$data = json_decode(file_get_contents("php://input"), true);

$secretKey = "e_learning_key";


$username = $_POST["username"];
$password = $_POST["password"];

$query = $connection->prepare("SELECT * FROM users WHERE username = ? and user_type_id=1");
$query->bind_param("s", $username);
$query->execute();

$result = $query->get_result();

if($result->num_rows != 0) {
  $user = $result->fetch_assoc();

  $check = password_verify($password, $user["password"]);

  if($check){
    $payload = [
      "userId" => $user["id"],
      "userType" => $user["user_type_id"]
    ];

    $token = JWT::encode($payload, $secretKey, "HS256");

    echo json_encode([
      "status" => "Login Successful",
      "user" => $user,
      "access_token" => $token,
    ]);

  } else {
    echo json_encode([
      "status" => "Invalid Credentials",
    ]);
  }
} else {
  echo json_encode([
    "status" => "Invalid Credentials",
  ]);
}
