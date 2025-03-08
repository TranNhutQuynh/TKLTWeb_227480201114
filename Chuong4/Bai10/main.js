var a, b;
var kq = 0;
function NhapSo() {
  var input = prompt("Nhập a:");
  if (input == null) return; // Nếu bấm huỷ, thoát hàm
  a = parseFloat(input);
  while (isNaN(a)) {
    input = prompt("Giá trị của a phải là 1 số! Nhập lại.");
    if (input == null) return; // Nếu bấm huỷ, thoát hàm
    a = parseFloat(input);
  }
  input = prompt("Nhập b:");
  if (input == null) return;
  b = parseFloat(input);
  while (isNaN(b)) {
    input = prompt("Giá trị của b phải là 1 số!Nhập lại.");
    if (input == null) return;
    b = parseFloat(input);
    document.getElementById("soA").innerHTML = a;
    document.getElementById("soB").innerHTML = b;
  }
}
function phepCong() {
  if (a == null || b == null) {
    alert("Vui lòng nhập giá trị đầu vào cho a và b.");
  } else {
    kq = a + b;
    document.getElementById("result").value = kq;
  }
}
function phepTru() {
  if (a == null || b == null) {
    alert("Vui lòng nhập giá trị đầu vào cho a và b.");
  } else {
    kq = a - b;
    document.getElementById("result").value = kq;
  }
}
function phepNhan() {
  if (a == null || b == null) {
    alert("Vui lòng nhập giá trị đầu vào cho a và b.");
  } else {
    kq = a * b;
    document.getElementById("result").value = kq;
  }
}
function phepChia() {
  if (a == null || b == null) {
    alert("Vui lòng nhập giá trị đầu vào cho a và b.");
  } else if (b == 0) {
    alert("Không thể chia cho số 0");
  } else {
    kq = a / b;
    document.getElementById("result").value = kq;
  }
}
