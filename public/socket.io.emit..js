$(document).ready(function () {
  // register
  $('#registerData').click(function(){
        socket.emit("client-send-user",{username:$('input#userR').val(),password:$('input#passR').val()})
    })
    
    
//login
    $('#loginData').click(function(){
        socket.emit("client-send-login",{username:$('input#userL').val(),password:$('input#passL').val()})
    })


//logout  

    $('#logout').click(function(){
        socket.emit("client-logout")
        $('.registerform').show()
        $('.loginform').hide()
        $('.form-mess').hide()
    })

// send mess

    $('#send-mess').click(function(){
        socket.emit("client-send-mess",$('input#messText').val())
    })


});