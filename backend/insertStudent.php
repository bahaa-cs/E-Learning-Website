<?php

include ("connection.php");

$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;



if( is_null($username) || is_null($password) || empty($username) || empty($password)){
    echo json_encode(["message"=>"missing username or password"]);
}
else{

    $query = $connection->prepare(
        "INSERT INTO users (username, password, user_type_id)
        VALUES (?,?,1)"
    );
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $query->bind_param("ss", $username,$hashed);
    
    if ($query) {
        if ($query->execute()){

            echo json_encode(["message"=>"Inserted successfully"]);
        }
        else
            echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
    } else
        echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);
}