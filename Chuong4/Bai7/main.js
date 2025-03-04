document.getElementById("nut-tinh-tuoi").addEventListener("click", function () {
    var D = new Date();
    var namsinh = document.getElementById("nam-sinh").value;
    var tuoi = D.getFullYear() - parseInt(namsinh);
    if (parseInt(namsinh) > D.getFullYear()) {
        document.getElementById("ketqua").value = "Năm sinh không được lớn hơn năm hiện tại!";
    } else {
        document.getElementById("ketqua").value = tuoi;
    }
});