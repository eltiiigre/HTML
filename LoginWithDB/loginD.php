<?php

    $error=''; 
    if(isset($_POST['submit'])){
    if(empty($_POST['user']) || empty($_POST['pass'])){
    $error = "Username or Password is Invalid!";
    }
    else
    {
    
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $conn = mysqli_connect("localhost", "root", "");
    $db = mysqli_select_db($conn, "logindatabase");
    $query = mysqli_query($conn, "SELECT * FROM userpass WHERE pass='$pass' AND user='$user'");
    $rows = mysqli_num_rows($query);

    if($rows == 1){
    header("Location: welcome.php"); // Redirecting to other page
    }
    else
    {
    $error = "Username or Password is Invalid!";
    }
    mysqli_close($conn); // Closing connection
    }
}

?>