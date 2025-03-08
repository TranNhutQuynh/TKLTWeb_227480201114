function HienThi() {
  var checkName = /^[\p{L}\s]+$/u;
  var ho = document.getElementById("ho").value;
  var ten = document.getElementById("ten").value;

  var kq = ho + " " + ten;

  if (ho == ""||ten=="") {
    document.getElementById("ketqua").value =
      "Lỗi! Không được để trống thông tin.";
    return;
  }
  if (kq[0] == " ") {
    document.getElementById("ketqua").value =
          "Lỗi!Không được để khoảng trắng trước chữ cái đầu tiên";
      return;
  }
  if (!checkName.test(kq)) {
    document.getElementById("ketqua").value =
      "Lỗi! Họ & Tên không được nhập ký tự đặc biệt";
    return;
  } else {
    document.getElementById("ketqua").value = kq;
  }
}
function Lam_Moi() {
  document.getElementById("ho").value = "";
  document.getElementById("ten").value = "";
  document.getElementById("ketqua").value = "";
}
