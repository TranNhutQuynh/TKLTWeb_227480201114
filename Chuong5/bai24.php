<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="bai24.php" method="POST" enctype="multipart/form-data">
        Files Upload:<br>
        File 1: <input type="file" name="myfile[]" id=""> <br>
        File 2: <input type="file" name="myfile[]" id=""> <br>
        File 3: <input type="file" name="myfile[]" id=""> <br>
        <input type="submit" value="Upload">
    </form>

    <?php
        if (isset($_FILES['myfile'])) {
            $target_dir = "data/";
            if (!file_exists($target_dir)) {
                mkdir($target_dir, 0777, true);
            }

            foreach ($_FILES['myfile']['error'] as $key => $error) {
                // Check if there is no error
                if ($error == 0) {
                    // Only define $name when the file is available
                    $tmp_name = $_FILES['myfile']['tmp_name'][$key];
                    $name = $_FILES['myfile']['name'][$key];

                    $target_file = $target_dir . basename($name);

                    if (move_uploaded_file($tmp_name, $target_file)) {
                        echo "File '$name' uploaded successfully!<br>";
                    } else {
                        echo "Error uploading '$name'.<br>";
                    }
                } else {
                    // Skip echoing $name if the error occurred
                    echo "Error with file: Error Code $error.<br>";
                }
            }
        }
    ?>
</body>
</html>
