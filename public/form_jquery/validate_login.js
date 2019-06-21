$(document).ready(function () {
    $('#name_err').hide()    
    $('#pass_err').hide()    
    $('#loginData').prop('disabled',true)
   
    var name_err=true
    var pass_err=true


    $('#userL').keyup(function(){
        check_nameL()
        
    })
    $('#passL').keyup(function(){
        check_passL()
    })

  
    

    function check_nameL(){
        var name = $('#userL').val().length
        if(name<5||name>20){

            $('#name_err').html("Name is 5-20")
            $('#name_err').show()
            name_err=true
        }else{
            $('#name_err').hide()
            if(pass_err==false){
                $('#loginData').prop('disabled',false)
                $('#registerData').prop('disabled',false)
            }
            
            name_err=false
        }
    }
    
    function check_passL(){
        var pass = $('#passL').val().length
        if(pass<5||pass>20){

            $('#pass_err').html("Pass is 5-20")
            $('#pass_err').show()
            pass_err=true
        }
        else{
            $('#pass_err').hide()
           
            if(name_err==false){
                 $('#loginData').prop('disabled',false)
                 $('#registerData').prop('disabled',false)
            }
            pass_err=false
        }
    }
    
    
});