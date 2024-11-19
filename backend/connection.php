<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Authorization, Content-Type"); 
header("Access-Control-Allow-Methods: POST, GET"); 
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

$host = "localhost";
$dbuser = "root";
$pass = "";
$dbname = "e-learningdb";

$connection = new mysqli($host,$dbuser,$pass,$dbname);

if ($connection->connect_error)
    die("Error occured");
