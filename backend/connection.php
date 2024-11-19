<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, Content-Type");


$host = "localhost";
$dbuser = "root";
$pass = "";
$dbname = "e-learningdb";

$connection = new mysqli($host,$dbuser,$pass,$dbname);

if ($connection->connect_error)
    die("Error occured");
