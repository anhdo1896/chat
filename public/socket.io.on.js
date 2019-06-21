var socket = io.connect('http://localhost:3000');
socket.on('server-that-bai',function(){
    alert('Sai ten hoac da co nguoi dang ky')
})
socket.on('dangky-thanhcong',function(data){
   $('#currentUser').html("Hello "+data)
   $('.registerform').hide()
        $('.loginform').hide()
        $('.form-mess').show()
})
socket.on('server-sent-list',function(data){
   $('#currentUserOnline').html("")
   data.forEach(function(i){
       $("#currentUserOnline").append("<tr><td class='user'> "+ i+ "</td></tr>");
   })
   
})
socket.on('server-send-mess',function(data){
      $("#message").append("<div>"+data.un+":"+data.mess+"</div>");
 
})