
module.exports=function(io){
    var mangUser=['aaa']
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
        socket.on('client-logout',function(){
            mangUser=mangUser.filter(el=>el!==socket.user)
            socket.broadcast.emit('server-sent-list',mangUser)
        })
        socket.on('client-send-mess',function(data){
           
            
            io.sockets.emit('server-send-mess',{un:socket.user,mess:data})
        })
        
    })
}