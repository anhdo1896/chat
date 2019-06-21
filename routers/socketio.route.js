var mangUser=['aaa']
var mangUser = require('.')
module.exports={
    
    register : function(io){
    
     io.on('connection',function(socket){
  
        
        socket.on('client-send-user',function(data){
          
            if(mangUser.indexOf(data)>=0){
                socket.emit('server-that-bai')
            }else{
                mangUser.push(data)
                socket.user = data
                socket.emit('dangky-thanhcong',data)
                io.sockets.emit('server-sent-list',mangUser)
             }
            })
        })
    },

    login : function(io){
    
     io.on('connection',function(socket){
        
        socket.on('client-send-login',function(data){
       
        if(mangUser.indexOf(data)===0){
            socket.user = data
            socket.emit('dangky-thanhcong',data)
            io.sockets.emit('server-sent-list',mangUser)
        }else{
            socket.emit('server-that-bai')
        }
    }) 
})

 },
    logout : function(io){
    
     io.on('connection',function(socket){
        socket.on('client-logout',function(){
        mangUser=mangUser.filter(el=>el!==socket.user)
        socket.broadcast.emit('server-sent-list',mangUser)
    })
})

 },
 
    sendMess : function(io){
    
     io.on('connection',function(socket){
        socket.on('client-send-mess',function(data){
   
    
            io.sockets.emit('server-send-mess',{un:socket.user,mess:data})
        })

})

 },
 
}