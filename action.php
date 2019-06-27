<?php

$host = 'localhost';
$name = 'id8307767_english';
$pass = 'ynp49q27';
$db   = 'id8307767_participants';

$connection = mysqli_connect($host, $name, $pass, $db);

$emailQuery = 'SELECT * FROM participants WHERE email=\''.$_POST["email"].'\';';
$emailResult = mysqli_query($connection, $emailQuery);
$emailCheck =  mysqli_num_rows($emailResult);

$phoneQuery = 'SELECT * FROM participants WHERE phone=\''.$_POST["phone"].'\';';
$phoneResult = mysqli_query($connection, $phoneQuery);
$phoneCheck =  mysqli_num_rows($phoneResult);

$nameQuery = 'SELECT * FROM participants WHERE name=\''.$_POST["name"].'\' AND school=\''.$_POST["school"].'\' AND grade=\''.$_POST["grade"].'\';';
$nameResult = mysqli_query($connection, $nameQuery);
$nameCheck =  mysqli_num_rows($nameResult);

if ($emailCheck + $phoneCheck + $nameCheck > 0) {
    $message = 'denied=true';
} else {
    $message = "name=".$_POST["name"]."&email=".$_POST["email"]."&phone=".$_POST["phone"]."&school=".$_POST["school"]."&grade=".$_POST["grade"];
}

header('Location: https://modest-aryabhata-aa76bd.netlify.com/?'.$message);
?>