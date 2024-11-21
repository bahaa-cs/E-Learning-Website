<?php

include ("connection.php");

$courseName = $_POST["courseName"];

$query = $connection->prepare(
    "INSERT INTO courses (courseName) VALUES (?)"
);
$query->bind_param("s", $courseName);
$query->execute();

$query = $connection->prepare(
    "INSERT INTO courses_streams (courses_id) 
     SELECT id FROM courses WHERE courseName = ?"
);
$query->bind_param("s", $courseName);
$query->execute();
?>
