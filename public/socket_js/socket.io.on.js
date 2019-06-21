// ket noi socket
var socket = io.connect('http://localhost:3000');

// tra ve khi login hoac register that bai
socket.on('server-that-bai',function(){
    alert('Wrong username or password')
    
})

// register thanh cong
socket.on('dangky-thanhcong',function(data){
   $('#currentUser').html("Hello "+data)
   $('.registerform').hide()
        $('.loginform').hide()
        $('.form-mess').show()
})

// gui danh sach cac user dang hoat dong
socket.on('server-sent-list',function(data){
   $('#currentUserOnline').html("")
   data.forEach(function(i){
       $("#currentUserOnline").append("<tr><td class='user'> "+ i.username+ "</td></tr>");
   })
   
})

// gui message den tat ca moi nguoi trong mang
socket.on('server-send-mess',function(data){
      $("#message").append("<div>"+data.un+":"+data.mess+"</div>");
 
})


// khi mot nguoi dang go tin, thi phia ben kia xuat hien 
socket.on('typing',function(note){
    $("#type").append("<img width=30px src='/img/typing.gif'> "+note)
 
})

//khong con go tin
socket.on('not-typing',function(){
      $("#type").html("");
 
})