document.getElementById("tinhtuoi").addEventListener("click", function () {
  var D = new Date();
  var namSinh = document.getElementById("namsinh").value;
  var Tuoi = D.getFullYear() - parseInt(namSinh);
  document.getElementById("result").value = Tuoi;
});
