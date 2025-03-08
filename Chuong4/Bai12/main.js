// chỉ cho phép các ký tự là chữ cái và ký tự khoảng trắng
var check = /^[\p{L}\s]+$/u;
// kiểm tra chuỗi chỉ cho phép nhập vào là số
var checkNumber = /^\d+$/;

function display() {
  var name = document.getElementById("hoTen").value;
  for (var i = 0; i < name.length; i++) {
    if (name[0] == " ")
      alert("Không được viết khoảng trắng trước ký tự đầu tiên!");
    if (!check.test(name[i])) {
      alert(
        "Tên không thể để trống chứa số hoặc ký tự đặc biệt được! Vui lòng nhập lại."
      );
      return; //dừng hàm nếu không hợp lệ
    } else {
      document.getElementById("HoTen").innerHTML = name;
    }
  }

  var oldStr = document.getElementById("namSinh").value;
  var D = new Date();
  if (oldStr[0] == " ") {
    alert("Không được viết khoảng trắng trước ký tự đầu tiên!");
    return;
  }
  if (!checkNumber.test(oldStr)) {
    alert("Không được nhập chữ và các ký tự đặc biệt vào năm sinh!");
    return;
  }
  var old = parseInt(oldStr);
  if (old <= 0 || old > D.getFullYear()) {
    alert("Năm sinh không hợp lệ! Vui lòng nhập lại.");
    return;
  } else {
    document.getElementById("NamSinh").innerHTML = old;
  }
}
