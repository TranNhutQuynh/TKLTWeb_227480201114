<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bảng cửu chương theo cột</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3">
  <div class="container">
    <table class="table table-bordered text-center">
      <thead>
        <tr>
          <?php
            // Tạo tiêu đề cho mỗi cột (Bảng cửu chương 1, 2, ..., 10)
            for ($col = 1; $col <= 10; $col++) {
                echo "<th>Bảng cửu chương $col</th>";
            }
          ?>
        </tr>
      </thead>
      <tbody>
        <?php
          // Mỗi hàng tương ứng với các số nhân từ 1 đến 10
          for ($row = 1; $row <= 10; $row++) {
              echo "<tr>";
              for ($col = 1; $col <= 10; $col++) {
                  echo "<td>$col x $row = " . ($col * $row) . "</td>";
              }
              echo "</tr>";
          }
        ?>
      </tbody>
    </table>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
