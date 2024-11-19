
<?php

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