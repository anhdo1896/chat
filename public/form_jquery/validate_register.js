$(document).ready(function () {
    $('#nameR_err').hide()    
    $('#passR_err').hide()    
    $('#registerData').prop('disabled',true)
    var nameR_err=true
    var passR_err=true

    $('#userR').keyup(function(){
        check_nameR()
    })
    
    $('#passR').keyup(function(){
        check_passR()
    })

    function check_nameR(){
        var name = $('#userR').val().length
        if(name<5||name>20){

            $('#nameR_err').html("Name is 5-20")
            $('#nameR_err').show()
            nameR_err=true
        }else{
            $('#nameR_err').hide()
            if(passR_err==false){
               
                $('#registerData').prop('disabled',false)
            }
            
            nameR_err=false
        }
    }

    function check_passR(){
        var pass = $('#passR').val().length
        if(pass<5||pass>20){

            $('#passR_err').html("Pass is 5-20")
            $('#passR_err').show()
            passR_err=true
        }
        else{
            $('#passR_err').hide()
           
            if(nameR_err==false){
               
                 $('#registerData').prop('disabled',false)
            }
            passR_err=false
        }
    }

});

    