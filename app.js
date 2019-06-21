var express = require('express');
var app = express()

var auth=require('./routers/auth.route')
app.use(express.static("public"))

app.set("view engine","ejs")
app.set("views","./views")

var server = require("http").Server(app);

//khai bao  de co the dung duoc socketio
var io = require("socket.io")(server)

server.listen(3000)

app.use('/', auth)

// khai bao file se thuc hien socketio
var socketio = require('./routers/socketio.route')

// cac chuc nang: 

// dang ky
socketio.register(io)
// dang nhap
socketio.login(io)
// thoat
socketio.logout(io)
//gui tin
socketio.sendMess(io)
//trang thai go tin
socketio.typeText(io)

module.exports = app;