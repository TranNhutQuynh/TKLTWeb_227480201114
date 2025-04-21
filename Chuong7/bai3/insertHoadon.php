<?php
    $servername = "localhost";
    $user = "root";
    $pass = "";
    $database = "quanlybanhang";

    if(isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST'){
        $conn = mysqli_connect($servername,$user,$pass,$database);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }else{
            echo "Connect to database successfully!";
        }

        $mahd = mysqli_real_escape_string($conn, $_POST['mahd']);
        $makh = mysqli_real_escape_string($conn, $_POST['makh']);
        $mahang = mysqli_real_escape_string($conn, $_POST['mahang']);
        $soluong = mysqli_escape_string($conn, $_POST['soluong']);
        $thanhtien = mysqli_real_escape_string($conn, $_POST['thanhtien']);
        //kiểm tra ràng buộc
        $check_kh_sql = "SELECT 1 FROM khachhang WHERE makh = '$makh'";
        $check_hanghoa_sql = "SELECT 1 FROM hanghoa WHERE mahang = '$mahang'";
        
        $check_kh_result = mysqli_query($conn,$check_kh_sql);
        $check_hanghoa_result = mysqli_query($conn,$check_hanghoa_sql);

        if(!$check_kh_result){
            echo "Lỗi truy vấn kiểm tra mã KH: " . mysqli_error($conn);
            exit;
        }
        if(!$check_hanghoa_result){
            echo "Lỗi truy vấn kiểm tra mã Hàng hoá: " . mysqli_error($conn);
            exit;
        }
        
        if(mysqli_num_rows($check_kh_result) === 0){
            echo "Không tìm thấy mã khách hàng $makh";
            exit;
        }
        if(mysqli_num_rows($check_hanghoa_result) === 0){
            echo "Không tìm thấy mã hàng hoá $mahang";
            exit;
        }
        

        $sql = "INSERT INTO hoadon(mahd,makh,mahang,soluong,thanhtien) VALUES ('$mahd','$makh','$mahang',$soluong,$thanhtien)";

        if(mysqli_query($conn, $sql)){
            echo "Thêm thành công!<br><br>";
            echo "<table class='table'>
                    <thead>
                        <tr>
                            <th>Mã hoá đơn</th>
                            <th>Mã khách hàng</th>
                            <th>Mã hàng hoá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$mahd</td>
                            <td>$makh</td>
                            <td>$mahang</td>
                            <td>$soluong</td>
                            <td>$thanhtien</td>
                        </tr>
                    </tbody>
                  </table>";
        }
        

        mysqli_close($conn);
    }
?>