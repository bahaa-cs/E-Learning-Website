<?php

include ("connection.php");

$instructorName = $_POST["instructorName"];

$query = $connection->prepare(
    "INSERT INTO users (username,user_type_id) VALUES (?,2)"
);
$query->bind_param("s", $instructorName);
$query->execute();
