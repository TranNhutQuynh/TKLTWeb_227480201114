<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bảng cửu chương theo cột</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<style>
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    td {
      width: 50px;
      height: 50px;
      border: 1px solid #000;
    }
</style>
<body class="p-3">
  <table>
    <?php
        for($row=0;$row<=7;$row++){
            echo "<tr>";
            for($col=0;$col<8;$col++){
                if(($col + $row)%2==0){
                    echo '<td style="background:black;"></td>';
                }
                else{
                    echo "<td></td>";
                }
            }echo "</tr>";
        }
        ?>
  </table>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
