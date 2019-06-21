var mangUser = require('./../models/data.json')
module.exports = {

// thuc hien dang ky gui tu client
 register: function (io) {

        io.on('connection', function (socket) {
            socket.on('client-send-user', function (data) {
                var check = false
                mangUser.forEach(function (i) {
                    if (i.username.indexOf(data.username) >= 0) {
                        socket.emit('server-that-bai')
                        return check = true
                    }
                })
                if (check == false) {

                    mangUser.push(data)
                    socket.user = data.username
                    socket.emit('dangky-thanhcong', data.username)
                    io.sockets.emit('server-sent-list', mangUser)

                }
            })
        })
    },

// thuc hien dang nhap gui tu client

login: function (io) {

        io.on('connection', function (socket) {

            socket.on('client-send-login', function (data) {
                var check = false
                mangUser.forEach(function (i, index) {
                    if (i.username.indexOf(data.username) == 0) {
                        if (mangUser[index].password == data.password) {
                            socket.user = data.username
                            socket.emit('dangky-thanhcong', data.username)
                            io.sockets.emit('server-sent-list', mangUser)
                            return check = true
                        }

                    }


                })
                if (check == false) {
                    socket.emit('server-that-bai')
                }

            })
        })

    },

//thuc hien logout gui tu client toi tat ca cac tai khoan khac

 logout: function (io) {

        io.on('connection', function (socket) {
            socket.on('client-logout', function () {
                mangUser = mangUser.filter(el => el !== socket.user)
                socket.broadcast.emit('server-sent-list', mangUser)
            })
        })

    },


// thuc hien gui tin toi tat ca client
sendMess: function (io) {

        io.on('connection', function (socket) {
            socket.on('client-send-mess', function (data) {


                io.sockets.emit('server-send-mess', { un: socket.user, mess: data })
            })

        })

    },


// trang thai  go tin 
typeText:function (io) {

    io.on('connection', function (socket) {
        
       
        socket.on('client-typing', function () {
            var note = socket.user + " is typing text"
            socket.broadcast.emit('typing',note)
            
        })

        socket.on('client-not-typing', function () {

            socket.broadcast.emit('not-typing')
        })


    })

}

}