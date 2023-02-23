<?php
$email=$_POST['femail'];
$mesg=$_POST['mesg'];
// echo $email.$mesg;
$servername = "localhost";
$username = "root";
$password = "";
$db="musixee_a";

// Create connection
$conn = new mysqli("localhost", "root", "","musixee_a");

// Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";
$sql = "INSERT INTO user_review  (femail, mesg)
VALUES ('$email','$mesg')";
if($conn->query($sql)){
    echo"record has been inserted";
    header("location:index.html");
}
else{
    echo"sorry";
}
?>