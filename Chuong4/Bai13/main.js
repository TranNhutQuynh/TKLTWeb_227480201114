var kq = 0;

function kiemTra() {
  var a = document.getElementById("sohang1").value;
  var b = document.getElementById("sohang2").value;

  if (a == "" || b == "") {
    document.getElementById("ketqua").value =
      "Vui lòng nhập giá trị đầu vào cho a và b.";
    return;
  }
  if (isNaN(a) || isNaN(b) || a == " " || b == " ") {
    document.getElementById("ketqua").value =
      "Số hạng nhập vào phải là 1 số tự nhiên.";
    return;
  }
  return {
    a: parseFloat(a),
    b: parseFloat(b),
  };
}

function phepCong() {
  var value = kiemTra();
  if (!value) return;
  kq = value.a + value.b;
  document.getElementById("ketqua").value = kq;
}
function phepTru() {
  var value = kiemTra();
  if (!value) return;
  kq = value.a - value.b;
  document.getElementById("ketqua").value = kq;
}
function phepNhan() {
  var value = kiemTra();
  if (!value) return;
  kq = value.a * value.b;
  document.getElementById("ketqua").value = kq;
}
function phepChia() {
  var value = kiemTra();
  if (!value) return;
  if (value.b == 0) {
    document.getElementById("ketqua").value = "Không thể chia cho số 0";
  } else {
    kq = value.a / value.b;
    document.getElementById("ketqua").value = kq;
  }
}
function lamMoi() {
  document.getElementById("sohang1").value = "";
  document.getElementById("sohang2").value = "";
  document.getElementById("ketqua").value = "";
}
