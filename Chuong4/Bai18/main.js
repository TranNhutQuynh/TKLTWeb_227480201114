function demkytu(){
    var a=document.getElementById('noidung').value;
    if(a.length>200){
        alert('Lỗi');
    }else{
        document.getElementById('sokytu').value=a.length;
    }
}