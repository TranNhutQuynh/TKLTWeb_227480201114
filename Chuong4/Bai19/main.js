var tieude=document.title;
//ô họ tên
document.getElementById('hoten').addEventListener('mousemove',function(){
    document.title="Bạn đang di chuyển chuột vào ô nhập tên.";
})
document.getElementById('hoten').addEventListener('mouseleave',function(){
    document.title=tieude;
})
//nút gửi
document.getElementById('gui').addEventListener('mousemove',function(){
    document.title="Bạn đang di chuyển chuột vào nút Gửi.";
})
document.getElementById('gui').addEventListener('mouseleave',function(){
    document.title=tieude;
})

//radio
document.getElementById('nam').addEventListener('mousemove',function(){
    document.title="Bạn đang di chuyển chuột vào Giới tính nam.";
})
document.getElementById('nam').addEventListener('mouseleave',function(){
    document.title=tieude;
})

document.getElementById('nu').addEventListener('mousemove',function(){
    document.title="Bạn đang di chuyển chuột vào Giới tính nữ.";
})
document.getElementById('nu').addEventListener('mouseleave',function(){
    document.title=tieude;
})