<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bai23.css">
</head>
<body>
    <div class="container">
        <form action="bai23.php" method="POST" enctype="multipart/form-data">
        Upload File:
        <input type="file" name="fileUpLoad" id="fileToUpLoad">
        <input type="submit" name="submit" value="Upload File" id="btn-submit">
    </form>
    </div>

    <?php
        if (isset($_POST['submit']) && isset($_FILES['fileUpLoad'])) {
            if ($_FILES['fileUpLoad']['error'] > 0) {
                echo "Upload error! Code: " . $_FILES['fileUpLoad']['error'];
            } else {
                $target_dir = "data/";

                $target_file = $target_dir . basename($_FILES['fileUpLoad']['name']);
                if (move_uploaded_file($_FILES['fileUpLoad']['tmp_name'], $target_file)) {
                    echo 'Tải lên thành công! <br>';
                    echo 'Đường dẫn: ' . $target_file . '<br>';
                    echo 'Loại File: ' . $_FILES['fileUpLoad']['type'] . '<br>';
                    echo 'Dung Lượng: ' . (int)$_FILES['fileUpLoad']['size'] / 1024 . ' KB';
                }
            }
        }
    ?>
</body>
</html>
