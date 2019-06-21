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
});