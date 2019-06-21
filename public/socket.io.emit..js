$(document).ready(function () {
  
    $('.registerform').hide()
    $('.form-mess').hide()
    $('#register').click(function(){
        $('.registerform').show()
        $('.loginform').hide()
    })

    $('#login').click(function(){
        $('.registerform').hide()
        $('.loginform').show()
    })

    $('#registerData').click(function(){
        socket.emit("client-send-user",$('input#userR').val())
    })

    $('#logout').click(function(){
        socket.emit("client-logout")
        $('.registerform').show()
        $('.loginform').hide()
        $('.form-mess').hide()
    })

    $('#send-mess').click(function(){
        socket.emit("client-send-mess",$('input#messText').val())
    })
    $('#loginData').click(function(){
        socket.emit("client-send-login",$('input#userL').val())
    })

});