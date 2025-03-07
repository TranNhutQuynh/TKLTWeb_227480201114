var arr = new Array();
//lưu trữ dữ liệu vào mảng
function Nhap() {
  var n = parseInt(prompt("Nhap so phan tu: "));
  //isNaN = "is Not a Number" => Kiểm tra n có phải là số không?
  if (isNaN(n) || n <= 0) {
    alert("Giá trị bạn nhập không hợp lệ!");
  }
  for (var i = 0; i < n; i++) {
    arr[i] = prompt("Nhap phan tu thu " + (i + 1 + ": "));
  }
}
//Hiển thị nội dung
function hienThi() {
  var kq = "";
  /*Sắp xếp mảng */
  arr.sort();
  /*vòng lặp in mảng */
  for (var i in arr) {
    kq += arr[i] + "\n";
  }
  document.getElementById("ds").value = kq;
}

//reset ô hiển thị
function reset() {
  document.getElementById("ds").value = "";
}
