function tinhTien(){
    var sl=document.getElementById('soluong').value.trim();
    var dg=document.getElementById('dongia').value.trim();

    if(sl==""||dg==""){
        document.getElementById('thanhtien').value = ""; // Xóa giá trị thành tiền khi nhập chưa đủ
        return;
    }

    var soLuong=parseInt(sl);
    var donGia=parseFloat(dg);

    if(isNaN(soLuong)||soLuong<=0 ||!Number.isInteger(soLuong)){
        alert("số lượng phải là 1 số nguyên dương!");
        document.getElementById('soluong').value="";
        return;
    }
    if(isNaN(donGia)||donGia<=0){
        alert("đơn giá phải là 1 số dương!");
        document.getElementById('dongia').value="";
        return;
    }
    var thanhTien=soLuong*donGia;
    document.getElementById('thanhtien').value=thanhTien;
}