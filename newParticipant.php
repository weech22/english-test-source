<?php

header('Access-Control-Allow-Origin: *');  

$host = 'localhost';
$name = 'id8307767_english';
$pass = 'ynp49q27';
$db   = 'id8307767_participants';

$connection = mysqli_connect($host, $name, $pass, $db);

$query = 'INSERT INTO participants (name, school, grade, email, phone, points) VALUES (\''.$_GET["name"].'\',\''.$_GET["school"].'\',\''.$_GET["grade"].'\',\''.$_GET["email"].'\',\''.$_GET["phone"].'\',\''.$_GET["points"].'\');';
mysqli_query($connection, $query);

?>