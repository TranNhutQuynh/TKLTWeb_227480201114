//tạo mảng lưu trữ dữ liệu
var soLuong = parseInt(prompt("Nhập vào số lượng thiết bị"));
//isNaN = is Not A Number
while (isNaN(soLuong) || soLuong <= 0) {
  alert("Vui lòng nhập lại số lượng");
  soLuong = prompt("Nhập vào số lượng thiết bị");
}
var arr = new Array(soLuong);
for (var i = 0; i < soLuong; i++) {
  arr[i] = prompt("Nhập vào tên thiết bị thứ " + (i + 1));
}

//tạo bảng hiển thị nội dung
//thẻ mở bảng
var html = "<table border='1px' style='border-collapse:collapse;'>";
html += "<tr><th> STT</th> <th>Tên Thiết bị</th></tr> ";
//duyệt nội dung của arr và hiển thị nội dung ra bảng
for (var i = 0; i < soLuong; i++) {
  if (arr[i].trim().toLowerCase() === "computer") {
    //.trim() loại bỏ khoảng trắng không mong muốn
    html += "<tr><td>" + (i + 1) + "</td><td>" + arr[i] + "</td></tr>";
  }
}
//thẻ đóng bảng
html += "</table>";
document.write(html);
