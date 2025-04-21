<?php
    $servername = "localhost";
    $user = "root";
    $pass = "";
    $database = "quanlybanhang";

    $conn = mysqli_connect($servername,$user,$pass,$database);

    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    else{
        echo "Connected to database successfully";
    }

    if(isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST'){
        $mahang = mysqli_real_escape_string($conn,$_POST['mahang']);
        $tenhang = mysqli_real_escape_string($conn,$_POST['tenhang']);
        $mansx = mysqli_real_escape_string($conn,$_POST['mansx']);
        $namsx = mysqli_real_escape_string($conn,$_POST['namsx']);
        $gia = mysqli_real_escape_string($conn,$_POST['gia']);

        // Kiểm tra nhà sản xuất tồn tại (ràng buộc FK)
        $check_sql = "SELECT 1 FROM nhasanxuat WHERE mansx = '$mansx'";
        $check_result = mysqli_query($conn, $check_sql);

        if(!$check_result){
            echo "Lỗi truy vấn kiểm tra nhà sản xuất: " . mysqli_error($conn);
            exit;
        }
        if(mysqli_num_rows($check_result) === 0){
            echo "Thêm thất bại: Không tìm thấy nhà sản xuất với mã $mansx.";
            exit;
        }

        $sql = "INSERT INTO hanghoa(mahang,tenhang,mansx,namsx,gia) VALUES ('$mahang','$tenhang','$mansx',$namsx,$gia)";
        if(mysqli_query($conn,$sql)){
            echo "Thêm hàng hoá thành công! <br>";
            echo "Mã hàng: $mahang <br>";
            echo "Tên hàng: $tenhang <br>";
            echo "Mã nhà sản xuất: $mansx <br>";
            echo "Năm sản xuất: $namsx <br>";
            echo "Giá: $gia";
        }else{
            echo "Thêm thất bại!";
        }
    }

    mysqli_close($conn);
?>