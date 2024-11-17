<?php

include ("connection.php");

$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;



if( is_null($username) || is_null($password)){
    echo json_encode(["message"=>"Null username or password"]);
}
else{

    $query = $connection->prepare(
        "INSERT INTO users (username, password)
        VALUES (?,?)"
    );
    $query->bind_param("ss", $username,$password);
    
    if ($query) {
        if ($query->execute())
            echo json_encode(["message"=>"Inserted successfully"]);
        else
            echo json_encode(["message"=>"Error executing insert query: " . $query->error]);
    } else
        echo json_encode(["message"=>"Error preparing insert query: ".$connect->error]);
}