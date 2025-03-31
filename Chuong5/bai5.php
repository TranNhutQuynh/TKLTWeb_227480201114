<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài 5</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        .container{
            display: flex;
            flex-direction:row ;
            justify-content: center;
            align-items: center;
        }
        .form-group{
            gap:10px;
            width: 150px;
        }
        input{
            margin-top: 10px;
            height:30px;
        }
    </style>
<body>
    <!--PHP-->
    <?php
        $so1 = isset($_GET['so1']) ? $_GET['so1'] : 0;
        $so2 = isset($_GET['so2']) ? $_GET['so2'] : 0;
        $result = "";
        
        
        // Hàm tính ước chung lớn nhất theo thuật toán Euclid
        function gcd($so1, $so2) {
            if ($so2 == 0) {
                return $so1;
            }
            return gcd($so2, $so1 % $so2);
        }
        
        // Hàm tính bội chung nhỏ nhất
        function lcm($so1, $so2) {
            if ($so1 == 0 || $so2 == 0) {
                return 0;
            }
            return ($so1 * $so2) / gcd($so1, $so2);
        }
    
    //kiểm tra form được submit hay chưa
    if(isset($_GET['ucln'])){
        $result = gcd($so1,$so2);
    }else{
        $result = lcm($so1,$so2);
    }

    ?>
    <!--HTML-->
    <div class="container">
    <form action="bai5.php" method="get">
        <div class="mt-3 form-group">
            <label for="so1">Số thứ nhất:</label>
            <input type="text" class="form-control" name="so1" value="<?php echo isset($so1) ? $so1 : ''; ?>">
            
            <label for="so2">Số thứ hai:</label>
            <input type="text" class="form-control" name="so2" value="<?php echo isset($so2) ? $so2 : ''; ?>">
            
            <label for="ketqua">Kết quả:</label>
            <input type="text" class="form-control" name="ketqua" value="<?php echo isset($result) ? $result : ''; ?>">
        </div>
        <div class="mt-3">
            <button type="submit" class="btn btn-primary" name="ucln">UCLN</button>
            <button type="submit" class="btn btn-primary" name="bcnn">BCNN</button>
        </div>
    </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>