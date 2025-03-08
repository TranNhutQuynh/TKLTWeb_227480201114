function tinh() {
    var a = document.getElementById('sohang1').value;
    var b = document.getElementById('sohang2').value;
    var phepcong = document.getElementById('cong').checked;
    var pheptru = document.getElementById('tru').checked;
    var phepnhan = document.getElementById('nhan').checked;
    var phepchia = document.getElementById('chia').checked;
    var kq = 0;

    if (phepcong) {
        //phép cộng
        if (a == "" || b == "") {
            document.getElementById('ketqua').value = "Hãy nhập đủ dữ liệu.";
            return;
        }
        else if (isNaN(a) || isNaN(b)) {
            document.getElementById('ketqua').value = "Số hạng nhập vào phải là số tự nhiên.";
            return
        } else {
            kq = parseInt(a) + parseInt(b);
            document.getElementById('ketqua').value = kq;
        }
    }
    //phép trừ
    if (pheptru) {
        if (a == "" || b == "") {
            document.getElementById('ketqua').value = "Hãy nhập đủ dữ liệu.";
            return;
        }
        else if (isNaN(a) || isNaN(b)) {
            document.getElementById('ketqua').value = "Số hạng nhập vào phải là số tự nhiên";
            return;
        }
        else {
            kq = parseInt(a) - parseInt(b);
            document.getElementById('ketqua').value = kq;
        }
    }
    //phép nhân
    if (phepnhan) {
        if (a == "" || b == "") {
            document.getElementById('ketqua').value = "Hãy nhập đủ dữ liệu.";
            return;
        }
        else if (isNaN(a) || isNaN(b)) {
            document.getElementById('ketqua').value = "Số hạng nhập vào phải là số tự nhiên";
            return;
        }
        else {
            kq = parseInt(a) * parseInt(b);
            document.getElementById('ketqua').value = kq;
        }
    }
    //phép chia
    if (phepchia) {
        if (a == "" || b == "") {
            document.getElementById('ketqua').value = "Hãy nhập đủ dữ liệu.";
            return;
        }
        else if (isNaN(a) || isNaN(b)) {
            document.getElementById('ketqua').value = "Số hạng nhập vào phải là số tự nhiên";
            return;
        }
        else if (b == 0) {
            document.getElementById('ketqua').value = "Không thể chia cho số 0";
            return;
        }
        else {
            kq = parseInt(a) / parseInt(b);
            document.getElementById('ketqua').value = kq;
        }
    }
}