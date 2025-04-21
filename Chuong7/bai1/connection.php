<?php
    $servername = "localhost";
    $user = "root";
    $pass = "";
    $database = "quanlybanhang";

    $conn = mysqli_connect($servername,$user,$pass,$database);

    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }else{
        echo "Connected to database successfully";
    }

    mysqli_close($conn);
?>